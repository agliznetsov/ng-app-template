'use strict';

angular.module('myApp')
  .controller('AboutCtrl', function ($scope, $http) {

    $scope.getVersion = function () {
      $http({
        method: 'GET',
        url: "/api/about",
        headers: {
          'Accept': 'application/json'
        },
        cache: false
      }).then(
        function (response) {
          $scope.version = response.data.version + ' ' + response.data.dateTime;
        },
        function (error) {
          $scope.version = error;
        }
      );
    };

  });
