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
    .controller("PreferencesCtrl", function($scope, $cordovaOauth) {
        $scope.facebookLogin = function() {
            console.log("click here");
            $cordovaOauth.facebook("456022761229836", ["email"]).then(function(result) {
                // results
                console.log(result);
            }, function(error) {
                // error
            });
        }


    //$scope.fbLogin = function() {
    //    openFB.login(
    //        function(response) {
    //            if (response.status === 'connected') {
    //                console.log('Facebook login succeeded');
    //                $scope.closeLogin();
    //            } else {
    //                alert('Facebook login failed');
    //            }
    //        },
    //        {scope: 'email,publish_actions'});
    //}
    //
    //
    //
    //openFB.api({
    //    path: '/me',
    //    params: {fields: 'id,name'},
    //    success: function(user) {
    //        $scope.$apply(function() {
    //            $scope.user = user;
    //        });
    //    },
    //    error: function(error) {
    //        alert('Facebook error: ' + error.error_description);
    //    }
    //});

});

//
//module.controller('MyCtrl', function($scope,) {
//    $scope.facebookLogin = function() {
//        $cordovaOauth.facebook("CLIENT_ID_HERE", ["email"]).then(function(result) {
//            // results
//        }, function(error) {
//            // error
//        });
//    }
//
//    // $cordovaOauth.dropbox(string appKey);
//    // $cordovaOauth.digitalOcean(string clientId, string clientSecret);
//    // $cordovaOauth.google(string clientId, array appScope);
//    // $cordovaOauth.github(string clientId, string clientSecret, array appScope);
//    // $cordovaOauth.linkedin(string clientId, string clientSecret, array appScope, string state);
//    // $cordovaOauth.instagram(string clientId, array appScope);
//    // $cordovaOauth.box(string clientId, string clientSecret, string state);
//    // $cordovaOauth.reddit(string clientId, string clientSecret, array appScope);
//    // $cordovaOauth.twitter(string consumerKey, string consumerSecretKey);
//    // $cordovaOauth.meetup(string consumerKey);
//    // $cordovaOauth.foursquare(string clientId);
//    // $cordovaOauth.salesforce(string loginUrl, string clientId);
//    // $cordovaOauth.strava(string clientId, string clientSecret, array appScope);
//});










