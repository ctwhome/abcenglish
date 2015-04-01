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
    .controller("ConversationCtrl", function($scope) {
 
    openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
            $scope.$apply(function() {
                $scope.user = user;
            });
        },
        error: function(error) {
            alert('Facebook error: ' + error.error_description);
        }
    });
});