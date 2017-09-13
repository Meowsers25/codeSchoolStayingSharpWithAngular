//Now that you are familiar with $scope, let's practice using it with an outside controller.


angular.module('NoteWrangler')

//Attach notes to $scope instead of the controller ( this).
.controller('NotesIndexController', ['$http', "$scope", function($http, $scope) {
  var controller = $scope;

  $http({method: 'GET', url: '/notes'}).success(function(data) {
    controller.notes = data;
  });
}]);
