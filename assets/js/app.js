const app = angular.module("mushrooms", ["ngRoute"]);

app.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "assets/partials/mushroomList.html",
            controller: "MushroomCtrl"
        })
        .otherwise("/");
});