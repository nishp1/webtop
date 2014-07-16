/** @jsx React.DOM */
var React           = require('react/addons');
var _               = require('lodash');

var Widget          = require('../widgets/window');
var WidgetChrome    = require('../widgets/chrome');

var DesktopTaskbar = React.createClass({

    render: function () {
        var me = this;

        var taskbarChromes = this.props.widgets.map(function(widget) {
            return (
                <WidgetChrome widget={widget} onClick={me.props.onActivate}></WidgetChrome>
            );
        });
        return (
            <div className="layout-desktop-taskbar">
                {taskbarChromes}
            </div>
        );
    }

});

var DesktopLayout = React.createClass({

    getInitialState: function () {
        return {
            widgets: [{
                key: 'test1',
                width: 200,
                height: 200,
                x: 50,
                y: 50,
                zIndex: 1,
                maximized: false,
                minimized: false,
                icon: 'foo',
                name: 'Widget 1',
                url: 'about:blank'
            }, {
                key: 'test2',
                width: 300,
                height: 300,
                x: 100,
                y: 100,
                zIndex: 1,
                maximized: false,
                minimized: false,
                icon: 'foo',
                name: 'Widget 2',
                url: 'about:blank'
            }, {
                key: 'test3',
                width: 400,
                height: 400,
                x: 150,
                y: 150,
                zIndex: 1,
                maximized: false,
                minimized: false,
                icon: 'foo',
                name: 'Widget 3',
                url: 'about:blank'
            }]
        };
    },

    bringToFront: function (widget) {
        var max = _.max(_.pluck(this.state.widgets, 'zIndex'));
        var index = _.indexOf(this.state.widgets, widget);

        var newWidgets = _.cloneDeep(this.state.widgets);
        newWidgets[index].zIndex = max + 4;
        newWidgets[index].minimized = false;

        this.setState({
            widgets: newWidgets
        });
    },

    toggleMaximize: function (widget) {
        var index = _.indexOf(this.state.widgets, widget);

        var newWidgets = _.cloneDeep(this.state.widgets);
        newWidgets[index].minimized = false;
        newWidgets[index].maximized = !newWidgets[index].maximized;

        this.setState({
            widgets: newWidgets
        });
    },

    minimize: function (widget) {
        var index = _.indexOf(this.state.widgets, widget);

        var newWidgets = _.cloneDeep(this.state.widgets);
        newWidgets[index].minimized = true;
        newWidgets[index].maximized = false;

        this.setState({
            widgets: newWidgets
        });
    },

    close: function (widget) {
        this.setState({
            widgets: _.pull(this.state.widgets, widget)
        });
    },

    render: function () {
        var me = this;
        var widgets = this.state.widgets.map(function(item) {
            return (
                <Widget widget={item} onMouseDown={me.bringToFront} onMaximize={me.toggleMaximize} onMinimize={me.minimize} onClose={me.close}></Widget>
            );
        });
        return (
            <div className="layout layout-desktop">
                <div className="layout-body">
                    {widgets}
                </div>
                <DesktopTaskbar widgets={this.state.widgets} onActivate={this.bringToFront}></DesktopTaskbar>
            </div>
        );
    }

});

module.exports = DesktopLayout;