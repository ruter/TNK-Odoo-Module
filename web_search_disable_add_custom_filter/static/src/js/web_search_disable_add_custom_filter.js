odoo.define('web_search_disable_add_custom_filter', function (require) {
'use strict';

var FilterMenu = require('web.FilterMenu');

FilterMenu.include({
    start: function () {
        this._super();
        if (!this.searchview.is_action_enabled('enable_custom_filter')) {
            this.$('.divider:last').hide();
            this.$add_filter.hide();
        }
    }
});

});