module.exports = {
    ReactBrowserify: {
        greeting: 'Hello %(name)s! How are you today?',
        name: 'Name:',
        gender: 'Gender:',
        male: 'Male',
        female: 'Female',
        notificationCount: 'Notification count:',
        notificationsCountMessage: {
            male: {
                zero: '%(name)s do not added notifications to his note book.',
                one: '%(name)s added one notification to his note book.',
                other: '%(name)s added %(count)s notifications to his note book.'
            },
            female: {
                zero: '%(name)s do not added notifications to her note book.',
                one: '%(name)s added one notification to her note book.',
                other: '%(name)s added %(count)s notifications to her note book.'
            }
        }
    }
};