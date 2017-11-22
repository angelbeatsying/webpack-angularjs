import "./main.css";
const greeter = require("./Greeter.js");
var config = require("./config.json");
//document.querySelector("#root").appendChild(greeter());
var app=angular.module('ngRouteExample', ['ngRoute'])
app.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: '.home.html',
        controller: 'HomeController'
    }).
    when('/about', {
        templateUrl: '.about.html',
        controller: 'AboutController'
    }).
    otherwise({
        redirectTo: '/home'
    });
});