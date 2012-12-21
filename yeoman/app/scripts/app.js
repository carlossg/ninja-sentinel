'use strict';

var yeomanApp = angular.module('yeomanApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(false);
  }]);



/**
 * Initialization
 */
yeomanApp.run([
  '$rootScope', '$location', 'UIEvents', 'NinjaService', 'UserService', 'PusherService', 'DeviceService'
  ,function($rootScope, $location, UIEvents, NinjaService, UserService, PusherService,  DeviceService) {


  /**
   * Global Set Route routine. Used by nav.
   * Sets the location to the specified route
   * @param {string} route Location route as specified in $routeProvider
   */
  $rootScope.setRoute = function(route) {
    $location.path(route);
  };

  /**
   * Automatically get the user login status
   */
  UserService.GetLoginStatus();
  UserService.GetInfo();

  DeviceService.LoadUserDevices(function() {

  });



  

  // UserStore.SetData({ buttons: [ {name: 'button1'}, {name: 'button2'}] });


  $rootScope.$on(UIEvents.SetDeviceType, function(event, deviceType) {
    
  });




}]);
