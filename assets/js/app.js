'use strict';

var wrightCoderApp = angular.module('wrightCoderApp', []);

wrightCoderApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'assets/templates/home.htm', controller: 'homeController'})
  .otherwise({ redirectTo: '/'});
}]);
