angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {
 $scope.myStyle={'width':'0%'};
 $scope.myStyle2={'width':'50%'};

 $scope.left25={'width':'2.5%','float':'left','background-image':'linear-gradient(to right, white, rgb(220,220,220))'};
 $scope.left75={'width':'7.5%','float':'left','background-image':'linear-gradient(to right, rgb(220,220,220), rgb(180,180,180))'};
$scope.left40={'width':'40%','float':'left','background-image':'linear-gradient(to right, rgb(180,180,180), rgb(150,150,150))'};
$scope.right40={'width':'40%','float':'left','background-image':'linear-gradient(to left, rgb(180,180,180), rgb(150,150,150))'};
$scope.right75={'width':'7.5%','float':'left','background-image':'linear-gradient(to left, rgb(220,220,220), rgb(180,180,180))'};
$scope.right25={'width':'2.5%','float':'left','background-image':'linear-gradient(to left, white, rgb(220,220,220))'};

 $scope.cohort=25;
  $scope.score=0;

$scope.$watch('cohort',function(){

var factor = 50*5/Math.sqrt($scope.cohort)
  $scope.myStyle2.width=factor+'%';
 
});
  
$scope.$watch('score',function(){
 $scope.myStyle.width=(10*($scope.score+5))+'%';
 
});
 

}
