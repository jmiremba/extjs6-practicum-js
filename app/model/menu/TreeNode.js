Ext.define('Practicum.model.menu.TreeNode', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int'}, // TreeNode ID
        { name: 'text' },           // TreeNode text
        { name: 'iconCls' },        // TreeNode icon class
        { name: 'className' },      // Class of view to open
        { name: 'parentId' }        // Parent node ID
    ],
    idProperty: 'id'
});