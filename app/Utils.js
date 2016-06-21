Ext.define('Practicum.Utils', {
    // Static initialization
    statics : {
        decodeJSON : function (responseText) {
            var result = Ext.JSON.decode(responseText, true);
            if (!result) {
                result = { success: false, message: 'No response received from server!' };
            }
            return result;
        },
        
        showErrorMessage: function (title, message) {
            Ext.Msg.show({
                title: title,
                msg: message,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        },
        
        showToast: function(text) {
            Ext.toast({
                html: text,
                closable: false,
                align: 't',
                slideInDuration: 400,
                minWidth: 400
            });
        },
        
        handleFormFailure: function(action){
            var me = this,
                result = Practicum.Utils.decodeJSON(action.response.responseText);
            switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMessage('Form Failure', 'Form fields may not be submitted with invalid values');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMessage('Form Failure', action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    me.showErrorMessage('Form Failure', result.message);
            }
        },
        
        required: '<span style="color:red;font-weight:bold" dataqtip="Required"> *</span>'
    }
});