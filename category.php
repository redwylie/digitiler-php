<?php

require_once('vendor/twig/twig/lib/Twig/Autoloader.php');
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem('views');

$twig = new Twig_Environment($loader, array(
  'cache' => false,
  'auto_reload' => true,
));

$category = null;
$category = $_GET['category'];

$file = file_get_contents('./images.json', true);

//var_dump($file);
//var_dump($photoId);

$json = $file;

$obj = json_decode($json);

//print $obj->{'images'};

$categoryImages = array();

foreach ($obj->{'images'} as &$image) {
    if ($image->category == $category) {
        array_push($categoryImages, $image);
    };
}

//var_dump($photo);

$template = $twig->loadTemplate('category.html');
echo $template->render(array(
		'title' => 'Digitiler - High Resolution Digital Photography',
		'categoryTitle' => $category,
		'images' => $categoryImages,
		'id' => $id,
		'view' => 'Full'
	));

?>