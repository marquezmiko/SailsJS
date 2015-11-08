/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
	  var params = req.params.all()

	  User.create({name: params.name}).exec(function createCB(err,created){
	    return res.json(201,{notice: 'success'});
	  });
	},

	findUser: function(req, res){
		var param = req.param('name');
		console.log(param);
		User.findOne({name:param}).exec(function findOneCB(err,found){
			console.log(found);
			if(typeof found === 'undefined'){
				return res.json(404, {notice: 'Could not find User with name ' + param});
			}
			else{
    			return res.json(200, {notice: 'Found User with name ' + param});
    		}
		});
	},

	deleteUser: function(req, res){
		var param = req.param('name')
		console.log(param);
		User.findOne({name:param}).exec(function findOneCB(err,found){
			console.log(found);
			if(typeof found === 'undefined'){
				return res.json(404, {notice: 'Could not find User with name ' + param});
			}
			else{
    			User.destroy({name:param}).exec(function deleteCB(err){
    				return res.json(200, {notice: 'Record deleted'});
    			});
    		}
		});
	}
};

