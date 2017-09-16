/*We've created the isActive() and activate() functions on
the scope of the nwNavItem directive. Within these functions,
we'll need to access the controller of the nwNav directive
to set and get which nav item is active.*/

angular.module('NoteWrangler')
.directive('nwNavItem', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-nav-item.html',
    require: '^nwNav',
    link: function(scope, element, attrs, nwNavCtrl) {
      scope.isActive = function() {
        
        //Within the isActive() function, call the getActiveNav()
        //function from the required controller to get the current
        //active nav value. Compare the return value from the 
        //controller with the scope.name value and return the result
        //from the isActive function.
        return nwNavCtrl.getActiveNav() === scope.name;
      };

      scope.activate = function() {
        
        //We need a way to set the active nav value when a nav item
        //is clicked. In our activate() function, call the setActiveNav()
        //function on the require'd controller and pass the scope.name as
        //an argument.
        return nwNavCtrl.setActiveNav(scope.name);

      };
    },
    
    //First, we need a name for the nav item to work. Create a new
    //isolate scope on the nwNavItem directive and allow it to accept 
    //an attribute (@) value called name.
    scope: {name: "@"}
  };
});
