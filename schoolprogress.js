angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {
 $scope.myStyle={'width':'0%'};
 $scope.left25={'width':'2.5%','float':'left','background-image':'linear-gradient(to right, white, rgb(220,220,220))'};
 $scope.left75={'width':'7.5%','float':'left','background-image':'linear-gradient(to right, rgb(220,220,220), rgb(150,150,150))'};
$scope.left40={'width':'40%','float':'left','background-image':'linear-gradient(to right, rgb(150,150,150), rgb(120,120,120))'};
$scope.right40={'width':'40%','float':'left','background-image':'linear-gradient(to left, rgb(150,150,150), rgb(120,120,120))'};
$scope.right75={'width':'7.5%','float':'left','background-image':'linear-gradient(to left, rgb(220,220,220), rgb(150,150,150))'};
$scope.right25={'width':'2.5%','float':'left','background-image':'linear-gradient(to left, white, rgb(220,220,220))'};

 $scope.cohort=25;
     $scope.score=0;
  
$scope.$watch('score',function(){
 $scope.myStyle.width=($scope.score+10)+'%';
 
});
 

}
