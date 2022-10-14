var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    //   $scope.message = "hihi";
  })
  .directive("wellcomeMessageHihi", function () {
    return {
      template: `<h1>ahiihihhihi1</h1>`,
    };
  });
