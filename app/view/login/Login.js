/**
 * Login window.
 */
Ext.define('Practicum.view.login.Login', {
    extend: 'Ext.window.Window',    // Extend the Window class
    xtype: 'login-window',          // Alias for this widget
    
    requires: [
        'Practicum.view.login.LoginController'
    ],
    
    controller: 'login',            // Binding to view controller
    
    autoShow: true,                 // Automatically show the window
    height: 180,
    width: 350,
    layout: {
        type: 'fit'                 // Contents will expand to fit this window
    },
    iconCls: 'fa fa-key fa-lg',     // Icons in the header
    title: 'Login',                 // Title bar text
    closeAction: 'hide',            // Prevent closing this window
    closable: false,                // Cannot close the window
    draggable: false,               // Prevent dragging the window across the screen
    resizable: false,               // Prevent resizing the window
    
    // Form items
    items: [{
        xtype: 'form',              // Form
        reference: 'loginForm',     // Reference to this form
        bodyPadding: 10,
        defaults: {                 // Defaults for fields
            xtype: 'textfield',     // Textfield
            anchor: '100%',         // Field width
            labelWidth: 80,         // Label width
            allowBlank: false,      // Fields are required
            msgTarget: 'side',     // Show error messages icon
            minLength: 3            // Minimum 3 characters
        },
        items: [{
            name: 'username',
            fieldLabel: 'Username',
            maxLength: 25,
            vtype: 'alphanum',       // Alphanumeric characters only
            listeners: {
                specialKey: 'onTextFieldEnterKey'
            }
        }, {
            inputType: 'password',  // Mask the password
            name: 'password',
            fieldLabel: 'Password',
            maxLength: 15,
            vtype: 'complexPassword', // Custom complex validation
            id: 'passwordTxt',
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onTextFieldEnterKey',
                keypress: 'onPasswordFieldKeyPress'
            }
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                xtype: 'tbfill'     // Right-justify the ensuing components
            }, {
                xtype: 'button',
                iconCls: 'fa fa-times fa-lg',   // 'x' icon
                text: 'Cancel',
                listeners: {
                    click: 'onCancelLogin'      // Function defined in view controller
                }
            }, {
                xtype: 'button',
                formBind: true,     // Enabled only if the form has no errors
                iconCls: 'fa fa-sign-in fa-lg', // Sign-in icon
                text: 'Login',
                listeners: {
                    click: 'onSubmitLogin'      // Function defined in view controller
                }
            }]
        }]
    }]
});