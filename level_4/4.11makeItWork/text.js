/*Using the included external library,
SlabText, create a wrapper directive nwSlabText
so that we can use it in the NoteWrangler app.*/

angular.module('NoteWrangler')
.directive('nwSlabText', function($timeout) {
  
  //Create a link function for the nwSlabText directive.
  return function(scope, element){
    
    /*We have a problem: the link function of the nwSlabText
    directive is being called before the element has been
    populated with data. To solve this, inject and use the $timeout service.*/
    $timeout(function(){
    //Call the slabText() method on directive's element. Refer to the SlabText docs for the method name.
    element.slabText();
      });
  };
});
