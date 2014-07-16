/** @jsx React.DOM */

var React = require('react/addons');
var WidgetChrome = require('./chrome');
var WidgetIframe = require('./iframe');

var ClosableMixin = require('../../mixins/closable');

var GridsterWidget = React.createClass({

    mixins: [ClosableMixin],

    render: function () {
        var widget = this.props.widget;

        var icon = widget.icon;
        var name = widget.name;

        return (
            <div className="widget gridster-widget">
                {
                    this.transferPropsTo(
                        <WidgetChrome>
                            <ul className="widget-chrome-controls list-unstyled">
                                <li>
                                    <a title="Close" className="glyphicon glyphicon-remove" onClick={this.handleClose}></a>
                                </li>
                            </ul>

                        </WidgetChrome>
                    )
                }
                <div className="widget-body">
                    { this.transferPropsTo(<WidgetIframe />) }
                </div>
            </div>
        );

    }

});

module.exports = GridsterWidget;