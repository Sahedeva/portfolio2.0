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

        // route for the projects page
        .when('/projects', {
            templateUrl : 'projects.ejs',
            controller  : 'projectController'
        })

        // route for the artwork page
        .when('/artwork', {
            templateUrl : 'artwork.ejs',
            controller  : 'artworkController',
            resolve: {
                artworkPromise: ['artworks', function(artworks){
                    return artworks.getAll();
                }]
            }
        })

        // route for new artwork page
        .when('/new', {
            templateUrl : 'new.html',
            controller  : 'newController'
        })
});

portfolioApp.factory('artworks', ['$http', function($http){
    // service body
    var o = {
        artworks: []
    };
    o.getAll = function() {
        console.log("This is o before get:"+o);
        return $http.get('/artworks').success(function(data){
            console.log("This is the data from factory getAll: "+data);
            console.log("This is data[0]: "+data[0]);
            console.log("this is JSON.stringify(data):"+JSON.stringify(data, null, 4));
            angular.copy(data, o.artworks);
            console.log(o.artworks);
        });
    };

    return o;
}]);

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

portfolioApp.controller('artworkController', [
    '$scope',
    'artworks',
    function($scope, artworks) { 
    console.log("Artwork controller: artworks: "+artworks)
    $scope.message = 'Artwork page';
    $scope.artworks = artworks.artworks;
    // $scope.artworks = [
    //     {url: '/images/Artwork/IMG_1.jpg', likes: 0},
    //     {url: '/images/Artwork/IMG_2.jpg', likes: 0},
    //     {url: '/images/Artwork/IMG_3.jpg', likes: 0},
    //     {url: '/images/Artwork/IMG_4.jpg', likes: 0},
    //     {url: '/images/Artwork/IMG_5.jpg', likes: 0}
    // ];
    $scope.incrementLikes = function(artwork) {
        artwork.likes += 1;
    };
}]);

portfolioApp.controller('projectsController', function($scope) {
    $scope.message = 'Projects page';
});

portfolioApp.controller('newController', function($scope) {
    $scope.message = 'New artwork page';
});
