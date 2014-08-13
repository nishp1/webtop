var _ = require( 'lodash' );

var Manager = function() {};

var dashboards = [ {
    name: 'Dashboard 1',
    widgets: [ {
        key: 'test1',
        width: 200,
        height: 200,
        left: 50,
        top: 50,
        zIndex: 1,
        maximized: false,
        minimized: false,
        icon: 'foo',
        name: 'Widget 1',
        url: 'about:blank'
    } ]
}, {
    name: 'Dashboard 2',
    widgets: [ {
        key: 'test2',
        width: 300,
        height: 300,
        left: 100,
        top: 100,
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
        left: 150,
        top: 150,
        zIndex: 1,
        maximized: false,
        minimized: false,
        icon: 'foo',
        name: 'Widget 3',
        url: 'about:blank'
    } ]
} ];

Manager.prototype.findByName = function( name ) {
    return _.find( dashboards, {
        'name': name
    } );
};

Manager.prototype.update = function( dashboard ) {
    var d = this.findByName(dashboard.name);
    var i = dashboards.indexOf(d);
    dashboards[i] = dashboard;
};

Manager.prototype.getAll = function() {
    return dashboards;
};

module.exports = Manager;
