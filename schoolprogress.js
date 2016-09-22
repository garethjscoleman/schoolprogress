angular.module('school_progress', ['ui.bootstrap']);

function SchoolProgressCtrl($scope) {
 //always make this even
 var range=20;
 var sigma = 3;
 $scope.numberline=[];
 var iloop=-range/2
 while (iloop<=(range/2)){
  $scope.numberline.push(iloop);
  iloop++
 }
 $scope.numberlinestyle= {
    'float': 'left',
    'width': (100/(range+1)) + '%',
    'text-align': 'center',
    'border-top-color':'black',
    'border-top-style':'solid',
    'border-top-width':'2px'
};
 $scope.myStyle={'margin-left':'0%'};
 $scope.myStyle2={'width':'50%','float':'left'};

 $scope.left25={'width':'16%','float':'left','background-image':'linear-gradient(to right, white, rgb(235,235,235))'};
 $scope.left75={'width':'17%','float':'left','background-image':'linear-gradient(to right, rgb(235,235,235), rgb(190,190,190))'};
$scope.left40={'width':'17%','float':'left','background-image':'linear-gradient(to right, rgb(190,190,190), rgb(130,130,130))'};
$scope.right40={'width':'17%','float':'left','background-image':'linear-gradient(to left, rgb(190,190,190), rgb(130,130,130))'};
$scope.right75={'width':'17%','float':'left','background-image':'linear-gradient(to left, rgb(235,235,235), rgb(190,190,190))'};
$scope.right25={'width':'16%','float':'left','background-image':'linear-gradient(to left, white, rgb(235,235,235))'};

$scope.rleft25={'width':'16%','float':'left','background-image':'linear-gradient(to right, white, rgb(235,0,235))'};
 $scope.rleft75={'width':'17%','float':'left','background-image':'linear-gradient(to right, rgb(235,0,235), rgb(210,0,210))'};
$scope.rleft40={'width':'17%','float':'left','background-image':'linear-gradient(to right, rgb(210,0,210), rgb(130,0,130))'};
$scope.rright40={'width':'17%','float':'left','background-image':'linear-gradient(to left, rgb(210,0,210), rgb(130,0,130))'};
$scope.rright75={'width':'17%','float':'left','background-image':'linear-gradient(to left, rgb(235,0,235), rgb(210,0,210))'};
$scope.rright25={'width':'16%','float':'left','background-image':'linear-gradient(to left, white, rgb(235,0,235))'};

 $scope.cohort=25;
  $scope.score=0;
$scope.marginforschoolbarcontainer=50;
$scope.adjustmentforcohortsize =(5/Math.sqrt($scope.cohort));
$scope.widthofschoolbar = 100*(2*(sigma)*$scope.adjustmentforcohortsize/(range+1))   ;
 $scope.marginforschoolbarcontainer= (100*(((range+1)/2)+$scope.score)/range)-($scope.widthofschoolbar/2);

$scope.$watch('cohort',function(){

 $scope.adjustmentforcohortsize =(6/Math.sqrt($scope.cohort));
 $scope.widthofschoolbar = 100*(2*(sigma)*$scope.adjustmentforcohortsize/(range+1))   ;
 $scope.myStyle2.width=$scope.widthofschoolbar+'%';
   
 $scope.marginforschoolbarcontainer= (100*(((range+1)/2)+$scope.score)/(range+1))-($scope.widthofschoolbar/2);
 $scope.myStyle['margin-left']=   $scope.marginforschoolbarcontainer+'%';
 
});
  
$scope.$watch('score',function(){
  $scope.marginforschoolbarcontainer= (100*(((range+1)/2)+$scope.score)/(range+1))-($scope.widthofschoolbar/2);
   $scope.myStyle['margin-left']=  (0.5*(100-$scope.marginforschoolbarcontainer))*(($scope.score+((range+1)/2))/((range+1)/2))+'%';
 
});
 

}
