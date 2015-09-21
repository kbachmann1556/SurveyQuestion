beltApp.controller('VotesController', function ($scope, VoteFactory, $routeParams){
	$scope.poll = [];
	$scope.options = [];
	VoteFactory.getPoll($routeParams.id, function (data){
		console.log(data);
		$scope.poll = data;
	})
	VoteFactory.getOptions($routeParams.id, function (data){
		console.log(data);
		$scope.options = data;
	})
	$scope.addVote = function (option_id){
		VoteFactory.addVote(option_id, function (){
			VoteFactory.getOptions($routeParams.id, function (data){
				$scope.options = data;
			})
		});
	}
})