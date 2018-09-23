"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({

	render: function(){
		return (
			<div className="jumbotron">
				<h1>Er ist ein React Anwendung.</h1>
				<p>Wir verwenden verschiedene Technologien.</p>
				<Link to="about" className="btn btn-primary btn-lg">Mehr erfahren</Link>
			</div>
		);
	}

});

module.exports = Home;