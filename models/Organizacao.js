var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Agenda Model
 * ==========
 */

var Organizacao = new keystone.List('Organizacao', {
	map: { name: 'nome' },
	autokey: { path: 'slug', from: 'nome', unique: true },
	track : {createAt : true, updateAt:true}
});

Organizacao.add({
	nome: { type: String, required: true },
	sigla : {type : String, index:true},
	link: {type: Types.Url},
	foto: {type: Types.Url},
	author: { type: Types.Relationship, ref: 'User', index: true }
});



Organizacao.defaultColumns = 'nome, sigla|20%, link|20%';
Organizacao.register();
