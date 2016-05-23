/**
 * View controller for the Login view.
 */
Ext.define('Practicum.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    
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
        _form.submit ({
            clientValidation: true,     // Validate client data one more time
            url: 'security/login.jsp',  // Login URL
            scope: me,                  // Scope is this view controller
            success: 'onLoginSuccess',  // When login is successful
            failure: 'onLoginFailure'   // When login  fails
        });
    },
    
    onLoginSuccess: function(form, action) {
        this.getView().close();
        Ext.create('Practicum.view.main.Main');
    },
    
    onLoginFailure: function(form, action) {
        var result = Ext.JSON.decode(action.response.responseText, true);
        if (!result) {
            result = { success: false, message: 'No response received from server!' };
        }
        
        // Different kinds of failure
        switch (action.failureType) {
        case Ext.form.action.Action.CLIENT_INVALID:
            Ext.Msg.show({
                title: 'Invalid Client Info',
                msg: 'Client information submitted is invalid',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
            break;
        case Ext.form.action.Action.CONNECT_FAILURE:
            Ext.Msg.show({
                title: 'Connection Failure',
                msg: 'There was a connection failure',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
            break;
        case Ext.form.action.Action.SERVER_INVALID: //#7
            Ext.Msg.show({
                title: 'Authentication Error',
                msg: result.message,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        }
    }
});