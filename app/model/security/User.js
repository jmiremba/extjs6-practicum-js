Ext.define('Practicum.model.security.User', {
    extend: 'Practicum.model.security.Base',
    fields: [
        { name: 'fullnames' },
        { name: 'username' },
        { name: 'email' },
        { name: 'picture' },
        { name: 'groupId' , type: 'int' },
        { name: 'groupName', type:'string', persist: false, convert: function(v, record) {
            var groupId = record.get('groupId');
            var store = Ext.getStore('groupStore');
            var group = store.getById(groupId);
            if (group) { return group.get('name'); }
            return groupId;
        }}
    ]
});