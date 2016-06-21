Ext.define('Practicum.view.content.security.Users', {
    extend: 'Ext.panel.Panel',
    xtype: 'content-users',
    requires: [
        'Practicum.view.security.UsersController',
        'Practicum.view.security.UsersModel',
        'Practicum.view.security.UsersGrid',
        'Practicum.util.Glyphs'
    ],
    controller: 'users',
    viewModel: {
        type: 'users'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'component',
        height: 50,
        componentCls: 'content-title',
        bind: {
            html: '{contentTitle}'
        }
    }, {
        xtype: 'toolbar',
        items: ['->', {
            xtype: 'button',
            text: 'Add',
            glyph: Practicum.util.Glyphs.getGlyph('add'),
            listeners: {
                click: 'onAdd'
            }
        }, {
            xtype: 'button',
            text: 'Edit',
            glyph: Practicum.util.Glyphs.getGlyph('edit'),
            listeners: {
                click: 'onEdit'
            },
            bind: {
                disabled: '{!usersGrid.selection}'
            }
        }, {
            xtype: 'button',
            text: 'Delete',
            glyph: Practicum.util.Glyphs.getGlyph('remove'),
            listeners: {
                click: 'onDelete'
            },
            bind: {
                disabled: '{!usersGrid.selection}'
            }
        }]
    }, {
        xtype: 'users-grid',
        flex: 1
    }]
});