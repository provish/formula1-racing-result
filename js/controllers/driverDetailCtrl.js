angular.module('directory.driverDetailCtrl', [])
/**
 * Controller to get the details of a particular employee
 */
  .controller('DriverDetailCtrl', function ($scope, $stateParams, DriverService) {
    DriverService.findById($stateParams.driverId).then(function (response) {
      $scope.driver = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
      console.log($scope.driver);
    })

   DriverService.getDriverRaces($stateParams.driverId).then(function(response) {
      $scope.races = response.data.MRData.RaceTable.Races;
    })
  })
