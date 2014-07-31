/** @jsx React.DOM */

var React = require('react/addons');

var DashboardTab = React.createClass({

    onMouseDown: function () {
        this.props.onMouseDown(this.props.dashboard);
    },

    render: function () {
        var dashboardName = this.props.dashboard.name;

        return (
            <div className="dashboard-tab" onClick={this.onMouseDown}>
                <span className="name">{dashboardName}</span>
            </div>
        );

    }

});

module.exports = DashboardTab;
