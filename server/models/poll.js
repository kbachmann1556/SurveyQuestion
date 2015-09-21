var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: String,
	date: {type: Date, default: new Date},
	user: String,
	options: [{type: mongoose.Schema.Types.ObjectId, ref: "Option"}]
});

mongoose.model('Poll', PollSchema);