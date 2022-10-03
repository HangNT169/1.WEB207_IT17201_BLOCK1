function blueController($scope, $routeParams) {
  // $routeParams dung de lay cai tham so tu url
  $scope.message = "Blue - " + $routeParams.name;
}
