'use strict';

wrightCoderApp.controller('homeController',
  function homeController($scope, $log) {
    $log.info("Here we go");
    $scope.username = "wrightcoder";
    $scope.github_url = "http://github.com/wrightcoder";
    $scope.bitbucket_url = "http://bitbucket.org/mikewright";

    $scope.bitbucket = [
      { name: 'Trex', description: 'Travel GPS game', status: 'Alpha', language: 'Objective-C', platform: 'iOS', repo: $scope.bitbucket_url + '/trex' },
      { name: 'Musicpeeps', description: 'Music Teacher/Student Portal', status: 'Migration', language: 'Python', platform: 'Linux', repo: $scope.bitbucket_url + '/musicpeeps' }
    ];

    $scope.github = [
      { name: 'Samurai Conquest', description: 'Online turn based game', status: 'In Progress', language: 'Scala,JS', platform: 'Linux/AppFog', repo: $scope.github_url + '/SamuraiConquest' },
      { name: 'Pybot', description: 'IRC bot to help communication', status: 'On Hold', language: 'Python', platform: 'Linux', repo: $scope.github_url + '/pybot' },
      { name: 'The Last Warrior', description: 'Html5 based RPG game', status: 'On Hold', language: 'Html5/JS', platform: 'Web', repo: $scope.github_url + '/The-Last-Warrior' },
      { name: 'Multi - Game of Life', description: 'Game of Life solutions', status: 'On Hold', language: 'Hopefully a lot', platform: '*nix', repo: $scope.github_url + '/multi-game-of-life' }
    ];
  }
);