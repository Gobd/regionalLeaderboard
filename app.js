var app = angular.module("regionals", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('data', {
      url: '/data',
        templateUrl: 'data.html',
        controller: 'dataCtrl'
    })    .state('home', {
          url: '/home',
            templateUrl: 'home.html',
            controller: 'mainCtrl'
        })
        .state('about', {
             url: '/about',
               templateUrl: 'about.html',
               controller: 'mainCtrl'
           });


        $urlRouterProvider.otherwise('/home');

});;
