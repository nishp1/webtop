/** @jsx React.DOM */

var React = require('react/addons');

var WidgetChrome = React.createClass({

    handleClick: function () {
        if(this.props.onClick) {
            this.props.onClick(this.props.widget);
        }
    },

    render: function () {
        var widget = this.props.widget;

        var icon = widget.icon;
        var name = widget.name;

        return (
            <div className="widget-chrome" onClick={ this.handleClick }>
                <img src={icon} />
                { this.props.children }
                <span className="name">{name}</span>
            </div>
        );

    }

});

module.exports = WidgetChrome;