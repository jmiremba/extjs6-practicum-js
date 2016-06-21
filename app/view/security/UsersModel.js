Ext.define('Practicum.view.security.UsersModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.users',
    
    stores: {
        groups: {
            storeId: 'groupStore',
            model: 'Practicum.model.security.Group',
            autoLoad: true
        },
        users: {
            model: 'Practicum.model.security.User',
            autoLoad: true
        }
    },
    data: {
        // Title
        contentTitle: 'Users'
    }
});
