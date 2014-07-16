/** @jsx React.DOM */

var React = require('react/addons');

var WidgetChrome = require('./chrome');
var WidgetIframe = require('./iframe');

var DraggableMixin = require('../../mixins/draggable');
var ResizableMixin = require('../../mixins/resizable');

var cx = React.addons.classSet;


var WidgetWindow = React.createClass({

    mixins: [DraggableMixin, ResizableMixin],

    handleMouseDown: function () {
        this.props.onMouseDown(this.props.widget);
    },

    handleMaximize: function () {
        this.props.onMaximize(this.props.widget);
    },

    handleMinimize: function () {
        this.props.onMinimize(this.props.widget);
    },

    render: function () {
        var widget = this.props.widget;

        var styles = {
            top: widget.y,
            left: widget.x,
            width: widget.width,
            height: widget.height,
            zIndex: widget.zIndex
        };

        var classes = cx({
            'widget': true,
            'widget-window': true,
            'maximized': widget.maximized,
            'minimized': widget.minimized
        });

        return (
            <div className={classes} style={styles} onMouseDown={this.handleMouseDown}>
                {
                    this.transferPropsTo(
                        <WidgetChrome>
                            <ul className="widget-chrome-controls list-unstyled">
                                <li>
                                    <a title="Maximize" className="glyphicon glyphicon-resize-full" onClick={this.handleMaximize}></a>
                                </li>

                                <li>
                                    <a title="Close" className="close-btn glyphicon glyphicon-remove"></a>
                                </li>
                            </ul>
                        </WidgetChrome>
                    )
                }
                <div className="widget-body">
                    { this.transferPropsTo(<WidgetIframe />) }
                </div>
            </div>
        );

    }

});

module.exports = WidgetWindow;