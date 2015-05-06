@extends('app')


@section('content')

  <a href="#/main" class='btn btn-primary'>Main</a>
  <a href="#/second" class='btn btn-info'>Second</a>

  <div class="container">
    <div ng-view>
    
    </div>
  </div>


  <script type="text/javascript" src="/js/vendor/angular.js"></script>
  <script type="text/javascript" src="/js/vendor/angular-route.js"></script>
  <script type="text/javascript" src="/js/route.js"></script>
@stop