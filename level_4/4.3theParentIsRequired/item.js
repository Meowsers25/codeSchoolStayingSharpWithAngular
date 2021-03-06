/*The nwNavItem directive needs to be
able to communicate with the parent nwNav
directive in order to tell when a nav item should
be active. Let's go ahead and set that up.*/

angular.module('NoteWrangler')
.directive('nwNavItem', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-nav-item.html',
    
    //Within the nwNavItem directive, use the require option
    //to gain access to the controller from the parent nwNav directive.
    require: "^nwNav",
    
    //Give the nwNavItem directive a link function. Make sure to fill in all the
    //arguments so that we have access to the controller required from the previous task.
    link: function(scope, element, attrs, nwNav){
      
    }
  };
});