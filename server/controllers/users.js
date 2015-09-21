var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		getUser: function (req, res) {
			User.findOne({name: req.params.name}, function (err, user){
				if(err){
					console.log(err);
				}else{
					// console.log('got user');
					res.json(user);
				}
			})
		},
		addUser: function (req, res) {
			// console.log(req.body.name, 'addUser');
			var user = new User({
				name: req.body.name,
			});
			user.save(function (err){
				if(err){
					console.log(err);
				}else{
					console.log('success');
				}
			})
		}
	}
})();