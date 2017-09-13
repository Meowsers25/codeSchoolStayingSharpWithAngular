/*Some notes have been altered to have a tweeted property
set to a timestamp of when that note was tweeted.*/

/* {
  "tweeted": "603590400"
}*/

/*We want to be able to edit how the card looks if it has been tweeted.
Let's use the link function to access the directive's element.*/

angular.module('NoteWrangler')
.directive('nwCard', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-card.html',
    scope: {
      header: '=',
      description: '=',
      tweeted: '='
    },
    
    //Create a link function in the directive and include the parameters we will need to grab element.
    link: function(scope, element){
        
    //Add a class of tweeted to the nw-card element for any card that has a tweeted property on its scope.    
      if (scope.tweeted) {
        element.addClass('tweeted');
}
    }
  };
});
