angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {
 $scope.myStyle={'width':'0%'};
 $scope.left25={'width':'2.5%','background-image':'linear-gradient(to right, white, rgb(20,20,20))'};
 $scope.left75={'width':'7.5%','background-image':'linear-gradient(to right, rgb(20,20,20), rgb(50,50,50))'};
$scope.left40={'width':'40%','background-image':'linear-gradient(to right, rgb(50,50,50), rgb(200,200,200))'};
$scope.right40={'width':'40%','background-image':'linear-gradient(to left, rgb(50,50,50), rgb(200,200,200))'};
$scope.right75={'width':'7.5%','background-image':'linear-gradient(to left, rgb(20,20,20), rgb(50,50,50))'};
$scope.right25={'width':'2.5%','background-image':'linear-gradient(to left, white, rgb(20,20,20))'};

 $scope.cohort=25;
     $scope.score=0;
  
$scope.$watch('score',function(){
 $scope.myStyle.width=($scope.score+10)+'%';
 
});
 

}
