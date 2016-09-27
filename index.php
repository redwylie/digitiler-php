<?php


require_once('vendor/twig/twig/lib/Twig/Autoloader.php');
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem('views');

$twig = new Twig_Environment($loader, array(
  'cache' => false,
  'auto_reload' => true,
));


$file = file_get_contents('./images.json', true);

//var_dump($file);

$json = $file;

$images = json_decode($json);


$template = $twig->loadTemplate('index.html');
echo $template->render(array(
		'name' => 'Max',
		'title' => 'Digitiler - High Resolution Digital Photography',
     'images' => $images->{'images'}
	));


//include ("cards.php")

?>