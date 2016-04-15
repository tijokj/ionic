angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.iIFATheLegacy', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iIFATheLegacy.html',
        controller: 'iIFATheLegacyCtrl'
      }
    }
  })

  .state('menu.iIFAWeekend', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iIFAWeekend.html',
        controller: 'iIFAWeekendCtrl'
      }
    }
  })

  .state('menu.iIFAUtsavam2016', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iIFAUtsavam2016.html',
        controller: 'iIFAUtsavam2016Ctrl'
      }
    }
  })

  .state('menu.itinerary', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/itinerary.html',
        controller: 'itineraryCtrl'
      }
    }
  })

  .state('menu.advisoryBoard', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/advisoryBoard.html',
        controller: 'advisoryBoardCtrl'
      }
    }
  })

.state('menu.AB1', {url: '/AB1',views: {'side-menu21': {templateUrl: 'templates/AB1.html',controller: 'AB1Ctrl'}}})
.state('menu.AB2', {url: '/AB2',views: {'side-menu21': {templateUrl: 'templates/AB2.html',controller: 'AB2Ctrl'}}})
.state('menu.AB3', {url: '/AB3',views: {'side-menu21': {templateUrl: 'templates/AB3.html',controller: 'AB3Ctrl'}}})
.state('menu.AB4', {url: '/AB4',views: {'side-menu21': {templateUrl: 'templates/AB4.html',controller: 'AB4Ctrl'}}})
.state('menu.AB5', {url: '/AB5',views: {'side-menu21': {templateUrl: 'templates/AB5.html',controller: 'AB5Ctrl'}}})
.state('menu.AB6', {url: '/AB6',views: {'side-menu21': {templateUrl: 'templates/AB6.html',controller: 'AB6Ctrl'}}})
.state('menu.AB7', {url: '/AB7',views: {'side-menu21': {templateUrl: 'templates/AB7.html',controller: 'AB7Ctrl'}}})
.state('menu.AB8', {url: '/AB8',views: {'side-menu21': {templateUrl: 'templates/AB8.html',controller: 'AB8Ctrl'}}})
.state('menu.AB9', {url: '/AB9',views: {'side-menu21': {templateUrl: 'templates/AB9.html',controller: 'AB9Ctrl'}}})
.state('menu.AB10', {url: '/AB10',views: {'side-menu21': {templateUrl: 'templates/AB10.html',controller: 'AB10Ctrl'}}})
.state('menu.AB11', {url: '/AB11',views: {'side-menu21': {templateUrl: 'templates/AB11.html',controller: 'AB11Ctrl'}}})
.state('menu.AB12', {url: '/AB12',views: {'side-menu21': {templateUrl: 'templates/AB12.html',controller: 'AB12Ctrl'}}})
.state('menu.AB13', {url: '/AB13',views: {'side-menu21': {templateUrl: 'templates/AB13.html',controller: 'AB13Ctrl'}}})
.state('menu.AB14', {url: '/AB14',views: {'side-menu21': {templateUrl: 'templates/AB14.html',controller: 'AB14Ctrl'}}})
.state('menu.AB15', {url: '/AB15',views: {'side-menu21': {templateUrl: 'templates/AB15.html',controller: 'AB15Ctrl'}}})

  .state('menu.iIFAThroughTheYears', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iIFAThroughTheYears.html',
        controller: 'iIFAThroughTheYearsCtrl'
      }
    }
  })

  .state('menu.pplogo2016', {
      url: '/pplogo2016',
      views: {'side-menu21': {
        templateUrl: 'templates/pplogo2016.html',
      controller: 'pplogo2016Ctrl'}}})

  .state('menu.gallery2016', {
      url: '/Gallery',
      views: {
        'side-menu21': {
          templateUrl: 'templates/Gallery.html',
          controller: 'GalleryCtrl'
        }
      }
    })

  .state('menu.contactUS', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactUS.html',
        controller: 'contactUSCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});
