/** @jsx React.DOM */
var React             = require('react/addons');
var _                 = require('lodash');

var Widget            = require('../widgets/window');
var WidgetChrome      = require('../widgets/chrome');

var Manager           = new (require( '../dashboardManager'))();

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
        var dashboard = Manager.findByName('Dashboard 1');

        return {
            dashboard: Manager.findByName('Dashboard 1')
        };
    },

    bringToFront: function (widget) {
        var max = _.max(_.pluck(this.state.dashboard.widgets, 'zIndex'));
        var index = _.indexOf(this.state.dashboard.widgets, widget);

        var newWidgets = _.cloneDeep(this.state.dashboard.widgets.map(function(widget) {
            widget.isActive = false;
            return widget;
        }));
        newWidgets[index].zIndex = max + 4;
        newWidgets[index].minimized = false;
        newWidgets[index].isActive = true;

        var dashboard = this.state.dashboard;
        dashboard.widgets = newWidgets;

        Manager.update(dashboard);

        this.setState({
            dashboard: dashboard
        });
    },

    activateDashboard: function(dashboard) {
        Manager.update(this.state.dashboard);

        this.setState({
            dashboard: dashboard
        });
    },

    toggleMaximize: function (widget) {
        var index = _.indexOf(this.state.dashboard.widgets, widget);

        var newWidgets = _.cloneDeep(this.state.dashboard.widgets);
        newWidgets[index].minimized = false;
        newWidgets[index].maximized = !newWidgets[index].maximized;

        var dashboard = this.state.dashboard;
        dashboard.widgets = newWidgets;

        Manager.update(dashboard);

        this.setState({
            dashboard: dashboard
        });
    },

    minimize: function (widget) {
        var index = _.indexOf(this.state.dashboard.widgets, widget);

        var newWidgets = _.cloneDeep(this.state.dashboard.widgets);
        newWidgets[index].minimized = true;
        newWidgets[index].maximized = false;

        var dashboard = this.state.dashboard;
        dashboard.widgets = newWidgets;

        Manager.update(dashboard);

        this.setState({
            dashboard: dashboard
        });
    },

    close: function (widget) {
        var dashboard = _.cloneDeep(this.state.dashboard);
        dashboard.widgets = _.pull(this.state.dashboard.widgets, widget);

        this.setState({
            dashboard: dashboard
        });
    },

    render: function () {
        var me = this;
        var widgets = this.state.dashboard.widgets.map(function(item) {
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
                <DesktopTaskbar widgets={this.state.dashboard.widgets} onActivate={this.bringToFront}></DesktopTaskbar>
            </div>
        );
    }

});

module.exports = DesktopLayout;
