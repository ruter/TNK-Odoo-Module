odoo.define('web_form_breadcrumb', function (require) {
"use strict";

var FormView = require('web.FormView');

FormView.include({
    load_record: function (record) {
        if (this.fields_view.arch.attrs.breadcrumb) {
            var breadcrumb = this.fields_view.arch.attrs.breadcrumb;
            var target_field = this.fields[breadcrumb];
            if (target_field) {
                var field_type = target_field.field.type;
                switch (field_type) {
                    case 'many2one':
                        this.dataset.context["__title"] = record[breadcrumb][1];
                        break;
                    case 'one2many':
                    case 'many2many':
                        this.dataset.context["__title"] = target_field.string || target_field.name;
                        break;
                    case 'selection':
                        var sel = target_field.field.selection.filter(function (el, idx, arr) {
                            return el[0] == record[breadcrumb];
                        });
                        this.dataset.context["__title"] = sel[0][1];
                        break;
                    default:
                        this.dataset.context["__title"] = record[breadcrumb];
                }
            } else {
                this.dataset.context["__title"] = breadcrumb;
            }
        }
        this._super.apply(this, arguments);
    }
});

});