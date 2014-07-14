/** @jsx React.DOM */
var React = require('react/addons');

var WidgetIframe = React.createClass({

    render: function () {
        var url = this.props.widget.url;
        return <iframe frameborder="0" role="presentation" src="{url}" className="widget-iframe"></iframe>;
    }

});

module.exports = WidgetIframe;