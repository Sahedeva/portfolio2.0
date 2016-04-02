console.log("             *     ,MMM8&&&.            *");
console.log("                  MMMM88&&&&&    .");
console.log("                 MMMM88&&&&&&&");
console.log("     *           MMM88&&&&&&&&");
console.log("                 MMM88&&&&&&&&");
console.log("                 'MMM88&&&&&&'");
console.log("                   'MMM8&&&'      *");
console.log("          |\\___/|");
console.log("          )     (             .              '");
console.log("         =\\     /=");
console.log("           )===(       *");
console.log("          /     \\");
console.log("          |     |");
console.log("         /       \\");
console.log("         \\       /");
console.log("  _/\\_/\\_/\\__  _/_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_");
console.log("  |  |  |  |( (  |  |  |  |  |  |  |  |  |  |");
console.log("  |  |  |  | ) ) |  |  |  |  |  |  |  |  |  |");
console.log("  |  |  |  |(_(  |  |  |  |  |  |  |  |  |  |");
console.log("  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |");
console.log("  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |");
console.log(" ");
console.log("         consoleCat - by Bob   (MEOW)");
var isChrome = !!window.chrome && !!window.chrome.webstore;
console.log(isChrome);
// create the module and name it portfolioApp
var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

// configure our routes
portfolioApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'contact.html',
            controller  : 'contactController'
        })

        // route for the projects page
        .when('/projects', {
            templateUrl : 'projects.ejs',
            controller  : 'projectController'
        })

        // route for the artwork page
        .when('/artwork', {
            templateUrl : 'artwork.html',
            controller  : 'artworkController',
            resolve: {
                postPromise: ['artworks', function(artworks){
                    return artworks.getAll();
                }]
            }
        })

        // route for new artwork page
        .when('/new', {
            templateUrl : 'new.html',
            controller  : 'newController'
        })

        // route for test form page
        .when('/testForm', {
            templateUrl : 'testForm.html',
            controller  : 'testFormController'
        })
});

portfolioApp.factory('artworks', ['$http', function($http){
    // service body
    var o = {
        artworks: []
    };
    o.getAll = function() {
        return $http.get('/artworks').success(function(data){
            angular.copy(data, o.artworks);
        });
    };

    o.like = function(artwork) {
        return $http.put('/artworks/' + artwork._id + '/like', artwork)
        .success(function(data){
            console.log(data);
            artwork.likes += 1;
        });
    };

    o.addComment = function(artwork, comment) {
        // artwork.comments.push(comment);
        console.log("this is comment from o.addComment: "+comment);
        console.log('/artworks/' + artwork._id + '/comments');
        return $http.post('/artworks/' + artwork._id + '/comments', {comment:comment})
        .success(function(data){
            console.log("this is res from add comment put route: "+ data)
        });
    };

    // o.get = function(id) {
    //     return $http.get('/artworks/' + id).then(function(res){
    //         return res.data;
    //     });
    // };

    // o.addComment = function(id, comment) {
    //     return $http.post('/artworks/' + id + '/comments', comment);
    // };

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
    '$filter',
    function($scope, artworks, $filter) { 
    $scope.artworks = artworks.artworks;
    var orderBy = $filter('orderBy');
    $scope.order = function(predicate) {
        $scope.artworks = orderBy($scope.artworks, predicate);
    };
    $scope.incrementLikes = function(artwork) {
        artworks.like(artwork);
    };
    $scope.addComment = function(artwork, new_comment){
        console.log("comment form entry is "+ new_comment);
        artwork.comments.push(new_comment);
        if(new_comment === '') { return; }
        artworks.addComment(artwork, new_comment);
    };
}]);

portfolioApp.controller('projectsController', function($scope) {
    $scope.message = 'Projects page';
});

portfolioApp.controller('newController', function($scope) {
    $scope.message = 'New artwork page';
});

portfolioApp.controller('testFormController', [
'$scope',
function($scope){
    $scope.test = 'Hello world!';
    $scope.posts = [
    {title: 'post 1', upvotes: 5, comments: [{comment: "hey"},{comment: "there"}]},
    {title: 'post 2', upvotes: 2, comments: [{comment: "plate"},{comment: "bowl"}]},
    {title: 'post 3', upvotes: 15, comments: [{comment: "fork"},{comment: "knife"}]},
    {title: 'post 4', upvotes: 9, comments: [{comment: "cow"},{comment: "spoon"}]},
    {title: 'post 5', upvotes: 4, comments: [{comment: "brown"},{comment: "now"}]}
    ];
    $scope.addComment = function(post) {
        console.log("Json stringify post is " + JSON.stringify(post, null, 4));
        console.log("post.comments[0].comment is "+ post.comments[0].comment);
        console.log("scope.posts.comments is " +$scope.comment.comment);
        $scope.posts.comments.push($scope.comment);
        $scope.comment = '';
    };
}]);
