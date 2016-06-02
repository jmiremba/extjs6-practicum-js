Ext.define('Practicum.view.login.CapsLockTooltip', {
    extend: 'Ext.tip.QuickTip',
    xtype: 'capslocktooltip',
    target: 'passwordTxt',
    anchor: 'top',
    anchorOffset: 0,
    width: 300,
    dismissDelay: 0,
    autoHide: false,
    title: '<div class="fa fa-exclamation-triangle">'+Practicum.view.language.Translations[LANG].capsLockTitle+'</div>',
    html: '<div>'+Practicum.view.language.Translations[LANG].capsLockLine1+'</div><br/><div>'+
        Practicum.view.language.Translations[LANG].capsLockLine2+'</div>',
    
    requires: [
        'Practicum.view.language.Translations'
    ]
});