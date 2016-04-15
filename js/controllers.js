angular.module('app.controllers', [])

  .controller('homeCtrl', function($scope, BlankFactory) {

    $scope.isOnline = false;
    $scope.isOnline =  BlankFactory.IsOnline();
    //BlankService.showPopup($scope.isOnline);
    /*
    $scope.isOnline = false;
    $scope.network ="Offline";
    $ionicPlatform.ready(function() {
    //document.addEventListener("deviceready", function () {
      $scope.network = $cordovaNetwork.getNetwork();
      $scope.isOnline = $cordovaNetwork.isOnline();
      $scope.$apply();
      // listen for Online event
      $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
        $scope.isOnline = true;
        //console.log('Online');
        $scope.network = $cordovaNetwork.getNetwork();
        $scope.$apply();
      })
      // listen for Offline event
      $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
        $scope.isOnline = false;
        console.log('Offline');
        $scope.network = $cordovaNetwork.getNetwork();
        $scope.$apply();
      })
    }, false);

*/
  })
  .controller('iIFATheLegacyCtrl', function($scope) {})
  .controller('iIFAWeekendCtrl', function($scope) {})
  .controller('iIFAUtsavam2016Ctrl', function($scope) {})
  .controller('itineraryCtrl', function($scope) {})
  .controller('iIFAThroughTheYearsCtrl', function($scope) {})

  .controller('advisoryBoardCtrl', function($scope) {})
  .controller('AB1Ctrl', function($scope) {})
  .controller('AB2Ctrl', function($scope) {})
  .controller('AB3Ctrl', function($scope) {})
  .controller('AB4Ctrl', function($scope) {})
  .controller('AB5Ctrl', function($scope) {})
  .controller('AB6Ctrl', function($scope) {})
  .controller('AB7Ctrl', function($scope) {})
  .controller('AB8Ctrl', function($scope) {})
  .controller('AB9Ctrl', function($scope) {})
  .controller('AB10Ctrl', function($scope) {})
  .controller('AB11Ctrl', function($scope) {})
  .controller('AB12Ctrl', function($scope) {})
  .controller('AB13Ctrl', function($scope) {})
  .controller('AB14Ctrl', function($scope) {})
  .controller('AB15Ctrl', function($scope) {})

  .controller('pplogo2016Ctrl', function($scope) {

    $scope.partnersDetails = [
      {ID: 0,TITLE:'',IMGIDS: ['1',]},
      {ID: 1,TITLE:'IIFA Utsavam: Title Sponsor',IMGIDS: ['2',]},
      {ID: 2,TITLE:'IIFA Utsavam: Co-Powered by',IMGIDS: ['3','3_1',]},
      {ID: 3,TITLE:'IIFA Utsavam: Cause Partner',IMGIDS: ['37',]},
      {ID: 4,TITLE:'IIFA Utsavam: On Air Associates',IMGIDS: ['38','39','40','41',]},
      {ID: 5,TITLE:'IIFA Utsavam: Broadcast Partner',IMGIDS: ['4','5','6','7','8',]},
      {ID: 6,TITLE:'IIFA Utsavam: Host City Partner',IMGIDS: ['9',]},
      {ID: 7,TITLE:'IIFA Utsavam: On-Ground Partner',IMGIDS: ['10',]},
      {ID: 8,TITLE:'IIFA Utsavam: Venue Partner',IMGIDS: ['11',]},
      {ID: 9,TITLE:'IIFA Utsavam: Support Partner',IMGIDS: ['19','20','21','22',]},
      {ID: 10,TITLE:'IIFA Utsavam: Airport Partner',IMGIDS: ['24',]},
      {ID: 11,TITLE:'IIFA Utsavam: Media Partner',IMGIDS: ['15',]},
      {ID: 12,TITLE:'IIFA Utsavam: Social Media Marketing Partner',IMGIDS: ['23',]},
      {ID: 13,TITLE:'Andhra Pradesh',IMGIDS: ['13','14','16',]},
      {ID: 14,TITLE:'Tamil Nadu',IMGIDS: ['17',]},
      {ID: 15,TITLE:'Invitations Partner',IMGIDS: ['18',]},
      {ID: 16,TITLE:'Official Makeup & Hair Partner',IMGIDS: ['29',]},
      {ID: 17,TITLE:'Key Partner',IMGIDS: ['28',]},
      {ID: 18,TITLE:'Styling Partner',IMGIDS: ['25',]},
      {ID: 19,TITLE:'PR Partner',IMGIDS: ['26',]},
      {ID: 20,TITLE:'Costume Partner',IMGIDS: ['27',]},
      {ID: 21,TITLE:'Goody Bag Partners',IMGIDS: ['30','31',]},
      {ID: 22,TITLE:'Hospitality Partner',IMGIDS: ['33','34',]},
      {ID: 23,TITLE:'VR Partners',IMGIDS: ['32',]}
    ];


  })

  .controller('GalleryCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate','$rootScope','BlankFactory',
    function ($scope, $ionicModal, $ionicSlideBoxDelegate, $rootScope,BlankFactory) {

      $scope.images = [];
      $scope.serverPath = "";

      for (var i = 1; i <= 4; i++) {
        $scope.images.push({
          id: i,
          src: "img/slider/banner" + i + ".jpg",
          src2: "img/slider/banner" + i + ".jpg",
          msg: "IIFA Utsavam 2016"
        });
      }

      $scope.isOnline = false;
      $scope.isOnline =  BlankFactory.IsOnline();

      if($scope.isOnline) {
        for(var i = 100; i <= 290; i++) {
          $scope.images.push({
            id: i,
            src: "http://iifautsavam.com/images/gallery2/thumb/" + i + ".jpg",
            src2: "http://iifautsavam.com/images/gallery2/" + i + ".jpg",
            msg:"IIFA Utsavam 2016"});
        }
      }

      $ionicModal.fromTemplateUrl('Gallery', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function() {
        $ionicSlideBoxDelegate.slide(0);
        $scope.modal.show();
      };

      $scope.closeModal = function() {
        $scope.modal.hide();
      };

      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hide', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });
      $scope.$on('modal.shown', function() {
        //console.log('Modal is shown!');
      });

      // Call this functions if you need to manually control the slides
      $scope.next = function() {
        $ionicSlideBoxDelegate.next();
      };

      $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
      };

      $scope.goToSlide = function(index) {
        $scope.modal.show();
        $ionicSlideBoxDelegate.slide(index);
      }

      // Called each time the slide changes
      $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
      };
    }])


  .controller('contactUSCtrl', function($scope,$http, $timeout,BlankService,BlankFactory,$location) {

/*
To enable the button on the next menu click
use this to disable the catch,
 cache-view="false"
 OR use this
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log("PAGE : ", $location.path());
      if ($location.path() == "/side-menu21/page11") {
        console.log("REFRESH : ", $location.path());
        $scope.disableButton = false;
        $scope.sucessmsg = "";
      }
    });
*/
    //BlankService.showPopup("Submit Your Feedback");
    //BlankService.loading();

    $scope.disableButton = false;
    $scope.sucessmsg = "";

    $scope.isLoading= false;
    $scope.showIndicator = function(tosMessage){
      $scope.isLoading= true;
      $scope.sucessmsg = tosMessage;
      $timeout(function() {
        $scope.isLoading= false;
        //ionicMaterialInk.displayEffect();
      }, 10000);
    };

    $scope.submit = function(thisForm) {

      $scope.isLoading= true;
      $scope.showIndicator("Validating...");
      BlankService.loading();
      $scope.disableButton = true;

      if(!BlankFactory.isOnline()){
        $scope.disableButton = false;
        $scope.isLoading= false;
        $scope.showIndicator("No internet, not able to contact us!");
        return false;
      }

      $http({
        method: 'POST',
        /*url: 'http://10.20.53.101/PHP/dbteam/saveuser.php',*/
        url:'http://iifautsavam.com/mail/contactme.php',
        headers: {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin': "*"},
        /*header: {'Access-Control-Allow-Origin': "*"},*/
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: {
          /*
           username: thisForm.username,
           emailid: thisForm.emailid,
           phoneno: thisForm.phoneno,
           subject: thisForm.subject,
           messages: thisForm.txtMessages
           */
          name: thisForm.username,
          email: thisForm.emailid,
          phone: thisForm.phoneno,
          subject: thisForm.subject,
          message: thisForm.txtMessages

        }
      }).success(function (response) {
        console.log(response);
        //$scope.sucessmsg = response;
        $scope.showIndicator(response);
        BlankService.showPopup(response);
      });

      //alert("Thanks " + thisForm.username);
      /*
       var data = {
       username: thisForm.username,
       emailid: thisForm.emailid,
       phoneno: thisForm.phoneno
       };
       console.log(data.username);
       //$http.get("http://10.20.53.101/PHP/dbteam/saveuser.php", data);

       return $http.get("http://10.20.53.101/PHP/dbteam/saveuser.php",data).then(function(response){
       console.log(response);
       });

       */
    }
  })
