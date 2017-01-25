# Tabs

Tabs are used to display blocks of content. These tabs assume an accordion-style layout in small viewports.

## Usage

`@import "/bower_components/jubilee/dist/tabs/tabs.css";`

`@import "/bower_components/jubilee/dist/tabs/tabs.js";`

Use "/bower_components/jubilee/src/components/tabs/tabs.html" for the tab structure.

The tab css is contained in a postcss mixin called tabs. The mixin has an optional min-width breakpoint argument. All screen sizes inclusive of the supplied argument will assume tab styling, while all screen sizes smaller than the supplied breakpoint will assume accordion styling.

If the breakpoint argument is missing from the mixin declaration, the tabs will assume an accordion style at all screen widths.

```
body {
  @mixin tabs 1000px;
}

```

## Customize

Default styles are included but you should override with styles that match the project.

Comments have been added to the source css file indicating how to target individual elements.
