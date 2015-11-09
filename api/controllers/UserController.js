/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//Create User, returns 201 if successful
	create: function(req, res){
	  var params = req.params.all()

	  User.create({name: params.name}).exec(function createCB(err,created){
	    return res.json(201,{notice: 'success'});
	  });
	},

	//Find User, return 200 if successful, 404 if not
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

	//Delete User, return 200 if successful, 404 if no such record found
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

