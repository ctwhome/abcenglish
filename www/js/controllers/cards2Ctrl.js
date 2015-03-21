/**
 * @ngdoc controller
 * @name starter.controller:cardsCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('starter')

    .controller('Cards2Ctrl', function($scope, Service, $timeout) {

        // "MovieService" is a service returning mock data (services.js)
        // the returned data from the service is placed into this
        // controller's scope so the template can render the data

        $scope.items = [];
        //$scope.movies = MovieService.all();
        $scope.items = Service.allSync();

        $scope.title = "Tst";

        // Method called on infinite scroll
        // Receives a "done" callback to inform the infinite scroll that we are done
        $scope.loadMore = function() {
            console.log('Loading more!');
            $timeout(function() {
                $scope.items.push({
                    id: 'tt0114814',
                    img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png',
                    style:'200px'
                });

                $scope.$broadcast('scroll.infiniteScrollComplete');
                $scope.$broadcast('scroll.resize');
                $scope.$broadcast('scroll.resize')
            }, 1000);
        }
    })

    .directive("scrollTo", ["$window", function($window){
        return {
            restrict : "AC",
            compile : function(){

                var document = $window.document;

                function scrollInto(idOrName) {//find element with the give id of name and scroll to the first element it finds
                    if(!idOrName)
                        $window.scrollTo(0, 0);
                    //check if an element can be found with id attribute
                    var el = document.getElementById(idOrName);
                    if(!el) {//check if an element can be found with name attribute if there is no such id
                        el = document.getElementsByName(idOrName);

                        if(el && el.length)
                            el = el[0];
                        else
                            el = null;
                    }

                    if(el) //if an element is found, scroll to the element
                        el.scrollIntoView();
                    //otherwise, ignore
                }

                return function(scope, element, attr) {
                    element.bind("click", function(event){
                        scrollInto(attr.scrollTo);
                    });
                };
            }
        };
    }])
    .factory('Service', function($q, $timeout) {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var items = [
            {
                id: '1',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic4.png',
                style:'250px'
            },
            {
                id: '2',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic3.png',
                style:'150px'
            },
            {
                id: '3',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic2.png',
                style:'350px'
            },
            {
                id: '4',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png',
                style:'50px'
            },
            {
                id: '5',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic3.png',
                style:'50px'
            },
            {
                id: '6',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic2.png',
                style:'100px'
            },
            {
                id: '7',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png',
                style:'50px'
            },
            {
                id: '8',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic4.png',
                style:'150px'
            },
            {
                id: '9',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic2.png',
                style:'250px'
            },
            {
                id: '10',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png',
                style:'250px',
            },
            {
                id: '11',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic4.png',
                style:'350px'
            },
            {
                id: '12',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic2.png',
                style:'75px'
            },
            {
                id: '13',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic3.png',
                style:'50px'
            },
            {
                id: '14',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic4.png'
                ,style:'50px'
            },
            {
                id: '15',
                img: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png',
                style:'50px'
            }
        ];

        return {
            all: function() {
                var deferred = $q.defer();
                $timeout(function() {
                    deferred.resolve(items);
                }, 1000);
                return deferred.promise;
            },
            allSync : function() {
                return items;
            },
            get: function(Id) {
                // Simple index lookup
                for(var i=0, l=items.length; i < l; i++) {
                    if(items[i].id == Id) {
                        return items[i];
                    }
                }
            }
        }
    });



