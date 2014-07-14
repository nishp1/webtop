/** @jsx React.DOM */
var React = require('react/addons');
var GridsterLayout = require('./layouts/gridster');

var APP = React.createClass({

    render: function () {
        return (
            <div>
                <GridsterLayout></GridsterLayout>
            </div>
        );
    }

});

module.exports = APP;