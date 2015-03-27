var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')
        .publish(
            'jquery/dist/jquery.js',
            'public/js/vendor/jquery.js'
        )
        .publish(
            'bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'public/js/vendor/bootstrap.js'
        )
        .publish(
            'font-awesome/css/font-awesome.min.css',
            'public/css/vendor/font-awesome.css'
        )
        .publish(
            'font-awesome/fonts',
            'public/fonts'
        )
        .publish(
            'bootstrap-sass-official/assets/fonts',
            'public/fonts'
        )
        .publish(
            'angular/angular.min.js',
            'public/js/vendor/angular.js'
        )
        .styles([
            "public/css/app.css",
            "public/css/vendor/font-awesome.css"
        ], 'public/css', 'public/css/all.css')
        .scripts([
            "public/js/vendor/jquery.js",
            "public/js/vendor/bootstrap.js"
        ], "public/js", "public/js/all.js");
});
