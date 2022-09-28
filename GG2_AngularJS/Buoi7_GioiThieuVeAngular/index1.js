var myApp = angular.module("newModule", []);
// myApp.controller("newController", function ($scope) {
//   $scope.sum = function () {
//     $scope.total =
//       Number.parseInt($scope.number1) + Number.parseInt($scope.number2);
//   };
// });

myApp.controller("newController", tinhTong);

function tinhTong($scope) {
  $scope.sum = function () {
    $scope.total =
      Number.parseInt($scope.number1) + Number.parseInt($scope.number2);
  };
}
