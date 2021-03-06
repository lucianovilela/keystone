// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();
require('jade');
// Require keystone
var keystone = require('keystone'),
    express = require('express'),
	serverStatic =require('serve-static');



// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'João Roque Jiu-Jitsu',
	'brand': 'João Roque Jiu-Jitsu',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

    'port' : process.env.OPENSHIFT_NODEJS_PORT ||  process.env.PORT  || 3000,
	'mongo' : process.env.OPENSHIFT_MONGODB_DB_URL  || 'mongodb://localhost/vida-de-lutador',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'title':'João Roque Jiu Jitsu',
	'admin path': 'app/keystone'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set
// uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));
// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'news': ['posts', 'post-categories'],
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users',
	'agenda': ['agendas', 'organizacaos']
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
