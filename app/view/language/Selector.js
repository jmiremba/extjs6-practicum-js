Ext.define('Practicum.view.language.Selector', {
    extend: 'Ext.button.Split',
    xtype: 'language-selector',
    requires: [
        'Practicum.view.language.TranslationsController'
    ],
    controller: 'translations',
    menu: {
        xtype: 'menu',
        defaults: {
            listeners: {
                click: 'onMenuItemClick'
            }
        },
        items: [{
            xtype: 'menuitem',
            iconCls: 'en',
            text: 'English',
            language: 'en'
        }, {
            xtype: 'menuitem',
            iconCls: 'es',
            text: 'Español',
            language: 'es'
        }, {
            xtype: 'menuitem',
            iconCls: 'pt_BR',
            text: 'Português',
            language: 'pt_BR'
        }]
    }
});