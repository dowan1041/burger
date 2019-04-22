var orm = require("../config/orm.js");


var burger = {
	selectAll: function(cb){
	
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(object, cb){
		orm.insertOne("burgers", object, function(res){
			cb(res);
		});
	},

	updateOne: function(whatToUpdate, whereToUpdate, cb){
		orm.updateOne("burgers", whatToUpdate, whereToUpdate, function(res){
			cb(res);
		});
	}


};
module.exports = burger;