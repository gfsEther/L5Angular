<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');
Route::get('home/show', ['as' => 'home.show', 'uses' => 'HomeController@show']);

Route::get('test', function() {
  return view('test');
});

Route::get('watch', function() {
  return view('watch');
});

Route::get('route', function () {
  return view('routetest');
});

Route::get('weather', function() {
  return view('weather');
});

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
