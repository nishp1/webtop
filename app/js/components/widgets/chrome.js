/** @jsx React.DOM */

var React = require('react/addons');

var WidgetChrome = React.createClass({

    renderActions: function () {
        return (
            <ul className="widget-chrome-controls list-unstyled">
                <li>
                    <a title="Close" className="close-btn glyphicon glyphicon-remove"></a>
                </li>
            </ul>
        )
    },

    render: function () {
        var widget = this.props.widget;

        var icon = widget.icon;
        var name = widget.name;

        return (
            <div className="widget-chrome">
                <img src="{icon}" />
                { this.renderActions() }
                <span className="name">{name}</span>
            </div>
        );

    }

});

module.exports = WidgetChrome;