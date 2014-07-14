/** @jsx React.DOM */
var React = require('react');

var Gridster = React.createClass({

    render: function() {
        return (
            <div className="gridster">
                { this.transferPropsTo(<ul ref="gridster" className="list-unstyled" />) }
            </div>
        );
    },

    renderGridsterWidgets: function ($gridster, items) {
        items.map(function(item, i) {
            var attributes = item.props.widget;
            var key = "widget" + attributes.key;

            var $widget = $gridster.add_widget(
                '<li class="item" id={key}><section></section></li>'.replace('{key}', key),
                attributes.width,
                attributes.height,
                attributes.col,
                attributes.row
            );
            React.renderComponent(item, $widget.children('section')[0]);
        });
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

        this.renderGridsterWidgets(gridster, this.props.children);
        this.setState({gridster: gridster});
    },

    componentDidUpdate: function(prevProps, prevState) {
        var gridster = this.state.gridster;
        var uniques = this.props.children.filter(function(newChild) {
            for (var index in prevProps.children) {
                var oldChild = prevProps.children[index];
                if (oldChild.props.widget.key === newChild.props.widget.key) {
                    return false;
                }
            }
            return true;
        });

        this.renderGridsterWidgets(this.state.gridster, uniques);
    }

});

module.exports = Gridster;