angular.module('NoteWrangler')

//Inject the Note factory into the controller and use the new all() method instead of calling $http() directly.
.controller('NotesIndexController', ["Note",'$scope', function(Note, $scope) {
  Note.all().success(function(data){
  $scope.notes = data;
  });
}]);