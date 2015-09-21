var mongoose =  require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = (function() {
	return {
		username: function (req, res){
			console.log(req.session.value);
			var username = req.session.value;
			res.json(username);
		},
		getPolls: function (req, res){
			Poll.find({}, function (err, polls){
				if(err){
					console.log(err);
				}else{
					res.json(polls);
				}
			})
		},
		// getNonUserPolls: function (req, res){
		// 	Poll.find({})
		// }
		addPoll: function (req, res){
			var poll = new Poll({
				user: req.session.value.name,
				question: req.body.question,
			})
			poll.save(function (err){
				if(err){
					console.log(err);
				}else{
					res.json(poll);
				}
			})
		},
		getSinglePoll: function (req, res){
			Poll.findOne({_id: req.params.id}, function (err, poll){
				if(err){
					console.log(err);
				}else{
					res.json(poll);
				}
			})
		},
		removePoll: function (req, res){
			Poll.remove({_id: req.params.id}, function (err){
				if(err){
					console.log(err);
				}else{
					res.json('you made it');
				}
			})
		}
	}
})();