'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('blogApp.services', [], function($provide) { 
  $provide.factory('postService', function($http, $q) {
    return {
      apiPath: '',
      getAllPosts: function() {

      },
      getPostDetails: function(postId) {
        
      }
    };
  });
}).value('version', '0.2');
