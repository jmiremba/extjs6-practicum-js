/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Practicum.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    requires: [
        'Practicum.Utils'
    ],
    
    doLogout: function() {
        var me = this;
        
        // Logout
        Ext.Ajax.request ({
            url: 'logout.json',         // Logout URL
            scope: me,                  // Scope is this view controller
            success: 'onLogoutSuccess', // When logout is successful
            failure: 'onLogoutFailure'  // When logout fails
        });
    },
    
    onLogoutSuccess: function(response, options) {
        // Response
        var result = Practicum.Utils.decodeJSON(response.responseText);
        // Check the response
        if (result.success) {
            this.getView().destroy();
            window.location.reload();
        } else {
            Practicum.Utils.showErrorMessage('Logout Failure', result.message);
        }
    },
    
    onLogoutFailure: function(response, options) {
        // Response
        var result = Practicum.Utils.decodeJSON(response.responseText);
        // Failure
        Practicum.Utils.showErrorMessage('Logout Failure', result.message);
    }
});
