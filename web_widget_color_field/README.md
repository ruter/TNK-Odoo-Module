![License: AGPL-3](https://img.shields.io/badge/license-AGPL--3-blue.svg)

# Colorful column in list views

This module can make the columns in list views colorful.

You can specify any exist classes or hex color code as widget options to the field.

# Usage

In the list view declaration, put `widget="color_field"` and `options="{'color_field': {'classes': 'className'}}"` or `options="{'color_field': {'code': 'hex code or color name'}}"` attribute in the field tag:

```xml
...
<field name="arch" type="xml">
    <tree string="View name">
        ...
        <field name="name" widget="color_field" options="{'color_field': {'classes': 'text-danger'}}"/>
        <field name="hexcodefield" widget="color_field" options="{'color_field': {'code': '#3c3c3c'}}"/>
        <field name="colornamefield" widget="color_field" options="{'color_field': {'code': 'red'}}"/>
        ...
    </tree>
</field>
...
```

By default, you can use the following classes, these are bootstrap's helper-classes:

- `text-muted`
- `text-primary`
- `text-success`
- `text-info`
- `text-warning`
- `text-danger`

# Screenshot

![Add attributes in field tag](https://github.com/ruter/TNK-Odoo-Module/blob/10.0/web_widget_color_field/static/description/screenshot0.png?raw=true)

![Colorful columns in list view](https://github.com/ruter/TNK-Odoo-Module/blob/10.0/web_widget_color_field/static/description/screenshot.png?raw=true)

# Contributors

- Ruter <i@ruterly.com>
