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
                <li role="presentation">
                    <a role="menuitem" href="#">
                        <DashboardTab onMouseDown={me.handleClick} dashboard={item}></DashboardTab>
                    </a>
                </li>
            );
        });
        return (
            <div className="dashboard-switcher">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                        Dashboards <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu" ariaLabelledby="dropdownMenu1">
                        {dashboards}
                    </ul>
                </div>
            </div>
        );

    }

});

module.exports = DashboardSwitcher;
