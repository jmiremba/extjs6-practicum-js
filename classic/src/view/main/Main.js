Ext.define('Practicum.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main-viewport',

    requires: [
        'Practicum.view.main.MainController',
        'Practicum.view.main.MainModel',
        'Practicum.view.main.Header',
        'Practicum.view.main.Footer',
        'Practicum.view.main.Menu',
        'Practicum.view.main.Dashboard',
        'Ext.layout.container.*'
    ],

    controller: 'main',
    viewModel: 'main',
    
    layout: {
        type: 'border'
    },
    
    items: [{
        region: 'north',
        xtype: 'main-header'
    }, {
        region: 'west',
        xtype: 'main-menu',
        split: true
    }, {
        region: 'south',
        xtype: 'main-footer'
    }, {
        region: 'center',
        xtype: 'view-dashboard'
    }]
});
