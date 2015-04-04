/**
 * Detect if the application is running in the Browser or in the device
 */
//Detect the navigator

myApp.factory('isDevice', function(){
       return {
           check : function(){
               var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
               if ( app ) {
                   // PhoneGap application
                   return true
               } else {
                   // Web server
                   return false
               }
           }
       }
    });