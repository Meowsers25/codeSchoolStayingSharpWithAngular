/*Use the routeParams service to fetch a single note 
based on the id given in the URL from the server URL /notes/:id.

An example of a possible URL for this might be: http://example.com/#/notes/42.*/

angular.module('NoteWrangler')

//nject the routeParams service into the NotesShowController so that we get access to the id in the URL.
//nject the $http service into the NotesShowController so we can use it to fetch a note.
.controller('NotesShowController', ["$routeParams", "$http",function($routeParams, $http) {
    
    //Use the $http() function to fetch a note from the /notes/:id URL.
    //Upon success, save the resulting data to a note variable on the controller.
    var controller= this;
    $http({method: 'GET', url: '/notes/' + $routeParams.id})
    .success(function(data){
      controller.note = data;
    });
}]);
