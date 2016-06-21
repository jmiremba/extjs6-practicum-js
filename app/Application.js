/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Practicum.Application', {
    extend: 'Ext.app.Application',
    
    // Namespace of the application
    name: 'Practicum',
    
    requires: [
        'Practicum.view.language.Translations',
        'Practicum.overrides.tree.ColumnOverride',
        'Ext.window.Toast'
    ],
    
    enableQuickTips: true,
    glyphFontFamily: 'FontAwesome',
    
    // Views
    views: [
        'login.Login'
    ],
    
    controllers: [
        'Menu'
    ],
    
    init: function () {
        // Reference to the application
        var _app = this;
        
        var url = Ext.util.Format.format("classic/resources/locales/locale-{0}.js", LANG);
        Ext.Loader.loadScript({
                url: url,
                onLoad: this.onSuccess,
                onError: this.onFailure,
                scope: this
            }
        );
        
        // Show a splash screen while the application loads
        _app.splashscreen = Ext.getBody().mask (
            'Loading Application ...',  // Message to display
            'splashscreen'          // Class of splash screen
        );
        
        // See all.sass for the customized splash screen styling
        _app.splashscreen.addCls('splashscreen');
        
        // Insert logo DIV just above the "Loading..." message
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },
    
    launch: function () {
        var _app = this;
        
        // Fade out the splash screen
        var task = new Ext.util.DelayedTask(function() {
            //Fade out the body mask
            _app.splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            
            //Fade out the icon and message
            _app.splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: { // #1
                    afteranimate: function(el, startTime, eOpts ){//#2
                        Ext.widget('login-window');
                    }
                }
            });
        });
        task.delay(2000);
    }
});
