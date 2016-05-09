(function ($) {
    'use strict';

    var locale, mf,
        data,
        dictionary, compiled,
        template,
        tasks, render, init;

    locale = 'pl';
    mf = new MessageFormat(locale);
    data = {
        name: 'Noname',
        gender: 'male',
        appsCount: 0,
        contactsCount: 0,
        callsCount: 0,
        notificationsCount: 0
    };
    tasks = {};

    dictionary = {
        en: {
            "Tizen found APPS_COUNT applications.":                      "Tizen {APPS_COUNT, plural, =0 {has not found any applications} one {found 1 application} other {found # applications}} installed on the device.",
            "NAME added CONTACTS_COUNT contacts to their address book.": "{NAME} {CONTACTS_COUNT, plural, =0 {has not added any contact} one {added 1 contact} other {added # contacts}} to {GENDER, select, male {his} female {her} other {their}} address book.",
            "You've made CALLS_COUNT calls.":                            "You've made {CALLS_COUNT, plural, =0 {no calls} one {1 call} other {# calls}}.",
            "You have NOTIFICATIONS_COUNT notifications.":               "You have {NOTIFICATIONS_COUNT, plural, =0 {no notifications} one {1 notification} other {# notifications}}."
        },
        pl: {
            "Tizen found APPS_COUNT applications.":                      "Tizen {APPS_COUNT, plural, =0 {nie znalazł żadnych aplikacji zainstalowanych} one {znalazł 1 aplikację zainstalowaną} few {znalazł # aplikacje zainstalowane} many {znalazł # aplikacji zainstalowanych} other {znalazł # aplikacji zainstalowanych}} na urządzeniu.",
            "NAME added CONTACTS_COUNT contacts to their address book.": "{NAME} {GENDER, select, male {{CONTACTS_COUNT, plural, =0 {nie dodał żadnego kontaktu} one {dodał 1 kontakt} few {dodał # kontakty} many {dodał # kontaktów} other {dodał # kontaktu}}} female {{CONTACTS_COUNT, plural, =0 {nie dodała żadnego kontaktu} one {dodała 1 kontakt} few {dodała # kontakty} many {dodała # kontaktów} other {dodała # kontaktu}}} other {{CONTACTS_COUNT, plural, =0 {nie dodali żadnego kontaktu} one {dodali 1 kontakt} few {dodali # kontakty} many {dodali # kontaktów} other {dodali # kontaktu}}}} do swojej książki adresowej.",
            "You've made CALLS_COUNT calls.":                            "{GENDER, select, male {{CALLS_COUNT, plural, =0 {Nie wykonałeś żadnego połączenia} one {Wykonałeś 1 połączenie} few {Wykonałeś # połączenia} many {Wykonałeś # połączeń} other {Wykonałeś # połączenia}}} female {{CALLS_COUNT, plural, =0 {Nie wykonałaś żadnego połączenia} one {Wykonałaś 1 połączenie} few {Wykonałaś # połączenia} many {Wykonałaś # połączeń} other {Wykonałaś # połączenia}}} other {{CALLS_COUNT, plural, =0 {Nie wykonaliście żadnego połączenia} one {Wykonaliście 1 połączenie} few {Wykonaliście # połączenia} many {Wykonaliście # połączeń} other {Wykonaliście # połączenia}}}}.",
            "You have NOTIFICATIONS_COUNT notifications.":               "{NOTIFICATIONS_COUNT, plural, =0 {Nie masz powiadomień} one {Masz 1 powiadomienie} few {Masz # powiadomienia} many {Masz # powiadomień} other {Masz # powiadomienia}}."
        },
        ru: {
            "Tizen found APPS_COUNT applications.":                      "Tizen {APPS_COUNT, plural, =0 {не нашел установленных приложений} one {нашел 1 установленное приложение} few {нашел # установленных приложений} many {нашел # установленных приложений} other {нашел # установленных приложений}} на устройстве.",
            "NAME added CONTACTS_COUNT contacts to their address book.": "{NAME} {GENDER, select, male {{CONTACTS_COUNT, plural, =0 {не добавил не одного контaктa} one {добавил 1 контaкт} few {добавил # контaктa} many {добавил # контaктов} other {добавил # контaктa}}} female {{CONTACTS_COUNT, plural, =0 {не добавилa не одного контaктa} one {добавилa 1 контaкт} few {добавилa # контaктa} many {добавилa # контaктов} other {добавилa # контaктa}}} other {{CONTACTS_COUNT, plural, =0 {не добавили не одного контaктa} one {добавили 1 контaкт} few {добавили # контaктa} many {добавили # контaктов} other {добавили # контaктa}}}} к своей адресной книге.",
            "You've made CALLS_COUNT calls.":                            "{GENDER, select, male {{CALLS_COUNT, plural, =0 {ты не сделал никакого звонка} one {ты сделал 1 звонок} few {ты сделал # звонка} many {ты сделал # звонков} other {ты сделал # звонка}}} female {{CALLS_COUNT, plural, =0 {ты не сделалa никакого звонка} one {ты сделалa 1 звонок} few {ты сделалa # звонка} many {ты сделалa # звонков} other {ты сделалa # звонка}}} other {{CALLS_COUNT, plural, =0 {Вы не сделали никакого звонка} one {Вы сделали 1 звонок} few {Вы сделали # звонка} many {Вы сделали # звонков} other {Вы сделали # звонка}}}}.",
            "You have NOTIFICATIONS_COUNT notifications.":               "{NOTIFICATIONS_COUNT, plural, =0 {у тебя нет уведомлений} one {у тебя 1 уведомление} few {у тебя # уведомления} many {у тебя # уведомлений} other {у тебя # уведомления}}."
        }
    };

    compiled = {
        en: {},
        pl: {},
        ru: {}
    };

    Handlebars.registerHelper('i18n', function (text) {
        var options,
            compiledText;

        options  = arguments[arguments.length - 1];

        console.log('text: ', text);
        console.log('options: ', options);

        if (compiled[locale].hasOwnProperty(text)) {
            compiledText = compiled[locale][text];
        } else {
            compiledText = mf.compile(dictionary[locale][text]);
            compiled[locale][text] = compiledText;
        }

        return compiledText(options.hash);
    });

    tasks.installedApps = function (callback) {
        tizen.application.getAppsInfo(function (applications) {
            data.appsCount = applications.length;
            callback();
        });
    };

    tasks.addedContacts = function (callback) {
        var addressBook;

        addressBook = tizen.contact.getDefaultAddressBook();

        addressBook.find(function (contacts) {
            data.contactsCount = contacts.length;
            callback();
        });
    };

    tasks.callsCount = function (callback) {
        tizen.callhistory.find(function (calls) {
            data.callsCount = calls.length;
            callback();
        });
    };

    render = function () {
        var source;
        
        if (template === undefined) {
            source = $('#template').html();
            template = Handlebars.compile(source);
        }
        
        $('#stats').html(template(data));
    };

    init = function () {
        $('input[name="name"]').on('keyup', function (e) {
            data.name = this.value || 'Noname';
            render();
        });

        $('input[name="gender"]').on('change', function (e) {
            data.gender = this.value || 'male';
            render();
        });

        $('input[name="notifications"]').on('keyup', function (e) {
            data.notificationsCount = this.value || 0;
            render();
        });

        $('input[name="language"]').on('change', function (e) {
            locale = this.value || 'en';
            render();
        });

        render();

        $.each(tasks, function (undefined, task) {
            task(render);
        });
    };

    $(document).ready(init);
})(jQuery);