/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
require('gridster');

var Gridster = React.createClass({

    render: function() {
        var widgets = this.props.children.map(function (item) {
            var attributes = item.props.widget;
            return (
                <li key={attributes.key}
                    data-row={attributes.row}
                    data-col={attributes.col}
                    data-sizex={attributes.width}
                    data-sizey={attributes.height}
                >
                    { item }
                </li>
            );
        })
        return (
            <div className="gridster">
                <ul ref="gridster" className="list-unstyled">
                    {widgets}
                </ul>
            </div>
        );
    },

    componentDidMount: function() {
        // initialize gridster
        // http://gridster.net/#documentation

        var gridster = $(this.refs.gridster.getDOMNode()).gridster({
            widget_margins: [10, 10],
            widget_base_dimensions: [140, 140],
            min_cols: 4,
            autogrow_cols: true,
            resize: {
                enabled: true,
                start: function () {
                    $('#drag-mask').show();
                },
                stop: function () {
                    $('#drag-mask').hide();
                }
            },
            draggable: {
                start: function () {
                    $('#drag-mask').show();
                },
                stop: function () {
                    $('#drag-mask').hide();
                }
            }
        }).data('gridster');

        this._$gridster = gridster;
    },

    componentWillUnmount: function () {
        this._$gridster.destroy();
    }

});

module.exports = Gridster;