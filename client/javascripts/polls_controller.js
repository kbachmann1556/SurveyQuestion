beltApp.controller('PollsController', function ($scope, PollFactory){
	$scope.polls = [];
	PollFactory.getPolls(function (data){
		$scope.polls = data;
	});
	PollFactory.getUser(function (data){
		$scope.user = data;
	})
	$scope.addPoll = function(){
		PollFactory.addPoll($scope.newPoll, function (data){
			PollFactory.addOption1($scope.newPoll, data._id, function (data){
				PollFactory.addOption2($scope.newPoll, data._id, function (data){
					PollFactory.addOption3($scope.newPoll, data._id, function (data){
						PollFactory.addOption4($scope.newPoll, data._id, function (data){
							console.log('you made it here!!', data);
						});
					});
				});
			});
		})
	}
	$scope.removePoll = function(poll_id){
		PollFactory.removePoll(poll_id, function (){
			PollFactory.getPolls(function (data){
				$scope.polls = data;
			});
		});
	}
})