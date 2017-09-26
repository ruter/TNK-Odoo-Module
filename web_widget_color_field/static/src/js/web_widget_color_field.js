odoo.define('web_widget_color_field', function (require) {
'use strict';

var core = require('web.core');
var formats = require('web.formats');
var pyeval = require('web.pyeval');
var ListView = require('web.ListView');
var Column = ListView.Column;

var list_widget_registry = core.list_widget_registry;

var ColorField = Column.extend({
    _format: function (row_data, options) {
        if (this.options) {
            var field_opt = pyeval.py_eval(this.options).color_field;
            if (field_opt) {
                var field_val = row_data[this.id].value;
                if (this.type === "selection") {
                    var sel = this.selection.filter(function (el, idx, arr) {
                        return el[0] == field_val;
                    });
                    field_val = sel[0][1];
                } else if (this.type === "many2one") {
                    field_val = row_data[this.id][1];
                }

                var cls, code;
                if (field_opt.classes) {
                    cls = field_opt.classes;
                    return _.template(
                        '<span class="<%-cls%>"><%-value%></span>')({
                        cls: cls,
                        value: field_val
                    });
                } else if (field_opt.code) {
                    code = field_opt.code;
                    return _.template(
                        '<span style="color: <%-code%>"><%-value%></span>')({
                        code: code,
                        value: field_val
                    });
                }
            }
        }
        return _.escape(formats.format_value(row_data[this.id].value, this, options.value_if_empty));
    }
});

list_widget_registry.add('field.color_field', ColorField);

});