/**
 * Created by tigra on 09.05.16.
 */
'use strict';

var counterpart = require('counterpart');
var dispatcher = require('../flux/dispatcher');
var actions = require('../flux/actions');


module.exports = React.createClass({
    handleChange: function(e) {
        counterpart.setLocale(e.target.value);
        dispatcher.dispatch(actions.LOCALE_CHANGE, e.target.value);
    },

    render: function() {
        var props = {
            defaultValue: counterpart.getLocale(),
            onChange: this.handleChange,
            className: "form-control input-sm"
        };
        return (
            <div className="form-group col-sm-2 col-sm-offset-10">
                <select {...props}>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                    <option value="uk">Українська</option>
                </select>
            </div>
        );
    }
});

