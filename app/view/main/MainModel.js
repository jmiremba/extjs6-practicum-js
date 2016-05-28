Ext.define('Practicum.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        // Footer text
        footerHtml: '&copy;2016 Strive Consulting, LLC. All rights reserved.',
        
        // Header
        headerTitle: '<div class="app-header-title">The Practicum</div>',
        headerIcon: '<div class="app-header-logo"></div>'
    }
});
