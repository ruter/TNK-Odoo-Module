![License: AGPL-3](https://img.shields.io/badge/license-AGPL--3-blue.svg)

# Disable add custom filter in search view

Hide menu item of add custom filter to disable user add custom filter.

# Usage

In the search view declaration, put `enable_custom_filters="false"` attribute in the `<search/>` tag:

```xml
...
<field name="arch" type="xml">
    <search string="View name">
        ...
        <field name="no"/>
        <field name="name"/>
        ...
    </search>
</field>
...
```

# Screenshot

![Add attributes in tag](https://github.com/ruter/TNK-Odoo-Module/blob/10.0/web_search_disable_add_custom_filter/static/description/screenshot0.png?raw=true)

![Hide add custom filter menu item](https://github.com/ruter/TNK-Odoo-Module/blob/10.0/web_search_disable_add_custom_filter/static/description/screenshot.png?raw=true)

# Contributors

- Ruter <i@ruterly.com>
