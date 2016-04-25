/**
 * Created by tigra on 25.04.16.
 */

var api = (function () {
    /* private *********************/

    /* public **********************/
    return {
        create: function(data, callback) {

        },
        read: function(data, callback) {
            var response = 'Fetched message';

            if (typeof callback === 'function') {
                fetch('/data/message.json')
                    .then(function(response) {
                        return response.json()
                    }).then(function(json) {
                    callback(json[Math.round(Math.random())].message);
                }).catch(function(ex) {
                    console.error('parsing failed', ex)
                })
            }
        },
        update: function(data, callback) {

        },
        delete: function(data, callback) {

        }
    }
}());

module.exports = api;
