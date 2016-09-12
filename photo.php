<?php

require_once('vendor/twig/twig/lib/Twig/Autoloader.php');
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem('views');

$twig = new Twig_Environment($loader, array(
  'cache' => false,
  'auto_reload' => true,
));

$photo = $_GET['photo'];

switch ($photo) {
	case "flower" :
		$photo = 'zooms/2016/09-03-2016/robot/robot';
		break;
	case "sunflower" :
		$photo = 'zooms/2016/09-September/09-03-2016/sunflower/sunflower';
		break;
	case "owl" :
		$photo = 'zooms/2016/09-September/09-07-2016/owl/owl';
		break;
	default:
		break;
}

$template = $twig->loadTemplate('photo.html');
echo $template->render(array(
		'title' => 'Digitiler - High Resolution Digital Photography',
		'photo' => $photo,
		'id' => $id,
		'view' => 'Full'
	));

?>