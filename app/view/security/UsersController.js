Ext.define('Practicum.view.security.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users',
    requires: [
        'Practicum.Utils'
    ],
    
    showEditWindow: function(record) {
        console.log('record', record);
        var me = this,
            view = me.getView();
            
        me.dialog = view.add({
            xtype: 'user-form',
            viewModel: {
                data: {
                    title: record ? 'Edit: ' + record.get('fullnames') : 'Add User'
                },
                links: {
                    currentUser: record || {
                        type: 'User',
                        create: true
                    }
                }
            }
        });
        me.dialog.show();
    },
    
    onAdd: function(button, e, options) {
        this.showEditWindow(null);
    },
    
    getSelectedUsers : function() {
        var grid = this.lookupReference('usersGrid');
        return grid.getSelection();
    },
    
    onEdit: function(button, e, options) {
        var me = this,
            records = me.getSelectedUsers();
            
        if(records[0]) {
            me.showEditWindow(records[0]);
        }
    },
    
    onDelete: function(button, e, options) {
        var me = this,
            // Form view
            view = me.getView(),
            // Selected users in grid
            records = me.getSelectedUsers(),
            // Users store
            store = me.getStore('users');
        
        // Can only delete if more than 2 users
        if (store.getCount() >= 2 && records.length) {
            // Confirmation message
            Ext.Msg.show({
                title:'Confirm User Deletion',
                msg: 'Are you sure you want to delete the selected users?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function (buttonId) {
                    if (buttonId == 'yes') {
                        store.remove(records);
                        store.sync();
                    }
                }
            });
        } else if (store.getCount() === 1) { //#8
            Ext.Msg.show({
                title:'Cannot Delete Last User',
                msg: 'You cannot delete all the users from the application.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },
    
    onSave: function(button, e, options) {
        var me = this,
            form = me.lookupReference('userForm');
        if (form && form.isValid()) {
            form.submit({
                clientValidation: true,
                url: 'security/user/save.json',
                scope: me,
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            });
        }
    },
    
    onSaveSuccess: function(form, action) {
        var me = this;
        me.onCancel();
        me.refresh();
        Practicum.Utils.showToast('Success! User saved.');  
    },
    
    onSaveFailure: function(form, action) {
        Practicum.Utils.handleFormFailure(action);
    },
    
    onCancel: function(button, e, options){
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },
    
    refresh: function(button, e, options) {
        var me = this,
        store = me.getStore('users');
        store.load();
    },
    
    onFileFieldChange: function(fileField, value, options) {
        var me = this,
            // File object stored in the file field
            file = fileField.fileInputEl.dom.files[0],
            // Reference to image component in the form
            picture = this.lookupReference('userPicture');
        
        // Test whether FileReader API available in browser, and if selected file is an image
        if (typeof FileReader !== 'undefined' && (/image/i).test(file.type)) {
            var reader = new FileReader(); //#4
            reader.onload = function(e) { //#5
                picture.setSrc(e.target.result); //#6
            };
            reader.readAsDataURL(file); //#7
        } else if (!(/image/i).test(file.type)) {
            // Message when it is not an image file
            Ext.Msg.alert('Invalid Image File', 'You can only upload image files!');
            fileField.reset(); // Clear
        }
    }
});