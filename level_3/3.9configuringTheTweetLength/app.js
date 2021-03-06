/*Now that our provider is ready to go, let's call the setLength()
method of TweetableProvider to configure the acceptable maximum 
tweet length. Instead of 144 characters, we need to allow for a
characterLength of 40.*/

angular.module('NoteWrangler', ['ngRoute'])

//Let's call config() on our NoteWrangler module and provide it an anonymous function.
//Inject TweetableProvider into the config() function.
.config(function(TweetableProvider){
    
    /*Call the setLength() function of TweetableProvider
    from within the config() function and pass it a value of 40.*/
  TweetableProvider.setLength(40);
});