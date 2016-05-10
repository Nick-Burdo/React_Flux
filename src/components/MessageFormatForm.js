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
        var nameLabelProps = {
            ntmlFor: "messageFormatInputName",
            component: "label",
            content: "ReactBrowserify.name",
            fallback: 'Name:'
        };
        var genderLabelProps = {
            component: "label",
            content: "ReactBrowserify.gender",
            fallback: 'Gender:'
        };
        var genderMaleLabelProps = {
            content: "ReactBrowserify.male",
            fallback: 'Male'
        };
        var genderFemaleLabelProps = {
            content: "ReactBrowserify.female",
            fallback: 'Female'
        };
        var notificationCountLabelProps = {
            ntmlFor: "messageFormatInputNotificationsCount",
            component: "label",
            content: "ReactBrowserify.notificationCount",
            fallback: 'Notification count:'
        };
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <Translate {...nameLabelProps} />
                            <input type="text" className="form-control" id="messageFormatInputName" onChange={this.setName} />
                        </div>
                        <div className="form-group">
                            <Translate {...genderLabelProps} />
                            <div className="radio">
                                <label>
                                    <input type="radio" name="messageFormatGender" id="messageFormatGenderMale"
                                           value="male"  onClick={this.setGender} checked={this.state.gender=='male'} />
                                        <Translate {...genderMaleLabelProps} />
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="messageFormatGender" id="messageFormatGenderFemale"
                                           value="female" onClick={this.setGender} checked={this.state.gender=='female'}/>
                                        <Translate {...genderFemaleLabelProps} />
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <Translate {...notificationCountLabelProps} />
                            <input type="number" className="form-control" id="messageFormatInputNotificationsCount"
                                   onChange={this.setNotificationCount} value={this.state.notificationCount}  />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

