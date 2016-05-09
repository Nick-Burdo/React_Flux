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
        return (
            <p>
                <label>Switch Locale: </label>

                <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
                    <option>en</option>
                    <option>ru</option>
                    <option>uk</option>
                </select>
            </p>
        );
    }
});

