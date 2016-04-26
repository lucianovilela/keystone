var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var UserWeb = new keystone.List('UserWeb');

UserWeb.add({
	name: { type: Types.Name, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	idFacebook: { type: String, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

UserWeb.defaultColumns = 'name, email, isAdmin';
UserWeb.register();
