/*We have already separated out the duplicate note code into nw‑card.html.
Clean up the template using $scope syntax instead of controllerAs.*/

angular.module('NoteWrangler').directive('nwCard', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    
    //Inject the $scope service into the controller.
    controller: function($scope) {
      
      //Set the header property on the controller's $scope
      //instead of this. Note: We do not want to modify the string.
      $scope.header = 'Note Title';
      
      //Set description property on the controller's $scope instead
      //of this. Note: We do not want to modify the string.
      $scope.description = 'A lovely note description.';
    },
    //Delete the unnecessary alias for our controller.
    //controllerAs: 'card'
  };
}]);
