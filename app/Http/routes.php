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

Route::get('start', function() {
  return view('start');
});

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);


// TDD
Route::get('tdd/protractor', function (){
  return view('TDD.todo');
});

Route::get('tdd', function (){
  return view('testRunner');
});

Route::get('tdd/comments', function (){
  return view('TDD.comments');
});

Route::get('tdd/flipflop', function (){
  return view('TDD.flipflop');
});

Route::get('tdd/search', function (){
  return view('TDD.search');
});

