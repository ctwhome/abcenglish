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
    .directive('noScroll', function($document) {

        return {
            restrict: 'A',
            link: function($scope, $element, $attr) {

                $document.on('touchmove', function(e) {
                    e.preventDefault();
                });
            }
        }
    })

    .controller('CardsCtrl', function($scope, TDCardDelegate) {
        var cardTypes = [
            { image: 'http://perso.mines-albi.fr/~otton/web_traductions/WWW/FCDWebPages/mod5/mod5wk4/downstairs.GIF' },
            //{ image: 'https://d13yacurqjgara.cloudfront.net/users/22691/screenshots/1709807/gif_shot4.gif' },
            //{ image: 'https://d13yacurqjgara.cloudfront.net/users/22691/screenshots/1701001/gif_cuatro_o_cinco.gif' },
            { image: 'http://www.playrific.com/images/media/mes_flashcards_prepositions_youtube.png' },
            { image: 'http://www.eslprintables.com.es/previewprintables/2011/mar/2/thumb103021633055589.jpg' },
            { image: 'http://2.bp.blogspot.com/-JZxIEJeQKSM/UHsXeLxiUFI/AAAAAAAAAZg/8Ku3-1E98h4/s1600/dog.jpg' },
            { image: 'http://media.tumblr.com/tumblr_m539aqESZw1qgrypy.png' },
        ];

        $scope.cards = Array.prototype.slice.call(cardTypes, 0);

        $scope.cardDestroyed = function(index) {
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function() {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        }
    })

    .controller('CardCtrl', function($scope, TDCardDelegate) {
        $scope.cardSwipedLeft = function(index) {

            $scope.addCard();
        };
        $scope.cardSwipedRight = function(index) {

            $scope.addCard();
        };
    });




