var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Agenda Model
 * ==========
 */

var Agenda = new keystone.List('Agenda', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Agenda.add({
	title: { type: String, required: true },
	organizacao: { type: Types.Relationship, ref: 'Organizacao', many: false },
	dataInicio : {type : Types.Date, index:true},
	dataFim : {type : Types.Date, index:true},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
});



Agenda.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Agenda.register();
