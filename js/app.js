var app = angular.module('directory', ['ionic']);

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in /js/service
// controllers are found in /js/controller
//app.module('directory', ['ionic', 'directory.services', 'directory.driverDetailCtrl', 'directory.directives', 'directory.driverIndexCtrl','directory.raceDirective'])


  app.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('driver-index', {
        url: '/driver',
        templateUrl: 'templates/driver-index.html',
        controller: 'DriverIndexCtrl'
      })

      .state('driver-detail', {
        url: '/driver/:driverId',
        templateUrl: 'templates/driver-detail.html',
        controller: 'DriverDetailCtrl'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/driver');

  });
