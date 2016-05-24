/**
 * View controller for the Login view.
 */
Ext.define('Practicum.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    
    requires: [
        'Practicum.view.login.CapsLockTooltip',
        'Practicum.Utils'
    ],
    
    /**
     * Cancel the login.
     */
    onCancelLogin: function(button, event, options) {
        // Form
        var _form = this.lookupReference('loginForm');
        // Reset the form
        _form.reset();
    },
    
    /**
     * Submit the info to login.
     */
    onSubmitLogin: function(button, event, options) {
        var me = this;
        
        // Check if form is valid and log in
        if (me.lookupReference('loginForm').isValid()) {
            me.doLogin();
        }
    },
    
    doLogin: function() {
        var me = this;
        var _form = me.lookupReference('loginForm'); // Form
        
        // Submit the form
        me.getView().mask('Authenticating...');
        _form.submit ({
            clientValidation: true,     // Validate client data one more time
            url: 'login.json',          // Login URL
            scope: me,                  // Scope is this view controller
            success: 'onLoginSuccess',  // When login is successful
            failure: 'onLoginFailure'   // When login  fails
        });
    },
    
    onLoginSuccess: function(form, action) {
        // Unmask the "Authenticating ..." message
        this.getView().unmask();
        
        // Show main view
        this.getView().close();
        Ext.create('Practicum.view.main.Main');
    },
    
    onLoginFailure: function(form, action) {
        // Unmask the "Authenticating ..." message
        this.getView().unmask();
        
        // Response
        var result = Practicum.Utils.decodeJSON(action.response.responseText);
        
        // Different kinds of failure
        switch (action.failureType) {
        case Ext.form.action.Action.CLIENT_INVALID:
            Practicum.Utils.showErrorMessage('Invalid Client Info', 'Client information submitted is invalid');
            break;
        case Ext.form.action.Action.CONNECT_FAILURE:
            Practicum.Utils.showErrorMessage('Connection Failure', 'There was a connection failure');
            break;
        case Ext.form.action.Action.SERVER_INVALID:
            Practicum.Utils.showErrorMessage('Authentication Error', result.message);
            break;
        }
    },
    
    onTextFieldEnterKey: function(field, event, options) {
        if (event.getKey() === event.ENTER) {
            this.doLogin();
        }
    },
    
    onPasswordFieldKeyPress: function(field, e, options) {
        var charCode = e.getCharCode(),
        me = this;
        if((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)) {
            if(me.capslockTooltip === undefined) {
                me.capslockTooltip = Ext.widget('capslocktooltip');
            }
            me.capslockTooltip.show();
        } else {
            if(me.capslockTooltip !== undefined) {
                me.capslockTooltip.hide();
            }
        }
    }
});