/*NoteWrangler navigation has now been
broken into two parts: the children — nw-nav-item — and
the parent — nw-nav.

Help the children and parent communicate by using what
we have learned about $scope and link. They'll need to 
function as a nav should when clicked.*/

angular.module('NoteWrangler')
.directive('nwNav', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      
      //Create a default activeNav variable on
      //nwNav's $scope and make it default to 'Notes'.
      $scope.activeNav = "Notes";
      
      //Create a function called getActiveNav in the controller
      //of the nw-nav directive that returns the value of $scope.activeNav variable.
      this.getActiveNav = function(){
        return $scope.activeNav;
      };
      
     //Create a function called setActiveNav on the controller of the nw-nav 
     //directive that sets the value of $scope.activeNav variable. 
      this.setActiveNav = function(activeNav) {
        $scope.activeNav = activeNav;
      };
      
      //Return this from our controller.
      return this;
    }
  };
});
