/**
 * Created by tigra on 09.05.16.
 */
'use strict';

module.exports = {
    counterpart: {
        names: {
            __locale: "ru",
            days: ['Недiля', 'Понедiлок', 'Вiвторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'],
            abbreviated_days: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Сiчня', 'Лютого', 'Березня', 'Квiтня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'],
            abbreviated_months: ['Сiч', 'Лют', 'Бер', 'Квт', 'Трв', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Грд'],
            am: 'до обiд',
            pm: 'пiсля обiд'
        },
        pluralize: function (entry, count) {
            var key;

            if (count === 0 && 'zero' in entry) {
                key = 'zero';
            } else if (count % 10 == 1 && count % 100 != 11) {
                key = 'one'
            } else if (count % 10 > 1 && count % 10 < 5 && !(count % 100 > 11 && count % 100 < 15) && 'few' in entry) {
                key = 'few'
            } else {
                key = 'other'
            }

            return entry[key];
        },

        formats: {
            date: {
                'default': '%a, %e %b %Y',
                long: '%A, %e %B %Y',
                short: '%d.%m.%y'
            },

            time: {
                'default': '%H:%M',
                long: '%H:%M:%S %z',
                short: '%H:%M'
            },

            datetime: {
                'default': '%a, %e %b %Y, %H:%M',
                long: '%A, %e %B %Y, %H:%M:%S %z',
                short: '%d.%m.%y %H:%M'
            }
        }
    }
};
