let productAPI = "https://63379dcf132b46ee0be3304d.mockapi.io/api/products";
let myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope, $http, $window) {
  $scope.product = {
    id: "",
    ten: "",
    so_luong: "",
    gia_nhap: "",
    gia_ban: "",
    mieu_ta: "",
  };
  $scope.products = [];
  //   HTTP: GET, POST, PUT, DELETE

  //  Get all-  Get
  $http
    .get(productAPI)
    .then(function (dataResponse) {
      $scope.products = dataResponse.data;
      // Tra ve 1 list data
      console.log(dataResponse);
    })
    .catch(function (error) {
      console.log(error);
    });
  //  add - post
  $scope.onFormSubmit = function (event) {
    event.preventDefault();
    $http
      .post(productAPI, $scope.product)
      .then(function () {
        $window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //   update - put
  //  B1: detail san pham
  $scope.selectProduct = function (item) {
    let id = item.id;
    $http
      .get(productAPI + "/" + id)
      .then(function (response) {
        $scope.product = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //   B2: Edit
  $scope.edit = function () {
    let id = $scope.product.id;
    console.log($scope.product);
    $http
      .put(productAPI + "/" + id, $scope.product)
      .then(function () {
        $window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   Delete
  $scope.delete = function (item) {
    let id = item.id;
    $http
      .delete(productAPI + "/" + id)
      .then(function () {
        $window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
});
