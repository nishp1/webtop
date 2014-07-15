/** @jsx React.DOM */

var React = require('react/addons');
var WindowChrome = require('./chrome');
var WidgetIframe = require('./iframe');
var DraggableMixin = require('../../mixins/draggable');
var ResizableMixin = require('../../mixins/resizable');

var WidgetWindow = React.createClass({

    mixins: [DraggableMixin, ResizableMixin],

    handleMouseDown: function () {
        this.props.onMouseDown(this.props.widget);
    },

    render: function () {
        var widget = this.props.widget;

        var widgetStyles = {
            top: widget.y,
            left: widget.x,
            width: widget.width,
            height: widget.height,
            zIndex: widget.zIndex
        };

        return (
            <div className="widget widget-window" style={widgetStyles} onMouseDown={this.handleMouseDown}>
                { this.transferPropsTo(<WindowChrome />) }
                <div className="widget-body">
                    { this.transferPropsTo(<WidgetIframe />) }
                </div>
            </div>
        );

    }

});

module.exports = WidgetWindow;