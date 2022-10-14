//B1: Khoi tao 1 module
var myApp = angular.module("myModule", []);

// B2: Tao controller
// C1: Ham cu the
// myApp.controller("myController", helloWorld);

// // scope: la 1 service. Dung de ket noi giua model va view
// function helloWorld($scope) {
//   $scope.message = "Ahihi do ngoc";
// }

//  C2: Ham nac danh
myApp.controller("myController", function ($scope) {
  $scope.message = "hihihi";
  // Cach tao Object trong JS
  var employee = {
    firstName: "Hang",
    lastName: "Nguyen",
    gender: "Female",
  };
  $scope.e = employee;
  var info = ["hihi1", "hihi2"];
  $scope.i = info;
});
