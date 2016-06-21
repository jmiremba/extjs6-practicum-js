Ext.define('Practicum.view.security.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'user-form',
    height: 365,
    width: 600,
    requires: [
        'Practicum.Utils',
        'Practicum.util.Glyphs'
    ],
    layout: {
        type: 'fit'
    },
    bind: {
        title: '{title}'
    },
    closable: false,
    draggable: false,
    resizable: false,
    modal: true,
    items: [{
        xtype: 'form',
        reference: 'userForm',
        bodyPadding: 5,
        modelValidation: true,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'fieldset',
            flex: 1,
            margin: '0 5 0 0',
            title: 'User Information',
            layout: 'anchor',
            defaults: {
                afterLabelTextTpl: Practicum.Utils.required,
                anchor: '100%',
                xtype: 'textfield',
                msgTarget: 'side',
                labelWidth: 85,
                labelAlign: 'right'
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'id',
                bind : '{currentUser.id}'
            }, {
                fieldLabel: 'Username',
                name: 'username',
                bind : '{currentUser.username}'
            }, {
                fieldLabel: 'Full Names',
                name: 'fullnames',
                bind : '{currentUser.fullnames}'
            }, {
                fieldLabel: 'Email',
                name: 'email',
                bind : '{currentUser.email}'
            }, {
                xtype: 'combo',
                fieldLabel: 'Group',
                displayField: 'name',
                valueField: 'id',
                queryMode: 'local',
                forceSelection: true,
                editable: false,
                name: 'groupId',
                bind: {
                    value: '{currentUser.groupId}',
                    store: '{groups}',
                    selection: '{currentUser.group}'
                }
            }, {
                xtype: 'filefield',
                fieldLabel: 'Photo',
                name: 'picture',
                buttonText: 'Select Photo...',
                afterLabelTextTpl: '',
                listeners: {
                    change: 'onFileFieldChange'
                }
            }]
        }, {
            xtype: 'fieldset',
            title: 'Photo',
            width: 170,
            items: [{
                xtype: 'image',
                reference: 'userPicture',
                height: 150,
                width: 150,
                bind:{
                    src: 'profileimages/{currentUser.picture}'
                }
            }]
        }]
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        layout: {
            pack: 'end',
            type: 'hbox'
        },
        items: [{
            xtype: 'button',
            text: 'Save',
            glyph: Practicum.util.Glyphs.getGlyph('save'),
            listeners: {
                click: 'onSave'
            }
        }, {
            xtype: 'button',
            text: 'Cancel',
            glyph: Practicum.util.Glyphs.getGlyph('cancel'),
            listeners: {
                click: 'onCancel'
            }
        }]
    }]
});