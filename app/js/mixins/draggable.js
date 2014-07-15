require('jquery-ui/draggable');

module.exports = {

    /**
    *
    * Lazily initialize draggable plugin when required(on mousedown).
    *
    **/
    componentDidMount: function () {
        var me = this,
            $el = $(this.getDOMNode());

        $el.one('mousedown.init-draggable', function (evt) {
            $el.draggable({
                    containment: 'parent',
                    start: function () {
                        $('#drag-mask').show();
                    },
                    stop: function (evt, ui) {
                        $('#drag-mask').hide();
                        me.setState({
                            x: ui.position.left,
                            y: ui.position.top
                        });
                    }
                })
                .trigger(evt);
        });
    },

    /**
    *
    * Destroy draggable plugin.
    *
    **/
    componentWillUnmount: function () {
        var $el = $(this.getDOMNode()).off('.init-draggable');
        try {
            $el.draggable('destroy');
        }
        catch (e) {}
    }

};