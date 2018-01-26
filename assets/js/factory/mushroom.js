"use strict";

angular.module("mushrooms").factory("MushroomFactory", function($q, $http) {
    let getMushrooms = () => {
        return $q((resolve, reject) => {
            $http.get("/assets/json/mushrooms.json")
                .then(response => {
                    let mushrooms = response.data.mushrooms;
                    resolve(Object.values(mushrooms));
                })
                .catch(err => reject(err));
        });
    };
    
    return { getMushrooms };
});