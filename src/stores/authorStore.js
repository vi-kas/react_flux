"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var actionTypes = require('../constants/actionTypes');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var _author = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback){
		this.on('change', callback);
	},

	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	},

	emitChange: function(){
		this.emit('change');
	},

	getAllAuthors: function(){
		return _author;
	},

	getAuthorById: function(id){
		return _.find(_author, {id: id});
	}
});

Dispatcher.register(function(action){
	switch(action.actionType){
		case actionTypes.INITIALIZE:
			_author = action.initialData.authors;
			AuthorStore.emitChange();
			break;
		case actionTypes.CREATE_AUTHOR:
			_author.push(action.author);
			AuthorStore.emitChange();
			break;
		case actionTypes.UPDATE_AUTHOR:
			var existingAuthor = _.find(_author, {id: action.author.id});
			var existingAuthorIndex = _.find(_author, existingAuthor);
			_author.splice(existingAuthorIndex, 1, action.author);
			AuthorStore.emitChange();
			break;
		default:
			//no operation
	}
});

module.exports = AuthorStore;

