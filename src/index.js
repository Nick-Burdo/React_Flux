/**
 * Created by tigra on 24.04.16.
 */

require('whatwg-fetch');
var Promise = require('es6-promise').Promise;
var counterpart = require('counterpart');

var Component = require('./components/Component');

counterpart.registerTranslations('en', require('./locale/en'));

counterpart.registerTranslations('ru', require('./locale/counterpart-ru'));

counterpart.registerTranslations('ru', require('./locale/ru'));

counterpart.registerTranslations('uk', require('./locale/counterpart-uk'));

counterpart.registerTranslations('uk', require('./locale/uk'));

ReactDOM.render(
    <Component />,
    document.getElementById('app')
);

