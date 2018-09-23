"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Seite nicht gefunden.</h1>
				<h3>Whoops...</h3>
				<p><Link to="app"> Back to Home</Link></p>
			</div>
		);
	}
});

module.exports = NotFoundPage;