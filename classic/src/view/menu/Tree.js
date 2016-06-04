Ext.define('Practicum.view.menu.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'menutree',

    requires: [
       'Practicum.overrides.tree.ColumnOverride'
    ],

    border: 0,
    autoScroll: true,
    rootVisible: false
});