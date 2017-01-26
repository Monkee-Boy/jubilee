# Tabs

Tabs are used to display blocks of content. These tabs assume an accordion-style layout in small viewports.

## Usage

* Import the CSS into your project -> `@import "/bower_components/jubilee/dist/tabs/tabs.css";`.
* Add the JS to your build process -> `/bower_components/jubilee/dist/tabs/tabs.minified.js`.
* Reference `/bower_components/jubilee/src/components/tabs/tabs.html` for HTML structure.

The tab css is contained in a PostCSS mixin called tabs. The mixin has an optional min-width breakpoint argument. All screen sizes inclusive of the supplied argument will assume tab styling, while all screen sizes smaller than the supplied breakpoint will assume accordion styling.

If the breakpoint argument is missing from the mixin declaration, the tabs will assume an accordion style at all screen widths.

### Requirements

* babel-polyfill is required for `tabs.js` to work in IE11. This should already be part of your build process but if not you can run `npm install --save-dev babel-polyfill` and add `./node_modules/babel-polyfill/dist/polyfill.js` to gulp. This must be included before the rest of your JavaScript.

## Example

```
@mixin tabs 1000px;
```

## Customize

Default styles are included but you should override with styles that match the project. Comments have been added to the source css file indicating how to target individual elements.

```
/* Setting active border color. */
#tabs > li.active {
  border-color: #00cc00;
}
```
