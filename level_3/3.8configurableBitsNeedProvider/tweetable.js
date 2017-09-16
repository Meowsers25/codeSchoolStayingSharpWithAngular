/*We want to be able to configure the characterLength before
Tweetable runs. Refactor the Tweetable factory into a provider 
and expose a setLength() function that will allow us to set
a characterLength in our app config.*/

angular.module('NoteWrangler')

//Change the factory definition into a provider definition.
.provider('Tweetable', function TweetableProvider() {
  var characterLength = 144;
  
  //Create a setLength() function attached to the provider that sets the characterLength variable.
  this.setLength = function(maxLength) {
    characterLength = maxLength;
  };
  
  /*Wrap the existing function returned by our TweetableProvider()
  function in a call to the $get() function required by providers.
  Don't forget to move the $http service injection!*/
  this.$get = function($http){
   return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        maxLength: characterLength
      }
    });
    };
  };
});
