odoo.define('web_form_breadcrumb', function (require) {
"use strict";

var core = require('web.core');
var FormView = require('web.FormView');

var _t = core._t;

FormView.include({
    load_record: function (record) {
        this._super.apply(this, arguments);

        if (this.fields_view.arch.attrs.breadcrumb) {
            var breadcrumb = this.fields_view.arch.attrs.breadcrumb;
            var target_field = this.fields[breadcrumb];
            var title = record.id ? record.display_name : _t("New");
            if (target_field) {
                var field_type = target_field.field.type;
                switch (field_type) {
                    case 'many2one':
                        title = record[breadcrumb][1];
                        break;
                    case 'one2many':
                    case 'many2many':
                        title = target_field.string || target_field.name;
                        break;
                    case 'selection':
                        var sel = target_field.field.selection.filter(function (el, idx, arr) {
                            return el[0] == record[breadcrumb];
                        });
                        title = sel[0][1];
                        break;
                    default:
                        title = record[breadcrumb];
                }
            } else {
                title = breadcrumb;
            }
            this.set({ 'title' : title })
        }
    }
});

});