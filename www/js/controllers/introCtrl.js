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
    .controller("IntroCtrl", function($scope, $state, $ionicSlideBoxDelegate) {



        $scope.nextSlide = function() {
            $ionicSlideBoxDelegate.next();
        }

        //// Called to navigate to the main app
        //$scope.startApp = function() {
        //    $state.go('main');
        //};
        //$scope.next = function() {
        //    $ionicSlideBoxDelegate.next();
        //};
        //$scope.previous = function() {
        //    $ionicSlideBoxDelegate.previous();
        //};
        //
        //// Called each time the slide changes
        //$scope.slideChanged = function(index) {
        //    $scope.slideIndex = index;
        //};


        });
