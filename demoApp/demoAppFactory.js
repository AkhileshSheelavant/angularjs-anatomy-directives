var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.factory('simpleFactory', function ($http) {
    var factory = {};
    factory.getCustomers = function () {
        return $http.get('../advanced/customers.json');
    };
    return factory;
});

demoApp.controller('SimpleController', function ($scope, simpleFactory) {
    return simpleFactory.getCustomers().then(function (response) {
        $scope.customers =response.data;
    });
});

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/DemoAppView1',{
            controller: 'SimpleController',
            templateUrl:'DemoAppView1.html'})
        .when('/DemoAppView2',{
            controller: 'SimpleController',
            templateUrl:'DemoAppView2.html'})
        .otherwise({ redirectTo: '/' });
});