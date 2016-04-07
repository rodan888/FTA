var app = angular.module('MyApp', []);

app.controller('sideMenuCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('sidemenu.json')
    .success(function (data) {
      $scope.viewModel = data.menu;
  });
}]);

app.controller('getDateCtrl', ['$scope', '$http', function ($scope, $http)  {
	$scope.getDate = new Date();
	$http.get("http://ip-api.com/json/?callback=")
			.success(function(data) {
             $scope.ip = data.query;         
        });
}]);
