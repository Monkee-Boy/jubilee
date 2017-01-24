# Tabs

Tabs are used to display blocks of content. These tabs assume an accordion-style layout in viewports smaller than 981px.

## Usage

`@import "/bower_components/jubilee/dist/tabs/tabs.css";`
`@import "/bower_components/jubilee/dist/tabs/tabs.js";`

Use "/bower_components/jubilee/src/components/tabs/tabs.html" for the tab structure.

## Customize

Default styles are included but you should override with styles that match the project. To change the default text and background color of the tooltip use:

```
[data-tooltip]::before, [data-tooltip]::after {
  font-size: 13px;
  text-transform: uppercase;
  color: #000;
  background: #fff;
}

```

To customize the text and background color of each type use (replacing `success` with a type below):

```
[data-tooltip-type="success"]::before, [data-tooltip-type="success"]::after {
  color: #000;
  background: #acca32;
}
```

## Example

`<a href="#" data-tooltip="Lorem Ipsum">Hover for tooltip.</a>`

## Options

The following data attributes can be used to customize the tooltip.

### Visible

When you want the tooltip to show on load or trigger it using JavaScript you can add/toggle `data-tooltip-visible`. This will work with any `type` or `size` option below however currently it only works with `position` top.

`<a href="#" data-tooltip="Lorem Ipsum" data-tooltip-visible>Tooltip displays on load.</a>`

### Type

* `null` (default)
* `alert`
* `warning`
* `success`
* `info`

`<a href="#" data-tooltip="Lorem Ipsum" data-tooltip-type="alert">Hover for alert tooltip.</a>`

### Position

* `top` (default)
* `right`
* `bottom`
* `left`

`<a href="#" data-tooltip="Lorem Ipsum" data-tooltip-position="right">Hover for right tooltip.</a>`

### Size

* `small` (default)
* `medium`
* `large`
* `xlarge`
* `fit`

`<a href="#" data-tooltip="Lorem Ipsum" data-tooltip-size="medium">Hover for medium tooltip.</a>`
