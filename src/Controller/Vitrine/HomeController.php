<?php

namespace App\Controller\Vitrine;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HomeController
 * @package App\Controller\Vitrine
 */
class HomeController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="index", priority="-1", defaults={"reactRouting": null}, requirements={"reactRouting"=".+"})
     */
    public function index(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('vitrine/index.html.twig', []);
    }


}
