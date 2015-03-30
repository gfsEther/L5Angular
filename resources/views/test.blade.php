@extends('app')

@section('content')
  <div ng-controller="mainController">
    <h1>Hello @{{ name }}!</h1>       
  </div>

  <div ng-controller="secondController">
    <div>
      <label>What is your twitter handle?</label>
      <input type="text" ng-model="handle">
    </div>
    <hr>
    <h1>twitter.com/@{{lowercasehandle()}}</h1>
  </div>

  <script type="text/javascript" src="/js/vendor/angular.js"></script>
  <script type="text/javascript" src="/js/test.js"></script>
@endsection