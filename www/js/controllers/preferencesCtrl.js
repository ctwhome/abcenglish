/**
 * @ngdoc controller
 * @name app.controller:theoryCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */
myApp.controller("PreferencesCtrl", function($scope, $localStorage, $location) {

    $scope.fbData = $localStorage.userData;

    $scope.logout = function(){
        delete $localStorage.userData;
        $location.path('signUp')
    }
});








