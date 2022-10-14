var myApp = angular.module("myModule", []);

myApp.controller("classController", classController);
function classController($scope, $rootScope) {
  // $scope.message = "Hang";
  $rootScope.message = "hihihi";
}

myApp.controller("contentController", contentController);
function contentController($scope) {
  // $scope.message = "Hang1";
}
