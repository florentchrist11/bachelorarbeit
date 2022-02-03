<?php


namespace App\Services;


/**
 * Class PreferenceFunctionService
 * @package App\Services
 */
class PreferenceFunctionService
{
    private $criteria;

    /**
     * PreferenceFunctionService constructor.
     * @param $criteria
     */
    public function __construct(array $criteria)
    {
        $this->criteria = $criteria;
    }

    /**
     * @param $value1
     * @param $value2
     * @return int|string
     */
    public function getResult($value1, $value2)
    {
        $preference = (int)$this->criteria['preferenceFunction'];
        $beneficial = (boolean)$this->criteria['beneficial'];
        $val1 = (float)$value1;
        $val2 = (float)$value2;
        $p = (float)$this->criteria['p'];
        $q = (float)$this->criteria['q'];
        $s = (float)$this->criteria['s'];
        if ($beneficial) {
            $d = $val1 - $val2;
        } else {
            $d = $val2 - $val1;
        }
        $result = 0;

        // usual preference
        if (($preference === 0) && $d > 0) {
            $result = 1;
        }

        // U-sharpe
        if (($preference === 1) && $d > $q) {
            $result = 1;
        }

        // Vsharpe
        if ($preference === 2) {
            if ($d > 0 && $d <= $p) {
                $result = $d / $p;
            }
            if ($d > $p) {
                $result = 1;
            }
        }

        // level Criterion
        if ($preference === 3) {
            if ($d > $q && $d <= $p) {
                $result = 0.5;
            }
            if ($d > $p) {
                $result = 1;
            }
        }

        // Vshape and Indiference
        if ($preference === 4) {
            if ($d > $q && $d <= $p) {
                $result = ($d - $q) / ($p - $d);
            }
            if ($d > $p) {
                $result = 1;
            }
        }

        // Gaussian
        if (($preference === 5) && $d > 0) {
            $exp = 0.5 * ($d / $s) * ($d / $s);
            $result = exp(-$exp);
        }

        return number_format($result, 2);
    }


}