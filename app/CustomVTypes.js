Ext.apply(Ext.form.field.VTypes, {
    /**
     * Custom password validation.
     */
    complexPassword: function(val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
    },
    complexPasswordText: 'Password must contain one digit, one letter lowercase, one letter uppercase,'+
        ' one special symbol @#$% and between 6 and 20 characters.'
});