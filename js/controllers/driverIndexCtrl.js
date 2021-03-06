
/**
 * Controller to show all employees data
 */
app.controller('DriverIndexCtrl', function ($scope, DriverService) {

    /**
     * Function to get the list of all employees
     */
    var getAllDrivers = function () {
      DriverService.findAll().then(function (response) {
        $scope.drivers = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        console.log($scope.drivers);
      });
    };

    getAllDrivers();

  });
