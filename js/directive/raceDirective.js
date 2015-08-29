angular.module('directory.raceDirective', [])
  .directive('raceData', function () {
    return {
      scope: {
        race: "=data"
      },
      restrict: 'E',
      replace: false,
      template: ' <div><strong>Round : </strong>{{race.round}}</div>' +
      '<div><strong>Tournament : </strong><img  src="pics/flags/{{race.Circuit.Location.country}}.png" />  {{race.raceName}}</div>' +
      '<div><strong>Organizer : </strong>{{race.Results[0].Constructor.name}}</div>' +
      '<div><strong>Grid : </strong>{{race.Results[0].grid}}</div>' +
      '<div><strong>Rank : </strong>{{race.Results[0].position}}</div>'
    }
  });
