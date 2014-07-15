require('jquery-ui/resizable');

module.exports = {

    /**
    *
    * Initialize resizable pluggin.
    *
    **/
    componentDidMount: function () {
        var me = this,
            $el = $(this.getDOMNode());

        $el.resizable({
            containment: 'parent',
            minHeight: 50,
            minWidth: 50,
            handles: 'all',
            start: function () {
                $('#drag-mask').show();
            },
            stop: function (evt, ui) {
                $('#drag-mask').hide();

                me.setState({
                    width: ui.size.width,
                    height: ui.size.height
                });
            }
        });
    },

    /**
    *
    * Destroy resizable pluggin.
    *
    **/
    componentWillUnmount: function () {
        var $el = $(this.getDOMNode());
        try {
            $el.resizable('destroy');
        }
        catch (e) {}
    }

};