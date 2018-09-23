/*eslint-disable strict*/ //Disabling check bcuz we cant run strict more. Need global vars.

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
		render: function(){
			return (
					<div>
						<Header/>
						<div className="container-fluid">
							<RouteHandler/>
						</div>
					</div>
				);
			}
	});

module.exports = App;