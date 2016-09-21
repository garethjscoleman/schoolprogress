angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {
 $scope.myStyle={'width':'0%'};
 $scope.left25={'width':'2.5%','background-image':'linear-gradient(to right, white, rgba(0,0,0,1))'};
 $scope.left75={'width':'7.5%','background-image':'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.8))'};
$scope.left40={'width':'40%','background-image':'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))'};
$scope.right40={'width':'40%','background-image':'linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0.2))'};
$scope.right75={'width':'7.5%','background-image':'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.8))'};
$scope.right25={'width':'2.5%','background-image':'linear-gradient(to left, white, rgba(0,0,0,1))'};

 $scope.cohort=25;
     $scope.score=0;
  
$scope.$watch('score',function(){
 $scope.myStyle.width=($scope.score+10)+'%';
 
});
 

}
