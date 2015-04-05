// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var myApp = angular.module('starter', [
        'ionic',
        'ngCordova',
        'ngStorage',
        'starter.controllers',
        'ionic.contrib.ui.tinderCards',
        'ui.router',
        'ionic.contrib.frostedGlass']);



    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('signUp', {
                url: '/signUp',
                templateUrl: 'templates/signUp.html',
                controller: 'SignUpController'
            })

            .state('intro', {
                url: "/intro",
                templateUrl: "templates/intro.html",
                controller: 'IntroCtrl'
            })

            .state('app.theory', {
                url: "/theory",
                views: {
                    'menuContent': {
                        templateUrl: "templates/theory.html",
                        controller: "theoryCtrl"
                    }
                }
            })

            .state('app.content', {
                url: "/contents/:content",
                views: {
                  'menuContent': {
                    templateUrl: "templates/content.html",
                    controller: 'contentCtrl'
                  }
                }
              })

            .state('app.cards', {
                url: "/cards",
                views: {
                    'menuContent': {
                        templateUrl: "templates/cards.html",
                        controller: "CardsCtrl"
                    }
                }
            }) 
            
            .state('app.conversation', {
                url: "/conversation",
                views: {
                    'menuContent': {
                        templateUrl: "templates/conversation.html",
                        controller: "ConversationCtrl"
                    }
                }
            })

            
            .state('app.videos', {
                url: "/videos",
                views: {
                    'menuContent': {
                        templateUrl: "templates/videos.html"
                    }
                }
            })

            .state('app.preferences', {
                url: "/preferences",
                views: {
                    'menuContent': {
                        templateUrl: "templates/preferences.html",
                        controller: "PreferencesCtrl"
                        
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/signUp');
    });

    myApp.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
