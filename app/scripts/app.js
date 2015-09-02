'use strict';

angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'settingsCtrl',
        controllerAs: 'settings'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
