Ext.define('Practicum.model.security.Base', {
    extend: 'Ext.data.Model',
    requires: [
        'Practicum.Utils'
    ],
    fields: [
        { name: 'id', type: 'int'}
    ],
    idProperty: 'id',
    schema: {
        namespace: 'Practicum.model.security',
        urlPrefix: 'security',
        proxy: {
            type: 'ajax',
            api :{
                read : '{prefix}/{entityName:lowercase}/list.json',
                create: '{prefix}/{entityName:lowercase}/create.json',
                update: '{prefix}/{entityName:lowercase}/update.json',
                destroy: '{prefix}/{entityName:lowercase}/delete.json'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            listeners: {
                exception: function(proxy, response, operation) {
                    Practicum.Utils.showErrorMessage('Data Sync Error', response.responseText);
                }
            }
        }
    }
});