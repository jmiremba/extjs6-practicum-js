Ext.define('Practicum.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',
    storeId: 'menuStore',
    requires: [
        'Practicum.Utils'
    ],
    model: 'Practicum.model.menu.Accordion',
    proxy: {
        type: 'ajax',
        url: 'menu.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation) {
                Practicum.Utils.showErrorMessage('Error Obtaining Menu Data', response.responseText);
            }
        }
    },
    autoLoad: false
});
