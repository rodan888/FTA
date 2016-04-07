<?php

require_once '../app/start.php';

// Run app
$app->run();

//user => prezentace
//pass => 551294d49287d73d48933228a1918c4d

date_default_timezone_set('Europe/Prague');

require '../vendor/autoload.php';

// Prepare app
$app = new \Slim\Slim(array(
    'templates.path' => '../templates',
));

// Create monolog logger and store logger in container as singleton 
// (Singleton resources retrieve the same log resource definition each time)
$app->container->singleton('log', function () {
    $log = new \Monolog\Logger('slim-skeleton');
    $log->pushHandler(new \Monolog\Handler\StreamHandler('../logs/app.log', \Monolog\Logger::DEBUG));
    return $log;
});

$app->container->singleton('dbConn', function(){
    
    $options = [
        'driver'   => 'mysql',
        'host'     => 'portal-02.sledovanipaliva.cz',
        'username' => 'fueltrackwww',
        'password' => '83AezTdq&',
        'database' => 'fueltrack',
        'charset'  => 'utf8',
    ];

   return new Dibi\Connection($options); 
});



dibi::connect([
    'driver'   => 'postgre',
    'host'     => 'portal-02.sledovanipaliva.cz',
    'username' => 'fueltrackwww',
    'password' => '83AezTdq&',
    'database' => 'fueltrack',
    'charset'  => 'utf8'
]);

// Prepare view
$app->view(new \Slim\Views\Twig());
$app->view->parserOptions = array(
    'charset' => 'utf-8',
    'cache' => realpath('../templates/cache'),
    'auto_reload' => true,
    'strict_variables' => false,
    'autoescape' => true
);
$app->view->parserExtensions = array(new \Slim\Views\TwigExtension());

// Define routes
$app->get('/', function () use ($app) {
    // Sample log message
    $app->log->info("Slim-Skeleton '/' route");
    // Render index view
    $app->render('app/index.html');
});

require_once '../app/api/user.php';

// Run app
$app->run();
