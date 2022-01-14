<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/eni-encheres', name: 'eni-encheres')]
    public function encheres(): Response
    {
        return $this->render('projects/encheres.html.twig');
    }

    #[Route('/eni-sortir', name: 'eni-sortir')]
    public function sortir(): Response
    {
        return $this->render('projects/sortir.html.twig');
    }

    #[Route('/uniwave', name: 'uniwave')]
    public function uniwave(): Response
    {
        return $this->render('projects/uniwave-3D.html.twig');
    }
}
