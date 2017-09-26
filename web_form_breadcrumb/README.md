![License: AGPL-3](https://img.shields.io/badge/license-AGPL--3-blue.svg)

# Breadcrumb in form views

This module can be used as model's `_rec_name` in form views.

You can specify any field or string as the form view's breadcrumb.

# Usage

In the form view declaration, put `breadcrumb="fieldName or string"` attribute in the form tag:

```xml
...
<field name="arch" type="xml">
    <form string="View name" breadcrumb="myfieldname">
        ...
        <field name="name"/>
        <field name="myfieldname"/>
        ...
    </form>
</field>
...
```

# Screenshot

![Add attribute in form tag](https://github.com/ruter/TNK-Odoo-Module/blob/10.0/web_form_breadcrumb/static/description/screenshot0.png?raw=true)

![Display the specified field's value](https://github.com/ruter/TNK-Odoo-Module/blob/10.0/web_form_breadcrumb/static/description/screenshot.png?raw=true)

# Contributors

- Ruter <i@ruterly.com>
