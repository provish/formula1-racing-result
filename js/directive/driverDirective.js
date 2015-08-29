angular.module('directory.directives', [])
  .directive('driverData', function () {
    return {
      scope: {
        item: "=data"
      },
      restrict: 'E',
      replace: false,
      template: '<img src="pics/flags/{{item.nationality}}.png" />'+'<div><h3>{{item.givenName}} {{item.familyName}}</h3></br>' +
      '<p>{{item.nationality}}</p> </div>',
      link: function (scope, elem, attr) {
        elem.on('click', function (ev) {
          elem.css('background-color', 'red !important');
        })
      }
    }
  });
