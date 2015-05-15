@extends('com')


@section('content')


  <div class="container" ng-controller="CommentController">
    
    
    <form class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-10">
          <input type="text" class="form-control" ng-model="newComment">         
        </div>
        <div class="col-sm-2">
          <button type="button" class="form-control" ng-click="add(newComment)">Submit</button>      
        </div>
      </div>
      
      
      <ul class="list-group">
        <li ng-repeat="comment in comments" class="col-sm-10 list-group-item">
          <span ng-model="comment.value">@{{comment.value}}</span>
          <button type="button" class="btn btn-info glyphicon glyphicon-hand-up pull-right" ng-click="like(comment)">
            Like 
            <span class="badge" ng-model="comment.likes">@{{comment.likes}}</span>
          </button>       
        </li>
      </ul>

      
    </form>
    

    

  </div>


  <script type="text/javascript" src="/js/vendor/angular.js"></script>
  <script type="text/javascript" src="/js/TDD/comment.js"></script>
@stop