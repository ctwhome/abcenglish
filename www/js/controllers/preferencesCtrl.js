/**
 * @ngdoc controller
 * @name app.controller:theoryCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('starter')
    .controller("PreferencesCtrl", function($scope, $cordovaOauth, $localStorage, $location) {
 
    
     // Access login with facebook and keepo data in localStorage
    $scope.loginFacebook = function () {
        console.log('click here');
//        $cordovaOauth.facebook("CLIENT_ID_HERE", ["email", "read_stream", "user_website", "user_location", "user_relationships"])
        $cordovaOauth.facebook(
                                "456022761229836", //CLIENT_ID_HERE
                               ["email", 
                                "read_stream", 
                                "user_website", 
                                "user_location", 
                                "user_relationships" ])
            .then(function (result) {
                $localStorage.accessToken = result.access_token;
                $location.path("/profile");
            }, function (error) {
                alert("There was a problem signing in!  See the console for logs");
                console.log(error);
            });
    };

});