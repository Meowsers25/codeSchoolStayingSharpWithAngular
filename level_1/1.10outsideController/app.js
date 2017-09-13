/*In order for a new note to be created by a user on the
new notes page, we need to add a controller and use the 
$http service to create a new note. This time around, 
we'll use an external controller for the new notes page.*/

angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: function($http){
        var controller = this;
        $http({method: 'GET', url: '/notes'}).success(function(data){
          controller.notes = data;
        });
      },
      controllerAs: 'notesCtrl'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html',
    
      //Attach the NotesCreateController to the new notes route.
      controller: 'NotesCreateController',
    
      //Give the controller an alias we can reference in the template.
      controllerAs: 'newNotesCtrl'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
