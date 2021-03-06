<?php

	namespace Skeleton\Controllers;
	
	use Silex\Application;
	use Silex\ControllerProviderInterface;
	
	class ExempleController implements ControllerProviderInterface{
		
		public function connect(Application $app){
			
			$controllers = $app['controllers_factory'];
			
			$controllers -> get('/', get_class().'::index');
			
			return $controllers;
			
		}
		
		public function index(Application $app){
			
			return $app['twig'] -> render('index.twig');
			
		}
		
	}
	
?>