/**
 * Create a connection con firebase server
 */

myApp.factory("conversationService", ['$firebase', "$rootScope",
    function($firebase, $rootScope){
    //// create a reference to the Firebase where we will store our data
    //var ref = new Firebase("https://spotted2.firebaseio.com/");
    //
    //// this uses AngularFire to create the synchronized array
    //// We limit the results to 10
    //return $firebase(ref.limitToLast(10)).$asArray();
    return "factory"
}]);