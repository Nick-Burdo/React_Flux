/**
 * Created by tigra on 09.05.16.
 */
'use strict';
module.exports = {
    ReactBrowserify: {
        greeting: 'Привiт, %(name)s! Як ся маєш?',
        name: 'Им\'я:',
        gender: 'Стать:',
        male: 'Чоловiча',
        female: 'Жiноча',
        notificationCount: 'Кiлькiсть нотаток:',
        notificationsCountMessage: {
            male: {
                zero: '%(name)s не додавав нотаток до записної книжки.',
                one: '%(name)s додав до записної книжки %(count)s нотатку.',
                few: '%(name)s додав до записної книжки %(count)s нотатки.',
                other: '%(name)s додав до записної книжки %(count)s нотаток.'
            },
            female: {
                zero: '%(name)s не додавла нотаток до записної книжки.',
                one: '%(name)s додала до записної книжки %(count)s нотатку.',
                few: '%(name)s додала до записної книжки %(count)s нотатки.',
                other: '%(name)s додала до записної книжки %(count)s нотаток.'
            }
        }
    }
};
 
