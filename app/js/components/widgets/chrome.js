/** @jsx React.DOM */

var React = require('react/addons');

var WidgetChrome = React.createClass({

    render: function () {
        var widget = this.props.widget;

        var icon = widget.icon;
        var name = widget.name;

        return (
            <div className="widget-chrome">
                <img src={icon} />
                { this.props.children }
                <span className="name">{name}</span>
            </div>
        );

    }

});

module.exports = WidgetChrome;