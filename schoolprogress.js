angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {

 $scope.cohort=25;
 $scope.myStyle={'background-color':$scope.score};

     $scope.score=0;
  

}
