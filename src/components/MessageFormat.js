/**
 * Created by tigra on 08.05.16.
 */
'use strict';

var MessageFormatForm = require('./MessageFormatForm');
var MessageFormatView = require('./MessageFormatView');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <MessageFormatForm />
                <MessageFormatView />
            </div>
        );
    }
});

