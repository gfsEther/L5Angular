@extends('startApp')


@section('content')

  <div class="container">
    <div ng-view></div>
  </div>



  <script src="/js/vendor/angular.js"></script>
  <script src="/js/vendor/angular-route.js"></script>
  <script src="/js/start.js"></script>
@stop