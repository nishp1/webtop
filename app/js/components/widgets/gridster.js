/** @jsx React.DOM */

var React = require('react/addons');
var WidgetChrome = require('./chrome');
var WidgetIframe = require('./iframe');

var GridsterWidget = React.createClass({

    render: function () {
        var widget = this.props.widget;

        var icon = widget.icon;
        var name = widget.name;

        return (
            <div className="widget gridster-widget">
                { this.transferPropsTo(<WidgetChrome />) }
                <div className="widget-body">
                    { this.transferPropsTo(<WidgetIframe />) }
                </div>
            </div>
        );

    }

});

module.exports = GridsterWidget;