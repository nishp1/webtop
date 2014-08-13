var _ = require( 'lodash' );

var Manager = function() {};

var dashboards = [ {
    name: 'Dashboard 1',
    widgets: [ {
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
    } ]
}, {
    name: 'Dashboard 2',
    widgets: [ {
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
