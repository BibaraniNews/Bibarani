var myApp=angular.module("MyApp",["ngRoute"]);
myApp.config(function($routeProvider){
$routeProvider.when("/home",{
	controller:"homeController",
	templateUrl:"App/Views/home.html"
	})
	.otherwise({redirectTo:"/home"});
});
