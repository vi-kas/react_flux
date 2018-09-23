"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback){
			if(!confirm('Are you sure you want to read a boring paGe?')){
				transition.abort();
			} else {
				callback();
			}
		},
		willTransitionFrom: function(transition, component){
			if(!confirm('Are you sure you wanna leave the page?')){
				transition.abort();
			}
		}
	},

	render: function(){
		return (
			<div>
				<h1>Über</h1>
				<h3>Die Anwendung hat folgende Technologien ...</h3>
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Flux</li>
					<li>Node</li>
					<li>Gulp</li>
					<li>Browserify</li>
					<li>Bootstrap</li>
				</ul>
			</div>
		);
	}
});

module.exports = About;