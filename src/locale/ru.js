/**
 * Created by tigra on 09.05.16.
 */
'use strict';
module.exports = {
    ReactBrowserify: {
        greeting: 'Привет, %(name)s! Как поживаешь?',
        name: 'Имя:',
        gender: 'Пол:',
        male: 'Мужской',
        female: 'Женский',
        notificationCount: 'Количество заметок:',
        notificationsCountMessage: {
            male: {
                zero: '%(name)s не добавлял заметок в записную книгу.',
                one: '%(name)s добавил в записную книгу %(count)s заметку.',
                few: '%(name)s добавил в записную книгу %(count)s заметки.',
                other: '%(name)s добавил в записную книгу %(count)s заметок.'
            },
            female: {
                zero: '%(name)s не добавляла заметок в записную книгу.',
                one: '%(name)s добавила в записную книгу %(count)s заметку.',
                few: '%(name)s добавила в записную книгу %(count)s заметки.',
                other: '%(name)s добавила в записную книгу %(count)s заметок.'
            }
        }
    }
};
 
