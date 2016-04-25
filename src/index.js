/**
 * Created by tigra on 24.04.16.
 */

require('whatwg-fetch');
var Promise = require('es6-promise').Promise;

var Component = require('./components/Component');

ReactDOM.render(
    <Component />,
    document.getElementById('app')
);

