/**
 * Created by tigra on 08.05.16.
 */
'use strict';

var messageFormatStore = (function () {
    /* private *********************/
    var dispatcher = require('../flux/dispatcher');
    var actions = require('../flux/actions');

    var state = {
        data: {
            name: 'Tigra',
            gender: 'male',
            contactsCount: 5,
            callsCount: 4,
            notificationsCount: 0,
            locale: 'en'
        }
    };

    dispatcher.register(actions.LOCALE_CHANGE, function(data) {
        state.data.locale = data;
        messageFormatStore.trigger('change');
    });

    dispatcher.register(actions.MF_NAME, function(data) {
        state.data.name = data;
        messageFormatStore.trigger('change');
    });

    dispatcher.register(actions.MF_GENDER, function(data) {
        state.data.gender = data;
        messageFormatStore.trigger('change');
    });

    dispatcher.register(actions.MF_NOTIFICATIONS_COUNT, function(data) {
        state.data.notificationsCount = parseInt(data);
        if (isNaN(state.data.notificationsCount)) {
            state.data.notificationsCount = 0;
        }
        messageFormatStore.trigger('change');
    });



    /* public **********************/
    return {
        getState: function () {
            return state;
        }
    }
}());

module.exports = messageFormatStore;

var MicroEvent = require('./microevent');
MicroEvent.mixin(messageFormatStore);

