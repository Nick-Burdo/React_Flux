/**
 * Created by tigra on 08.05.16.
 */
'use strict';

var Translate   = require('react-translate-component');
var translate = require('counterpart');
var messageFormatStore = require('../store/messageFormatStore');


module.exports = React.createClass({
    getInitialState: function() {
        return messageFormatStore.getState();
    },
    componentDidMount() {
        messageFormatStore.bind('change', this.update);
    },
    componentWillUnmount: function() {
        messageFormatStore.unbind( 'change', this.update );
    },
    update() {
        this.setState(messageFormatStore.getState());
    },
    render: function () {

        translate.setLocale(this.state.data.locale);


        var date = new Date();
        var localDate = translate.localize(date);                       // => 'Fri, 21 Feb 2014 13:46'
        var localDateShort = translate.localize(date, { format: 'short' });  // => '21 Feb 13:46'
        var localDateLong = translate.localize(date, { format: 'long' });   // => 'Friday, February 21st, 2014 13:46:24 +01:00'
        var localDateDate = translate.localize(date, { type: 'date' });                  // => 'Fri, 21 Feb 2014'
        var localDateDateShort = translate.localize(date, { type: 'date', format: 'short' }); // => 'Feb 21'
        var localDateDateLong = translate.localize(date, { type: 'date', format: 'long' });  // => 'Friday, February 21st, 2014'

        var localTime = translate.localize(date, { type: 'time' });                  // => '13:46'
        var localTimeShort = translate.localize(date, { type: 'time', format: 'short' }); // => '13:46'
        var localTimeLong = translate.localize(date, { type: 'time', format: 'long' });  // => '13:46:24 +01:00'

        var content = 'ReactBrowserify.notificationsCountMessage.' + this.state.data.gender;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <p>
                        <Translate name={this.state.data.name}
                                   count={this.state.data.notificationsCount}
                                   content={content} />

                    </p>

                    <p>Gender: {this.state.data.gender}; Locale: {this.props.locale}</p>

                    <hr />

                    {localDate}<br />
                    {localDateShort}<br />
                    {localDateLong}<br />
                    {localDateDate}<br />
                    {localDateDateShort}<br />
                    {localDateDateLong}<br />
                    {localTime}<br />
                    {localTimeShort}<br />
                    {localTimeLong}


                    <hr />

                    <Translate name={this.state.data.name} component="h2" content="ReactBrowserify.greeting" />
                </div>
            </div>
        );
    }
});


