Ext.define('Practicum.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    requires: [
        'Practicum.model.menu.TreeNode'
    ],
    fields: [
        { name: 'id', type: 'int'}, // TreeNode ID
        { name: 'text' },           // TreeNode text
        { name: 'iconCls' }         // TreeNode icon class
    ],
    idProperty: 'id',
    hasMany: {
        model: 'Practicum.model.menu.TreeNode',
        foreignKey: 'parentId',
        name: 'items'
    }
});