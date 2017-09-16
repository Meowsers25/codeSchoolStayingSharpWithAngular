/*Let's convert our custom Note factory to use AngularJS resource.
Remove all(), find(), and create() methods from our Note service
and replace them with the $resource equivalent.*/



angular.module('NoteWrangler')
.factory('Note', ['$resource', function NoteFactory($resource) {
  
  //Replace the existing object that is returned from the Note factory with an AngularJS resource that uses '/notes' as the data source.
  return $resource("/notes", {}, {});
}]);