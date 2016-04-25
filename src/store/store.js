/**
 * Created by tigra on 25.04.16.
 */

var store = (function () {
    /* private *********************/
    var dispatcher = require('../flux/dispatcher');
    var actions = require('../flux/actions');
    var api = require('./api');

    var state = {
        open: false,
        message: 'Initial message'
    };
    var Listeners = [];

    dispatcher.register(actions.SHOW_MSG, function() {
        state.open = true;
        store.trigger('change');
    });

    dispatcher.register(actions.HIDE_MSG, function() {
        state.open = false;
        store.trigger('change');
    });

    dispatcher.register(actions.FETCH_MSG, function() {
        //dispatcher.dispatch(actions.API_FETCH_MSG);
        api.read(null, function (response) {
            state.message = response;
            store.trigger('change');
        });
    });

    /* public **********************/
    return {
        getState: function () {
            return state;
        }
    }
}());

module.exports = store;

var MicroEvent = require('./microevent');
MicroEvent.mixin(store);
