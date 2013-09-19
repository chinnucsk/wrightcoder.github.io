'use strict';

// Declare app level module which depends on filters, and services
angular.module('blogApp', ['blogApp.filters', 'blogApp.services', 'blogApp.directives', 'blogApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectController'});
    $routeProvider.when('/blogs', {templateUrl: 'partials/blogposts.html', controller: 'BlogController'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
