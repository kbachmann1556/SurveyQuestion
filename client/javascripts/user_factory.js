beltApp.factory('UserFactory', function ($http){
	var factory = {};
	factory.addUser = function (info){
		// console.log(info);
		// console.log('add user', info);
		$http.post('/addUser', info);
	}
	factory.loginUser = function (info, callback){
		// console.log('get user', info)
		$http.get('/user/'+info).success(function (output){
			callback(output);
		})
	}
	return factory;
})