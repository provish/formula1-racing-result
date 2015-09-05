

  app.factory('DriverService', function ($http) {

    // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
    // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
    // service with a JSON service that gets its data from a remote server without having to changes anything
    // in the modules invoking the data service since the api is already async.

    return {
      findAll: function () {
        return $http({
          method: 'JSONP',
          url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
        });
      },

      findById: function (driverId) {
        return $http({
          method: 'JSONP',
          url: 'http://ergast.com/api/f1/2013/drivers/' + driverId + '/driverStandings.json?callback=JSON_CALLBACK'
        });
      },

      getDriverRaces: function (driverId) {
        return $http({
          method: 'JSONP',
          url: 'http://ergast.com/api/f1/2013/drivers/' + driverId + '/results.json?callback=JSON_CALLBACK'
        });
      }
    }

  });
