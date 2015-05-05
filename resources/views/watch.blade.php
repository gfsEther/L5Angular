@extends('app')


@section('content')
 
  <div ng-controller='mainController'>
    <div>
      <label>What is your twitter handle?</label>
      <input type="text" ng-model="handle">
    </div>
    <div class="alert alert-danger" ng-if='handle.length <= characteres'>
      Must be more than 5 characteres
    </div> 
    <div class="alert alert-success" ng-show='handle.length > characteres'>
      Good length
    </div> 

    <hr>
    <h1>twitter.com/@{{lowercasehandle()}}</h1>  


    <div class="container">
      <div ng-controller="secController">
        <input type="button" value="Click me" ng-click="alertClick()" class="btn btn-primary">

        <hr>

        <div ng-cloak>@{{name}}</div>
        <div>
          <ul>
            <li ng-repeat="us in user">
              @{{us.id}} = @{{us.name}}
            </li>
          </ul>
          Add User 
          Name: <input type="text" ng-model="newUser"/>
          Email: <input type="text" ng-model="email"/>
          <a href="#" class="btn btn-primary" ng-click="addUser()">Add</a>
        </div>
      </div>
    </div>
  </div>

  
  <script type="text/javascript" src="/js/vendor/angular.js"></script>
  <script type="text/javascript" src="/js/watch.js"></script>
@stop