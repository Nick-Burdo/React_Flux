/**
 * Created by tigra on 08.05.16.
 */
'use strict';
var Translate   = require('react-translate-component');
var dispatcher = require('../flux/dispatcher');
var actions = require('../flux/actions');

module.exports = React.createClass({
    setName: function(e) {
        dispatcher.dispatch(actions.MF_NAME, e.target.value);
    },
    setNotificationCount: function(e) {
        dispatcher.dispatch(actions.MF_NOTIFICATIONS_COUNT, e.target.value);
        this.setState({notificationCount: e.target.value});
    },
    setGender:function(e) {
        dispatcher.dispatch(actions.MF_GENDER, e.target.value);
        this.setState({gender: e.target.value});
    },
    getInitialState: function () {
        return {
            gender: 'male',
            notificationCount: 0
        }
    },
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <Translate ntmlFor="messageFormatInputName" component="label" content="ReactBrowserify.name" />
                            <input type="text" className="form-control" id="messageFormatInputName" onChange={this.setName} />
                        </div>
                        <div className="form-group">
                            <label>Gender:</label>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="messageFormatGender" id="messageFormatGenderMale"
                                           value="male"  onClick={this.setGender} checked={this.state.gender=='male'} />
                                        Male
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="messageFormatGender" id="messageFormatGenderFemale"
                                           value="female" onClick={this.setGender} checked={this.state.gender=='female'}/>
                                        Female
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label ntmlFor="messageFormatInputNotificationsCount">Notifications count:</label>
                            <input type="number" className="form-control" id="messageFormatInputNotificationsCount"
                                   onChange={this.setNotificationCount} value={this.state.notificationCount}  />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

