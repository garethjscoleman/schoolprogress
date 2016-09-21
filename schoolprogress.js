angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {
 $scope.myStyle={'width':'10%'};
 $scope.cohort=25;
     $scope.score=0;
  
$scope.$watch('score',function(){
 $scope.myStyle.width=$scope.score+'%';
 
});
 

}
