@extends('wApp')


@section('content')

  <div class="container">
    <div ng-view></div>
  </div>



  <script src="/js/vendor/angular.js"></script>
  <script src="/js/vendor/angular-route.js"></script>
  <script src="/js/vendor/angular-resource.js"></script>
  <script src="/js/app.js"></script>
  <script src="/js/routes/route.js"></script>
  <script src="/js/services/services.js"></script>
  <script src="/js/controllers/controllers.js"></script>
  <script src="/js/directive/directives.js"></script>
@stop