Ext.define('Practicum.view.security.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'users-grid',
    reference: 'usersGrid',
    bind : '{users}',
    columns: [{
        width: 150,
        dataIndex: 'username',
        text: 'Username'
    }, {
        width: 200,
        dataIndex: 'fullnames',
        flex: 1,
        text: 'Names'
    }, {
        width: 250,
        dataIndex: 'email',
        text: 'Email'
    }, {
        width: 150,
        dataIndex: 'groupName',
        text: 'Group'
    }]
});