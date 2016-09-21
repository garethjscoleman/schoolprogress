angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {

 $scope.cohort=25;
     $scope.score=0;
  $scope.myStyle={'width':$scope.score};

 

}
