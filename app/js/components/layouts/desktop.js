/** @jsx React.DOM */
var React             = require('react/addons');
var _                 = require('lodash');

var Widget            = require('../widgets/window');
var WidgetChrome      = require('../widgets/chrome');

var Manager           = require( '../dashboardManager');

var DashboardSwitcher = require('../dashboards/dashboardSwitcher');

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
            widgets: Manager.findByName('Dashboard 1').widgets
        };
    },

    bringToFront: function (widget) {
        var max = _.max(_.pluck(this.state.widgets, 'zIndex'));
        var index = _.indexOf(this.state.widgets, widget);

        var newWidgets = _.cloneDeep(this.state.widgets.map(function(widget) {
            widget.isActive = false;
            return widget;
        }));
        newWidgets[index].zIndex = max + 4;
        newWidgets[index].minimized = false;
        newWidgets[index].isActive = true;

        this.setState({
            widgets: newWidgets
        });
    },

    activateDashboard: function(dashboard) {
        var newDashboardWidgets = _.cloneDeep(dashboard.widgets);

        this.setState({
            widgets: newDashboardWidgets
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
                <DashboardSwitcher dashboards={Manager.getAll()} onDashboardTabClick={this.activateDashboard}></DashboardSwitcher>
                <div className="layout-body">
                    {widgets}
                </div>
                <DesktopTaskbar widgets={this.state.widgets} onActivate={this.bringToFront}></DesktopTaskbar>
            </div>
        );
    }

});

module.exports = DesktopLayout;
