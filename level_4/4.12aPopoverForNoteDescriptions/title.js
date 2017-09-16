/*Instead of a Bootstrap tooltip, 
we are going to display additional tweeted
info about a note inside our very own popover directive!*/

/*Inside a $timeout(), make a Bootstrap popover, to replace
the default tooltip on hover, by passing the popover() method 
{ trigger: 'hover' }. Refer to the Bootstrap API docs for the 
popover() method and parameters. Don't forget to rename our
directive to 'popover'.*/
angular.module('NoteWrangler')
.directive('popover', function($timeout) {
  return function(scope, element, attrs) {
    $timeout(function(){
      
      /*Using the attributes argument of the function returned by our
      new popover directive, make note attributes available to our
      popover by providing them as content in the options object passed
      to popover(). Note: the attributes argument is the third argument 
      for the function returned by the popover directive, after scope and element.*/
      element.popover({trigger: "hover", content: attrs.popover});
    });
    
    //Clean up after our popover directive when $destroy is fired on scope.
    scope.$on("$destroy", function(){
      element.popover("destroy");
    });
  };
});
