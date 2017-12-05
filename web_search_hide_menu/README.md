![License: AGPL-3](https://img.shields.io/badge/license-AGPL--3-blue.svg)

# Web Search Hide Menu

Hide Search View's menu filters, groupby or favorites.

# Usage

In the search view declaration, put `disable_menu="menu_name"` attribute in the `<search/>` tag:

```xml
...
<field name="arch" type="xml">
    <search string="View name" disable_menu="filters,groupby">
        ...
        <field name="no"/>
        <field name="name"/>
        ...
    </search>
</field>
...
```

# Screenshot

![Add attributes in tag](https://github.com/ruter/TNK-Odoo-Module/blob/10.0/web_search_hide_menu/static/description/screenshot0.png?raw=true)

![Hide add custom filter menu item](https://github.com/ruter/TNK-Odoo-Module/blob/10.0/web_search_hide_menu/static/description/screenshot.png?raw=true)

# Contributors

- Ruter <i@ruterly.com>
