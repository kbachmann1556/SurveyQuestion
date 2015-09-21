beltApp.factory('VoteFactory', function ($http){
	var factory = {};
	factory.getPoll = function (poll_id, callback){
		$http.get('/singlePoll/'+poll_id).success(function (output){
			callback(output);
		})
	}
	factory.getOptions = function (poll_id, callback){
		$http.get('/getOptions/'+poll_id).success(function (output){
			callback(output);
		});
	}
	factory.addVote = function (option_id, callback){
		$http.get('/addVote/'+option_id).success(function (){
			callback();
		});
	}
	return factory;
})