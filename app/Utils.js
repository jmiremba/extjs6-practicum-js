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
        }
    }
});