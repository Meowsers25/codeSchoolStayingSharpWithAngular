/*Now that you know about factories, let's clean up the controller
a bit by moving that $http() call into its own factory.*/

angular.module('NoteWrangler')

/*Move the $http() call from the controller into the all() 
function in our Note factory and return the resulting promise.
Don't forget to inject the $http service!*/
.factory('Note', ["$http", function NoteFactory($http) {
  return {
      
    //Return an object from the NoteFactory() function that has a method named all.  
    all: function(){
      return $http({method: "GET", url: "/notes"});
    }
  };
}]);