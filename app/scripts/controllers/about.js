'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
