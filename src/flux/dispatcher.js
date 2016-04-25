/**
 * Created by tigra on 25.04.16.
 */

var dispatcher = (function () {
    /* private *********************/
    var listeners = {};


    /* public **********************/
    return {
        register: function(action, fn) {
            listeners[action] = listeners[action] || [];
            listeners[action].push(fn);
        },
        dispatch: function(action, data) {
            var fns = listeners[action];

            if (fns) {
                for (var i in fns) {
                    fns[i](data);
                }
            }
        }
    }
}());

module.exports = dispatcher;
