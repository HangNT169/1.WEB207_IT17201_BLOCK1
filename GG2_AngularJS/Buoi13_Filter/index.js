let myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
  $scope.myNumber = 123432432423.31222;
  $scope.now = new Date();
  $scope.name = "Nguyen Van A";
  $scope.sv = {
    name: "Nguyen Van B",
    gioiTinh: 1,
    chuyenNganh: "udpm",
  };
  $scope.arr = [
    {
      ma: "WEB207",
      ten: "Frontend Framework",
    },
    {
      ma: "SOF2041",
      ten: "Dự án mẫu",
    },
    {
      ma: "MOB1023",
      ten: " Java 2",
    },
    {
      ma: "MOB104",
      ten: "Agile",
    },
    {
      ma: "COM108",
      ten: "C",
    },
  ];
  $scope.searchText = "";
});
