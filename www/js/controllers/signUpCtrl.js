/**
 * @ngdoc controller
 * @name app.controller:theoryCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */

myApp.controller('SignUpController', function($scope, $localStorage, $cordovaFacebook, $ionicLoading, isDevice, $ionicPopup, $location){
        /*
         * Learn how facebooks graph api works: https://developers.facebook.com/docs/graph-api/quickstart/v2.2
         * The array params "public_profile", "email", "user_friends" are the permissions / data that the app is trying to access.
         */
    
    if($localStorage.userData){
        $location.path("/app/theory");
    }
        $scope.fbLogin = function() {

            // If Runnig on the device
            if (isDevice.check()) {
                $cordovaFacebook.login(["public_profile", "email", "user_friends"])
                    .then(function (success) {

                        // Redirect to the app
                        $location.path("/app/theory");

                        /*
                         * Get user data here.
                         * For more, explore the graph api explorer here: https://developers.facebook.com/tools/explorer/
                         * "me" refers to the user who logged in. Dont confuse it as some hardcoded string variable.
                         *
                         */
                        //To know more available fields go to https://developers.facebook.com/tools/explorer/
                        $cordovaFacebook.api("me?fields=id,name,picture", [])
                            .then(function (result) {
                                /*
                                 * As an example, we are fetching the user id, user name, and the users profile picture
                                 * and assiging it to an object and then we are logging the response.
                                 */
                                $localStorage.userData = {
                                    id: result.id,
                                    name: result.name,
                                    pic: result.picture.data.url
                                }

                                // Store in localstorage he credentials
                                $scope.fbData = userData;

                            }, function (error) {
                                // Error message
                            })

                    }, function (error) {
                        // Facebook returns error message due to which login was cancelled.
                        // Depending on your platform show the message inside the appropriate UI widget
                        // For example, show the error message inside a toast notification on Android
                    });

            }
            // If Running on the browser
            else {
                // FIXME hack for the facebook funtionality in the browser
                $localStorage.userData = {
                    name: "Jesus Garcia (Browser)",
                    pic: "https://avatars0.githubusercontent.com/u/4195550?v=3&amp;s=220"
                }

                $ionicPopup.show({
                    title: 'This option is only available on the device',
                    buttons: [
                        { text: 'Go to the app', onTap: function(e) {
                            $location.path("/app/theory");
                            return true;
                        } },
                    ]
                })
            }
        }

        /*
         * Google login
         */

        //$scope.googleLogin = function(){
        //
        //    $ionicLoading.show({template: 'Loading...'});
        //    /*
        //     * Google login. This requires an API key if the platform is "IOS".
        //     * Example: $cordovaGooglePlus.login('yourApiKey')
        //     */
        //    $cordovaGooglePlus.login()
        //        .then(function(data){
        //
        //            $scope.googleData = JSON.stringify(data, null, 4);
        //            $ionicLoading.hide();
        //
        //        }, function(error){
        //
        //            // Google returns error message due to which login was cancelled.
        //            // Depending on your platform show the message inside the appropriate UI widget
        //            // For example, show the error message inside a toast notification on Android
        //            $ionicLoading.hide();
        //
        //        });
        //}
    });