Ext.define('Practicum.view.main.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-header',
    
    height: 100,
    cls: 'app-header',
    layout: {
        type: 'hbox',
        pack: 'end',
        align: 'stretch'
    },
    
    items: [{
        xtype: 'container',
        margin: '0 0 10 0',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'panel',
            border: false,
            bodyPadding: 5,
            width: 100,
            bind: {
                html: '{headerIcon}'
            }
        }, {
            xtype: 'panel',
            border: false,
            flex: 1,
            bind: {
                html: '{headerTitle}'
            }
        }],
        flex: 1
    }, {
        xtype: 'container',
        margin: '0 0 10 0',
        width: 150,
        layout: {                        
            type: 'vbox',
            align: 'stretch',
            pack: 'end'
        },
        items: [{
            xtype: 'button',
            itemId: 'logoutBtn',
            text: 'Logout',
            reference: 'logout',
            iconCls: 'fa fa-sign-out fa-lg buttonIcon',
            margin: '10 10 0 10',
            listeners: {
                click: 'doLogout'
            }
        }]
    }]
});
