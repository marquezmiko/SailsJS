var request = require('supertest');

describe('#create()', function() {
	it('should create a user', function (done) {
  		request('http://localhost:1337')
		.post('/User/')
		.send({name: 'Miko'})
		.expect(201, done);
  	});
});

describe('#findUser()', function() {
	it('should find a user', function (done) {
		request('http://localhost:1337')
		.get('/User/getUser')
		.query({name: 'Miko'})
		.expect(200, done);
	});
});

describe('#deleteUser()', function() {
	it('should delete a user', function (done) {
		request('http://localhost:1337')
		.del('/User/deleteUser')
		.send({name: 'Miko'})
		.expect(200, done);
	});
});

