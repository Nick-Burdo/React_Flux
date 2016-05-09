/**
 * Created by tigra on 24.04.16.
 */

var dispatcher = require('../flux/dispatcher');
var actions = require('../flux/actions');
var store = require('../store/store');
var MessageFormat = require('./MessageFormat');
var LocaleSwitcher = require('./LocaleSwitcher');



module.exports = React.createClass({
    getInitialState() {
        return store.getState();
    },
    componentDidMount() {
        store.bind('change', this.update);
    },
    componentWillUnmount: function() {
        store.unbind( 'change', this.update );
    },
    update() {
        this.setState(store.getState());
    },
    toggleSidebar() {
        dispatcher.dispatch(this.state.open ? actions.HIDE_MSG : actions.SHOW_MSG);
    },
    fetch() {
        dispatcher.dispatch(actions.FETCH_MSG);
    },
    render() {

        console.log('RENDER');

        return (

            <div>
                <LocaleSwitcher />

                <hr />

                {this.state.open ? <p>{this.state.message}</p> : null}
                <button onClick={this.toggleSidebar}>toggle message</button>
                <button onClick={this.fetch}>fetch message</button>

                <hr />

                <MessageFormat />
            </div>
        )
    }
});
