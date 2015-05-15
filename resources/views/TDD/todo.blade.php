@extends('angular')


@section('content')


  <div class="container" >
    <div ng-controller="todoController">
      <form class="form-inline">
        <div class="input-group">
          <div class="input-group-addon">Add Item</div>
          <input type="text" class="form-control" ng-model="newTodoItem">
        </div>
        <input id="AddItemButton" type="button" class="btn btn-success" value="Add" ng-click="add(newTodoItem)">
      </form>  
      <ul class="list-group">
        <li ng-repeat="item in list" class="list-group-item">
            
          @{{item}}

          <div class="pull-right">
            <a id="Remove@{{item}}" class="badge" ng-click="remove($index)">Del</a>
          </div>
        </li>

      </ul>
    </div>
  </div>


  <script type="text/javascript" src="/js/vendor/angular.js"></script>
  <script type="text/javascript" src="/js/TDD/todo.js"></script>
@stop