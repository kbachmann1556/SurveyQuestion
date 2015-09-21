var mongoose =  require('mongoose');
var Option = mongoose.model('Option');
var Poll = mongoose.model('Poll')

module.exports = (function() {
	return {
		addOption1: function (req, res){
			Poll.findOne({_id: req.params.id}, function (err, poll){
				var option = new Option({
					option: req.body.a,
					count: 0,
					_Poll: poll._id
				})
				poll.options.push(option);
				option.save(function (err){
					poll.save(function (err){
						if(err){
							console.log(err)
						}else{
							res.json(poll);
						}
					})
				})
			})
		},
		addOption2: function (req, res){
			Poll.findOne({_id: req.params.id}, function (err, poll){
				var option = new Option({
					option: req.body.b,
					count: 0,
					_Poll: poll._id
				})
				poll.options.push(option);
				option.save(function (err){
					poll.save(function (err){
						if(err){
							console.log(err)
						}else{
							res.json(poll);
						}
					})
				})
			})
		},
		addOption3: function (req, res){
			Poll.findOne({_id: req.params.id}, function (err, poll){
				var option = new Option({
					option: req.body.c,
					count: 0,
					_Poll: poll._id
				})
				poll.options.push(option);
				option.save(function (err){
					poll.save(function (err){
						if(err){
							console.log(err)
						}else{
							res.json(poll);
						}
					})
				})
			})
		},
		addOption4: function (req, res){
			Poll.findOne({_id: req.params.id}, function (err, poll){
				var option = new Option({
					option: req.body.d,
					count: 0,
					_Poll: poll._id
				})
				poll.options.push(option);
				option.save(function (err){
					poll.save(function (err){
						if(err){
							console.log(err)
						}else{
							res.json(poll);
						}
					})
				})
			})
		},
		getOptions: function (req, res){
			Option.find({_Poll: req.params.id}, function (err, options){
				if(err){
					console.log(err);
				}else{
					res.json(options);
				}
			})
		},
		addVote: function (req, res){
			Option.findOne({_id: req.params.id}, function (err, option){
				option.count += 1;
				option.save(function (err){
					if(err){
						console.log(err)
					}else{
						res.json(option);
					}
				})
			})
		}
	}
})();