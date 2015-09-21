var mongoose = require('mongoose');

var OptionSchema = new mongoose.Schema({
	option: String,
	_Poll: {type: mongoose.Schema.ObjectId, ref: "Poll"},
	count: Number
});

mongoose.model('Option', OptionSchema);