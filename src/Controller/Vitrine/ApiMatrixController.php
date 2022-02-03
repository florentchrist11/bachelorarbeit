<?php


namespace App\Controller\Vitrine;


use App\Services\PreferenceFunctionService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse as JsonResponseAlias;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/matrix")
 * Class ApiMatrixController
 */
class ApiMatrixController extends AbstractController
{

    /**
     * @Route("/calculate/" , name="api_matrix_calculate" , methods={"POST"} )
     * @param Request $request
     * @return JsonResponseAlias
     */
    public function indexCalcul(Request $request): JsonResponseAlias
    {
        $content = json_decode($request->getContent(), true);
        $criteria = $content['criteria'];
        $itemCriteria = $content['itemsCriteria'];
        $criteriaValues = [];
        $nomalizeMatrix = [];
        $weight = [];
        $graphData = [];

        // arrange each item with item criteria = $criteriaValues
        foreach ($criteria as $c) {
            $itemsValue = [];
            $weight[$c['name']] = $c['weight'];
            foreach ($itemCriteria as $key => $items) {
                $itemsValue[] = $items[$c['name']];
            }
            $criteriaValues[$c['name']] = $itemsValue;
        }


        // normaliZe with preference function = $nomalizeMatrix
        foreach ($criteria as $cri) {
            $itemsValue = [];
            $service = new PreferenceFunctionService($cri);
            $valueCriteria = $criteriaValues[$cri['name']];
            foreach ($valueCriteria as $key => $items) {
                foreach ($valueCriteria as $k => $i) {
                    if ($key !== $k) {
                        $itemsValue[$k . '-' . $key] = $service->getResult($i, $items);
                    } else {
                        $itemsValue[$key . '-' . $key] = '';
                    }
                }
            }
            $nomalizeMatrix[$cri['name']] = $itemsValue;
        }

        // aggregation function and multiply by weifht = $aggragation
        $evalFistKey = array_keys($nomalizeMatrix)[0];
        $firstValue = $nomalizeMatrix[$evalFistKey];
        $aggregation = [];

        foreach ($firstValue as $key => $value) {
            $minSum = 0;
            foreach ($criteria as $keyCriteria => $cri) {
                if ($nomalizeMatrix[$cri['name']][$key] !== '') {
                    $formatValue = $nomalizeMatrix[$cri['name']][$key] * $weight[$cri['name']] / 100;
                    $minSum += number_format($formatValue, 2);
                } else {
                    $minSum = '';
                }
            }
            $aggregation[$key] = $minSum;
        }

        // calculate the flow of each criteria and setting name culomn = $nameColunm
        $nameColunm = [];
        $divisor = count($criteria) - 1;
        foreach ($itemCriteria as $key => $item) {
            $graphData['nodes'][] = [
                'id' => $key,
                'name' => $item['name'],
                'x' => 50,
                'y' => 50
            ];
            $leavingFlow = 0;
            $enteringFlow = 0;
            foreach ($itemCriteria as $k => $v) {
                if ($key !== $k) {
                    $leavingFlow += $aggregation[$k . '-' . $key];
                    $enteringFlow += $aggregation[$key . '-' . $k];
                }
                $nameColunm[] = $itemCriteria[$key]['name'] . ' => ' . $itemCriteria[$k]['name'];
            }
            $itemCriteria[$key]['leavingFlow'] = number_format($leavingFlow / $divisor, 3);
            $itemCriteria[$key]['enteringFlow'] = number_format($enteringFlow / $divisor, 3);
            $itemCriteria[$key]['diffFlow'] = number_format(($leavingFlow - $enteringFlow) / $divisor, 3);
        }

        // comparaison des itemsCriteria = $comparaison
        $comparaison = [];
        foreach ($itemCriteria as $key => $item) {
            foreach ($itemCriteria as $k => $i) {
                if ($key !== $k) {
                    if (($item['leavingFlow'] > $i['leavingFlow'] && $item['enteringFlow'] < $i['enteringFlow']) ||
                        ($item['leavingFlow'] > $i['leavingFlow'] && $item['enteringFlow'] === $i['enteringFlow']) ||
                        ($item['leavingFlow'] === $i['leavingFlow'] && $item['enteringFlow'] < $i['enteringFlow'])) {
                        $graphData['links'][] = [
                            'source' => $key,
                            'target' => $k
                        ];
                        $comparaison[] = $item['name'] . ' is prefere to ' . $i['name'];

                    } elseif ($item['leavingFlow'] === $i['leavingFlow'] && $item['enteringFlow'] === $i['enteringFlow']) {

                        $comparaison[] = 'indiferent situation ' . $item['name'] . ' and ' . $i['name'];
                    } else {

                        $comparaison[] = 'Icompatible situation ' . $item['name'] . ' and ' . $i['name'];
                    }
                }
            }
        }

        // sorting with promethee comparing flow = $sortItemsCriteria
        $sortItemsCriteria = $itemCriteria;
        usort($sortItemsCriteria, [$this, "custom_sort"]);

        return $this->json([
            'normalizeMatrix' => $nomalizeMatrix,
            'aggregation' => $aggregation,
            'itemsCriteria' => $itemCriteria,
            'sortItems' => $sortItemsCriteria,
            'nameCulonm' => $nameColunm,
            'conclusion' => $comparaison,
            'criteria' => $criteria,
            'graphData' => $graphData
        ]);
    }

    public function custom_sort($a, $b): bool
    {
        return $a['diffFlow'] < $b['diffFlow'];
    }

}