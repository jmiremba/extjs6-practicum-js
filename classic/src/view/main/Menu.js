Ext.define('Practicum.view.main.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-menu',
    
    width: 250,
    layout: {
        type: 'accordion',
        multi: false
    },
    collapsible: false,
    split: false,
    splitterResize: false
});
