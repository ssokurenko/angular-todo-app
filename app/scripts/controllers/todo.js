'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp')
  .controller('TodoCtrl', function ($scope) {
    
    $scope.todoItems = [
        {
            title: "Learn Angular",
            done:false
        },
        {
            title: "Smile",
            done:false
        }
    ];

    
    $scope.addNewTodoItem = function(){
        // Getting the value from the new item input field and add it to the list of list
        $scope.todoItems.push({title: $scope.newTodoItem, done: false});
        
        // Cleaning up the input field value
        $scope.newTodoItem = "";
        
        // Updating number of items
        $scope.totalTodoItems = $scope.todoItems.length;
    };
    
    // Updating complete/total items counter
    $scope.updateItmesCounter = function(){
        var self = this;
        self.completeItems = 0;
        
        $($scope.todoItems).each(function(index, value) {
            if (value.done) {
                self.completeItems++;
            }
        });
        
        $scope.completeTodoItems = self.completeItems;
        $scope.totalTodoItems = $scope.todoItems.length;
    };
    
    // Initial update of itmes counter
    $scope.updateItmesCounter();
    
    // Clearing complete items
    $scope.clearCompleteItems = function(){
        $($scope.todoItems).each(function(index, value) {
            if (value.done) {
                // Removing the item
                $scope.todoItems.splice(index, 1);
                // Updating the items counter
                $scope.updateItmesCounter();
                // Rechecking the array
                $scope.clearCompleteItems();
            }
        });

    };
    
  });
