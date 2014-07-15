/** @jsx React.DOM */
var React = require('react/addons');
var Layout = require('./layouts/desktop');

var APP = React.createClass({

    render: function () {
        return (
            <div id="layout-container">
                <Layout></Layout>
            </div>
        );
    }

});

module.exports = APP;