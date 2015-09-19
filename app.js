var app = angular.module('OurToDo', []);

app.controller('todoController', function ($scope){
  $scope.list = [];

  $scope.add = function() {
    $scope.list.push($scope.item);
    $scope.item = '';
  };

  $scope.remove = function(index) {
    $scope.list.splice(index, 1);
  };
});


