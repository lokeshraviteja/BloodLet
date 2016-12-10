angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tabsController.bloodCamps', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/bloodCamps.html',
        controller: 'bloodCampsCtrl'
      }
    }
  })

  .state('tabsController.requests', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/requests.html',
        controller: 'requestsCtrl'
      }
    }
  })

  .state('tabsController.donors', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/donors.html',
        controller: 'donorsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('createAnAccount', {
    url: '/page6',
    templateUrl: 'templates/createAnAccount.html',
    controller: 'createAnAccountCtrl'
  })

  .state('forgotPassword', {
    url: '/page9',
    templateUrl: 'templates/forgotPassword.html',
    controller: 'forgotPasswordCtrl'
  })

  .state('oTP', {
    url: '/page10',
    templateUrl: 'templates/oTP.html',
    controller: 'oTPCtrl'
  })

  .state('resetPassword', {
    url: '/page11',
    templateUrl: 'templates/resetPassword.html',
    controller: 'resetPasswordCtrl'
  })

  .state('contactUs', {
    url: '/page12',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('aboutUs', {
    url: '/page13',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

  .state('profile', {
    url: '/page14',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('requestBloodPlatelet', {
    url: '/page15',
    templateUrl: 'templates/requestBloodPlatelet.html',
    controller: 'requestBloodPlateletCtrl'
  })

  .state('donateBloodPlatelet', {
    url: '/page16',
    templateUrl: 'templates/donateBloodPlatelet.html',
    controller: 'donateBloodPlateletCtrl'
  })

  

  .state('redeemPoints', {
    url: '/page18',
    templateUrl: 'templates/redeemPoints.html',
    controller: 'redeemPointsCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});