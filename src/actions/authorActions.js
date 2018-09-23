"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
	createAuthor: function(author){  //action creater
		var newAuthor = AuthorApi.saveAuthor(author);

		//Hey dispatcher go tell all the stores that an author has been created.	
		Dispatcher.dispatch({ //action
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},

	updateAuthor: function(author){  //action creater
		var updateAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({ //action
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updateAuthor
		});
	}

};

module.exports = AuthorActions;