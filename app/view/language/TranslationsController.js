Ext.define('Practicum.view.language.TranslationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.translations',
    
    init: function() {
        LANG = localStorage ? (localStorage.getItem('lang') || 'en') : 'en';
        var button = this.getView();
        button.language = LANG;
        if (LANG == 'en') {
            button.setText('English');
            button.setIconCls('en');
        } else if (LANG == 'es') {
            button.setText('Español');
            button.setIconCls('es');
        } else {
            button.setText('Português');
            button.setIconCls('pt_BR');
        }
    },
    
    onMenuItemClick: function(item, e, options) {
        var menu = this.getView();
        menu.setIconCls(item.iconCls);
        menu.setText(item.text);
        localStorage.setItem('lang', item.language);
        window.location.reload();
    }
});