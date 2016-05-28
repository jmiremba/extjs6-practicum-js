Ext.define('Practicum.view.main.Footer', {
    extend: 'Ext.container.Container',
    xtype: 'main-footer',
    
    height: 30,
    cls: 'app-footer',
    layout: 'center',
    items: [{
        xtype: 'component',
        width: 350,
        componentCls: 'app-footer-content',
        bind: {
            html: '{footerHtml}'
        }
    }]
});
