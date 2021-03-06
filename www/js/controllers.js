angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $cordovaOauth, $localStorage, $location) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };
})


/**
 * Cards Controller
 */
.directive('noScroll', function ($document) {

    return {
        restrict: 'A',
        link: function ($scope, $element, $attr) {

            $document.on('touchmove', function (e) {
                e.preventDefault();
            });
        }
    }
});