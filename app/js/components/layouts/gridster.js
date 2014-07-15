/** @jsx React.DOM */
var React = require('react/addons');
var Gridster  = require('../gridster');
var GridsterWidget = require('../widgets/gridster');

var GridsterLayout = React.createClass({

    getInitialState: function () {
        return {
            items: [{
                key: 'test0',
                width: 1,
                height: 1,
                col: 1,
                row: 1,
                icon: 'foo',
                name: 'Widget 1',
                url: 'about:blank'
            }, {
                key: 'test1',
                width: 1,
                height: 1,
                col: 2,
                row: 1,
                icon: 'foo',
                name: 'Widget 2',
                url: 'about:blank'
            }, {
                key: 'test2',
                width: 1,
                height: 1,
                col: 3,
                row: 1,
                icon: 'foo',
                name: 'Widget 3',
                url: 'about:blank'
            }]
        };
    },

    render: function () {
        var items = this.state.items.map(function(item) {
            return (
                <GridsterWidget widget={item}></GridsterWidget>
            );
        });
        return (
            <div className="gridster-layout">
                <Gridster>
                    {items}
                </Gridster>
            </div>
        );
    }

});

module.exports = GridsterLayout;