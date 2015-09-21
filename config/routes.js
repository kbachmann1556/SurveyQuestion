var polls = require('./../server/controllers/polls.js');
var options = require('./../server/controllers/options.js');
var users = require('./../server/controllers/users.js');

module.exports = function (app) {
	app.post('/addUser', function (req, res){
		// console.log(req.body);
		users.addUser(req, res);
	})
	app.get('/user/:name', function (req, res){
		users.getUser(req, res);
		req.session.save(function (err){
			req.session.value = req.params;
		});
	})
	app.get('/getPolls', function (req, res){
		// console.log(req.session.name, 'in the session');
		polls.getPolls(req, res);
	})
	app.get('/username', function (req, res){
		polls.username(req, res);
	})
	app.post('/addPoll', function (req, res){
		polls.addPoll(req, res);
	})
	app.post('/addOption1/:id', function (req, res){
		options.addOption1(req, res);
	})
	app.post('/addOption2/:id', function (req, res){
		options.addOption2(req, res);
	})
	app.post('/addOption3/:id', function (req, res){
		options.addOption3(req, res);
	})
	app.post('/addOption4/:id', function (req, res){
		options.addOption4(req, res);
	})
	app.get('/singlePoll/:id', function (req, res){
		polls.getSinglePoll(req, res);
	})
	app.get('/getOptions/:id', function (req, res){
		options.getOptions(req, res);
	})
	app.get('/addVote/:id', function (req, res){
		options.addVote(req, res);
	})
	app.get('/removePoll/:id', function (req, res){
		polls.removePoll(req, res);
	})

}