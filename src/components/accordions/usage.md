# Accordions

Accordions display collapsable content. They can be opened and closed by the user to display information.

## Usage

* Import the CSS into your project -> `@import "/node_modules/mb-jubilee/dist/accordions/accordions.css";`.
* Reference `/node_modules/mb-jubilee/src/components/accordions/accordions.html` for HTML structure.

## Customize

Default styles are included but you should override with styles that match the project. Comments have been added to the source css file indicating how to target individual elements.

```
/* Setting active border color. */
.accordion > .accordion-item {
  border-color: #00cc00;
}
```

```
/* Changing close symbol */
.accordion > .accordion-item input[type='checkbox']:checked + label::after {
  content: "x";
}
```
