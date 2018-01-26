"use strict";

angular.module("mushrooms").controller("MushroomCtrl", function($scope, MushroomFactory) {
    MushroomFactory.getMushrooms().then(mushrooms => {
        $scope.mushrooms = mushrooms;
    });
});