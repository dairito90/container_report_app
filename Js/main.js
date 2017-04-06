var app = angular.module("ContainerApp", []);
app.controller('ContainerReportCtrl', ['$scope',function($scope){
 // $scope.company= '';
 // $scope.containernumber= '';
 // $scope.arrivaldate= '';
 // $scope.departureday= '';
 // $scope.numberofpieces= '';
  var items=[];
 $scope.handleclick=function(){
     console.log("hi");
     var item= {
         company:$scope.company,
         containernumber:$scope.containernumber,
         arrivaldate:$scope.arrivaldate,
         departureday:$scope.departureday,
         numberofpieces:$scope.numberofpieces
     }
     $scope.items.push(item);
     $scope.company="";
     $scope.containernumber= "";
     $scope.arrivaldate= "";
     $scope.departureday= "";
     $scope.numberofpieces= "";

 }







}]);
