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
    .controller('theoryCtrl', function($scope){
        
        $scope.contents = [
            { "title": 'Grammar', "image":"http://lorempixel.com/200/200/abstract/1","description":"Sort description here, probably something funny", "namekey": 'gramar' },
            { "title": 'Common Mistakes', "image":"http://lorempixel.com/200/200/abstract/2","description":"Sort description here, probably something funny",   "namekey": 'commonmistakes' },
            { "title": 'Vocabulary', "image":"http://lorempixel.com/200/200/abstract/3","description":"Sort description here, probably something funny", "namekey": 'vocabulary' },
            { "title": 'Certificates', "image":"http://lorempixel.com/200/200/abstract/4","description":"Sort description here, probably something funny",   "namekey": 'certificates' },
            { "title": 'Business English', "image":"http://lorempixel.com/200/200/abstract/5","description":"Sort description here, probably something funny",     "namekey": 'business' },
            { "title": 'Spelling', "image":"http://lorempixel.com/200/200/abstract/6","description":"Sort description here, probably something funny", "namekey": 'spelling' }
        ];

        function alert(e){
                console("BCLICK");
                    alert(e);
        }
});