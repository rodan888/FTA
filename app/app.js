var app = angular.module('MyApp', []);

app.controller('sideMenuCtrl', ['$scope', '$http', 'classFactory', function ($scope, $http, classFactory) {
  $http.get('sidemenu.json')
    .success(function (data) {
      $scope.viewModel = data.menu;
  });
  $scope.classFactory = classFactory;	
}]);

app.controller('homePageCtrl', ['$scope', '$http', 'classFactory', 'dateFactory', function ($scope, $http, classFactory, dateFactory) {
	$scope.classFactory = classFactory;
	$scope.dateFactory = dateFactory;

	$http.get("http://ip-api.com/json/?callback=")
		.success(function(data) {
    	$scope.ip = data.query;         
    });
}]);



