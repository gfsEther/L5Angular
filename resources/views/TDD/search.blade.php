@extends('seo')


@section('content')


    <div class="container" ng-controller='SearchController'>
      <form class="form-inline">
        <div class="form-group">
          <input type="text" ng-model="searchQuery" class="form-control">
          <button class="form-control" ng-click="search(searchQuery)">search</button>
        </div>


        <ul class="list-group">
          <li ng-repeat="result in results" class="list-group-item">
            <a href="#/detail/@{{result.id}}">@{{result.name}}</a>    
          </li>
        </ul>

      </form>

      <div ng-view></div>
    </div>
   


  <script type="text/javascript" src="/js/vendor/angular.js"></script>
  <script type="text/javascript" src="/js/vendor/angular-route.js"></script>
  <script type="text/javascript" src="/js/TDD/search.js"></script>
@stop