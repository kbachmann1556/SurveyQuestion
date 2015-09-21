beltApp.factory('PollFactory', function ($http) {
	var factory = {};
	factory.getPolls = function (callback){
		$http.get('/getPolls').success(function (output) {
			callback(output);
		})
	}
	factory.getUser = function (callback){
		$http.get('/username').success(function (output){
			callback(output);
		})
	}
	factory.addPoll = function (info, callback){
		$http.post('/addPoll', info).success(function (output){
			callback(output);
		});
	}
	factory.addOption1 = function (info, poll_id, callback){
		$http.post('/addOption1/'+poll_id, info).success(function (output){
			callback(output);
		});
	}
	factory.addOption2 = function (info, poll_id, callback){
		$http.post('/addOption2/'+poll_id, info).success(function (output){
			callback(output);
		});
	}
	factory.addOption3 = function (info, poll_id, callback){
		$http.post('/addOption3/'+poll_id, info).success(function (output){
			callback(output);
		});
	}
	factory.addOption4 = function (info, poll_id, callback){
		$http.post('/addOption4/'+poll_id, info).success(function (output){
			callback(output);
		});
	}
	factory.removePoll = function (poll_id, callback){
		$http.get('/removePoll/'+poll_id).success(function (){
			callback();
		});
	}
	return factory;
})