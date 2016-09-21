angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {
 $scope.myStyle={'width':'0%','float':'left'};
 $scope.myStyle2={'width':'50%','float':'left'};

 $scope.left25={'width':'2.5%','float':'left','background-image':'linear-gradient(to right, white, rgb(220,220,220))'};
 $scope.left75={'width':'7.5%','float':'left','background-image':'linear-gradient(to right, rgb(220,220,220), rgb(180,180,180))'};
$scope.left40={'width':'40%','float':'left','background-image':'linear-gradient(to right, rgb(180,180,180), rgb(150,150,150))'};
$scope.right40={'width':'40%','float':'left','background-image':'linear-gradient(to left, rgb(180,180,180), rgb(150,150,150))'};
$scope.right75={'width':'7.5%','float':'left','background-image':'linear-gradient(to left, rgb(220,220,220), rgb(180,180,180))'};
$scope.right25={'width':'2.5%','float':'left','background-image':'linear-gradient(to left, white, rgb(220,220,220))'};

$scope.rleft25={'width':'2.5%','float':'left','background-image':'linear-gradient(to right, white, rgb(220,0,220))'};
 $scope.rleft75={'width':'7.5%','float':'left','background-image':'linear-gradient(to right, rgb(220,0,220), rgb(180,0,180))'};
$scope.rleft40={'width':'40%','float':'left','background-image':'linear-gradient(to right, rgb(180,0,180), rgb(150,0,150))'};
$scope.rright40={'width':'40%','float':'left','background-image':'linear-gradient(to left, rgb(180,0,180), rgb(150,0,150))'};
$scope.rright75={'width':'7.5%','float':'left','background-image':'linear-gradient(to left, rgb(220,0,220), rgb(180,0,180))'};
$scope.rright25={'width':'2.5%','float':'left','background-image':'linear-gradient(to left, white, rgb(220,0,220))'};

 $scope.cohort=25;
  $scope.score=0;
$scope.factor=50;

$scope.$watch('cohort',function(){

$scope.factor = 50*7/Math.sqrt($scope.cohort)
  $scope.myStyle2.width=$scope.factor+'%';
   $scope.myStyle.width=  (0.5*(100-$scope.factor))*(($scope.score+5)/5)+'%';
 
});
  
$scope.$watch('score',function(){
   $scope.myStyle.width=  (0.5*(100-$scope.factor))*(($scope.score+5)/5)+'%';
 
});
 

}
