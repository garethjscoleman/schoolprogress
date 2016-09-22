angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {
 var range=20;
 var sigma = 6;
 $scope.myStyle={'margin':'0%'};
 $scope.myStyle2={'width':'50%','float':'left'};

 $scope.left25={'width':'16%','float':'left','background-image':'linear-gradient(to right, white, rgb(235,235,235))'};
 $scope.left75={'width':'17%','float':'left','background-image':'linear-gradient(to right, rgb(235,235,235), rgb(210,210,210))'};
$scope.left40={'width':'17%','float':'left','background-image':'linear-gradient(to right, rgb(210,210,210), rgb(130,130,130))'};
$scope.right40={'width':'17%','float':'left','background-image':'linear-gradient(to left, rgb(210,210,210), rgb(130,130,130))'};
$scope.right75={'width':'17%','float':'left','background-image':'linear-gradient(to left, rgb(235,235,235), rgb(210,210,210))'};
$scope.right25={'width':'16%','float':'left','background-image':'linear-gradient(to left, white, rgb(235,235,235))'};

$scope.rleft25={'width':'16%','float':'left','background-image':'linear-gradient(to right, white, rgb(235,0,235))'};
 $scope.rleft75={'width':'17%','float':'left','background-image':'linear-gradient(to right, rgb(235,0,235), rgb(210,0,210))'};
$scope.rleft40={'width':'17%','float':'left','background-image':'linear-gradient(to right, rgb(210,0,210), rgb(130,0,130))'};
$scope.rright40={'width':'17%','float':'left','background-image':'linear-gradient(to left, rgb(210,0,210), rgb(130,0,130))'};
$scope.rright75={'width':'17%','float':'left','background-image':'linear-gradient(to left, rgb(235,0,235), rgb(210,0,210))'};
$scope.rright25={'width':'16%','float':'left','background-image':'linear-gradient(to left, white, rgb(235,0,235))'};

 $scope.cohort=25;
  $scope.score=0;
$scope.factor=50;

$scope.$watch('cohort',function(){

$scope.factor = 50*7/Math.sqrt($scope.cohort)
  $scope.myStyle2.width=$scope.factor+'%';
   $scope.myStyle.margin=  (0.5*(100-$scope.factor))*(($scope.score+sigma)/sigma)+'%';
 
});
  
$scope.$watch('score',function(){
   $scope.myStyle.margin=  (0.5*(100-$scope.factor))*(($scope.score+sigma)/sigma)+'%';
 
});
 

}
