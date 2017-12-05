odoo.define('web_search_hide_menu', function (require) {
'use strict';

var SearchView = require('web.SearchView');

SearchView.include({
    willStart: function () {
        var self = this;
        var disable_menu = this.fields_view.arch.attrs.disable_menu;
        disable_menu = disable_menu ? disable_menu.split(',') : [];
        _.each(disable_menu, function (menu) {
            self.options['disable_' + menu] = true;
        });
        return $.when(this._super());
    }
});

});