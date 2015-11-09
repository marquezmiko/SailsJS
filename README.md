# my-project
Went through tutorial and added custom routes for reading and deleting user

Mocha
* ./test/unit/controllers/UserController.test.js
* Contains Mocha test, can be called from my-project directory by calling 'npm test'
* added to ./package.json

CRUD
* ./api/controllers/UserController.js
* Create, Find, and Delete User
* Methods return both HTML status codes as well as json notifications
* Find object result reflected in Sails console log
* mappings in ./config/routes.js

MongoDB
* ./mongo
* used for MongoDB database: mySailsDB
* set in ./config/connections.js


a [Sails](http://sailsjs.org) application
