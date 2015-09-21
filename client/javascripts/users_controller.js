beltApp.controller('UsersController', function ($scope, UserFactory, $routeParams){
	$scope.user = [];
	$scope.getUser = function(){
		UserFactory.loginUser($scope.currentUser.name, function (data){
			$scope.user = data;
		})
	}
	$scope.addUser = function(){
		// console.log($scope.currentUser);
		UserFactory.addUser($scope.currentUser);
		UserFactory.loginUser($scope.currentUser.name, function (data){
			// console.log('got to loginUser function');
			$scope.user = data;
		})
	}
})