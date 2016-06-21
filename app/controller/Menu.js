Ext.define('Practicum.controller.Menu', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Practicum.store.Menu'
    ],
    
    init: function(application) {
        this.control({
            "menutree": {
                itemclick: this.onTreePanelItemClick
            },
            "main-menu": {
                render: this.renderDynamicMenu
            }
        });
    },
    
    renderDynamicMenu: function(view, options) {
        var dynamicMenus = [];  // Will hold menus by groupings
        
        // Mask the menu area while loading
        view.body.mask('Loading Menus...');
        
        // Menu store
        var menuStore = Ext.getStore('menuStore');
        menuStore.loadRawData(
            [{"id":1,"text":"home","iconCls":"fa fa-home fa-lg fa-icon-triton","items":[{"id":2,"text":"dashboard","iconCls":"xf0e4","className":"content-dashboard","parentId":1,"leaf":true}]},{"id":3,"text":"menu1","iconCls":"fa fa-group fa-lg fa-icon-triton","items":[{"id":4,"text":"menu11","iconCls":"xf0c0","className":"content-groups-permissions","parentId":3,"leaf":true},{"id":5,"text":"menu12","iconCls":"xf007","className":"content-users","parentId":3,"leaf":true}]},{"id":6,"text":"staticData","iconCls":"fa fa-database fa-lg fa-icon-triton","items":[{"id":7,"text":"actors","iconCls":"xf005","className":"content-actors","parentId":6,"leaf":true},{"id":8,"text":"categories","iconCls":"xf013","className":"content-categories","parentId":6,"leaf":true},{"id":9,"text":"languages","iconCls":"xf1ab","className":"content-languages","parentId":6,"leaf":true},{"id":10,"text":"cities","iconCls":"xf018","className":"content-cities","parentId":6,"leaf":true},{"id":11,"text":"countries","iconCls":"xf0ac","className":"content-countries","parentId":6,"leaf":true}]},{"id":12,"text":"cms","iconCls":"fa fa-film fa-lg fa-icon-triton","items":[{"id":13,"text":"films","iconCls":"xf1c8","className":"content-films","parentId":12,"leaf":true}]},{"id":14,"text":"reports","iconCls":"fa fa-line-chart fa-lg fa-icon-triton","items":[{"id":15,"text":"salesfilmcategory","iconCls":"xf200","className":"content-report-sales","parentId":14,"leaf":true}]}]
            );
        Ext.each(menuStore.getRange(), function(root) {
            var menu = Ext.create('Practicum.view.menu.Tree', {
                title: Practicum.view.language.Translations[LANG][root.get('text')],
                iconCls: root.get('iconCls')
            });
            var treeNodeStore = root.items(),
                nodes = [],
                item;
            for (var i=0; i<treeNodeStore.getCount(); i++) {
                item = treeNodeStore.getAt(i);
                nodes.push({
                    text: Practicum.view.language.Translations[LANG][item.get('text')],
                    leaf: true,
                    glyph: item.get('iconCls'),
                    id: item.get('id'),
                    className: item.get('className')
                });
            }
            menu.getRootNode().appendChild(nodes);
            dynamicMenus.push(menu);
        });
        view.add(dynamicMenus);
        view.body.unmask();
        
        //menuStore.load(function(records, op, success) {
        //    Ext.each(records, function(root) {
        //        var menu = Ext.create('Practicum.view.menu.Tree', {
        //            title: Practicum.view.language.Translations[LANG][root.get('text')],
        //            iconCls: root.get('iconCls')
        //        });
        //        var treeNodeStore = root.items(),
        //            nodes = [],
        //            item;
        //        for (var i=0; i<treeNodeStore.getCount(); i++) {
        //            item = treeNodeStore.getAt(i);
        //            nodes.push({
        //                text: Practicum.view.language.Translations[LANG][item.get('text')],
        //                leaf: true,
        //                glyph: item.get('iconCls'),
        //                id: item.get('id'),
        //                className: item.get('className')
        //            });
        //        }
        //        menu.getRootNode().appendChild(nodes);
        //        dynamicMenus.push(menu);
        //    });
        //    view.add(dynamicMenus);
        //    view.body.unmask();
        //});
    },
    
    onTreePanelItemClick: function(view, record, item, index, event, options) {
        // Content panel
        var contentPanel = Ext.getCmp('_appMainContentPanel');
        
        // Remove all items from content panel
        contentPanel.removeAll();
        
        // Load a new panel based on selected XType
        contentPanel.add({
            xtype: record.get('className')
        });
    }
});
