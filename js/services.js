angular.module('app.services', [])

  .factory('BlankFactory', function($http,$cordovaNetwork) {
    /*
     var users = [];
     return {
       getUsers: function(){
         return $http.get("http://10.20.53.101/PHP/dbteam/getdata.php").then(function(response){
         //console.log(response.data);
         users = response.data;
         return users;
         });
       },
       getUser: function(index){
         return users[index];
       }
     };
     */

    var serviceObj = {};

    serviceObj.function1 = function () {
     return('factory 1');
    };

    var isOnline = false;
    serviceObj.IsOnline = function () {
      try {
        isOnline = $cordovaNetwork.isOnline();
      }
      catch (e) { // For debugging in the browser
        isOnline = true;
      }
      return isOnline;
    };

    /*
     TO RESOLVE THE CROSS FLATFORM ISSUE FROM PHP
     //http://stackoverflow.com/questions/18382740/cors-not-working-php
     if (isset($_SERVER['HTTP_ORIGIN'])) {
     header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
     header('Access-Control-Allow-Credentials: true');
     header('Access-Control-Max-Age: 86400');    // cache for 1 day
     }

     // Access-Control headers are received during OPTIONS requests
     if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

     if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
     header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

     if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
     header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

     exit(0);
     }

     var users = [];
     serviceObj.getUsers= function(){
     return $http.get("http://10.20.53.101/PHP/dbteam/getdata.php").then(function(response){
     //console.log(response.data);
     users = response.data;
     return users;
     });
     };

     */

  return serviceObj;

  })


.service('BlankService', ['$ionicPopup','$ionicLoading','$timeout',function($ionicPopup,$ionicLoading,$timeout){

    this.isOnline2 = function () {
      //console.log('service');
    };


    this.loading = function() {
      $ionicLoading.show({
        template: '<div class="loader">' +
        '<svg class="circular">' +
        '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>' +
        '</svg>' +
        '</div>'
      });
      // For example's sake, hide the sheet after two seconds set 2000 insted of 0
      $timeout(function() {
        $ionicLoading.hide();
      }, 1000);
    };

    this.showPopup = function(thisMessages) {
      var alertPopup = $ionicPopup.alert({
        title: 'Contact us',
        template: thisMessages
      });
      $timeout(function() {
        //ionicMaterialInk.displayEffect();
      }, 0);
    };



}]);

