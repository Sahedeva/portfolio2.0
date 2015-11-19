// script.js

    // create the module and name it portfolioApp
    var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

    // configure our routes
    portfolioApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.ejs',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'about.ejs',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contact.ejs',
                controller  : 'contactController'
            })
    });

    // create the controller and inject Angular's $scope
    portfolioApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    portfolioApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    portfolioApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
