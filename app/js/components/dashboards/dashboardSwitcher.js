/** @jsx React.DOM */

var React = require('react/addons');
var DashboardTab = require('./dashTab');

var DashboardSwitcher = React.createClass({

    handleClick: function (dashboard) {
        if(this.props.onDashboardTabClick) {
            this.props.onDashboardTabClick(dashboard);
        }
    },

    render: function () {
        var me = this;
        var dashboards = this.props.dashboards.map(function(item) {
            return (
                <DashboardTab onMouseDown={me.handleClick} dashboard={item}></DashboardTab>
            );
        });
        return (
            <div className="dashboard-switcher">
                {dashboards}
            </div>
        );

    }

});

module.exports = DashboardSwitcher;
