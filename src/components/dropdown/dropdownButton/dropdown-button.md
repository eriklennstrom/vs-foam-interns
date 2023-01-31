The dropdown button component offers a user multiple items or actions to choose from which are initially collapsed behind a button.

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.

## Usage

The ``text`` property is the text content that will be rendered inside the dropdown button.

The ``variant`` property decides what variant will be used. Default is `primary`.
Variants available : `primary`, `secondary`, `danger`, `danger-outline`, `ghost`


The ``icon`` property decides what type of icon should be rendered. Default is ``null``

The ``width`` property decides the dropdown containers width. Default is ``fit-content``

The ``align`` property decides if the dropdown container should align to the left (``start``) or right (``end``).
Default is ``end``

The ``disabled`` property is a boolean that decides if the dropdown button is active or not. 

For more info about button component - see ``Button``

> Note - This component is not meant to be used independently but as a child component in the ``FoamDropdown`` component.

> Note - The dropdown component is using the ``popperjs`` positioning engine for the dropdown positioning. Read more at https://popper.js.org/


## Variant

A prop that decides what variant on the button will be used.

```jsx
<!-- good -->
<foam-dropdown-button variant="danger" />
```

```jsx
<!-- bad -->
<foam-dropdown-button variant="danger-variant" />
```

## Text

``text`` is a string property that renders the property as a text inside the dropdown button

```jsx
<!-- good -->
<foam-dropdown-button text="Dropdown Text" />
```

## Icons

The icons property adds an icon to the button.
Icons that are included are -

`warning`, `circle-down`, `user-secret`, `arrow-down`, `arrow-alt-circle-down`

If the icon property does not have the correct spelling and / or an icon that is not included, it will default to the `warning` icon.

```html
<!-- good -->
<foam-dropdown-button variant="danger" text="Warning" icon="warning" />
```

```html
<!-- bad -->
<foam-dropdown-button variant="danger" text="Warning" icon="warning-icon" />
```

> Note: The icons being used in this component are imported from Font Awesome.

## Disabled

The `` disabled `` property is a boolean value that can be used to indicate to the user that you cannt interact with the chip

```jsx
<!-- good -->
<foam-dropdown-button disabled />

```

```jsx
<!-- bad -->
<foam-dropdown-button disabled="true" />
```

## Align

The ``align`` property decides the placement on the dropdown container.

Valid values are ``end`` which is the right side, and ``start`` which is the left side.

The default value is ``end``

```jsx
<!-- good -->
<foam-dropdown-button disabled />

```

```jsx
<!-- bad -->
<foam-dropdown-button disabled="true" />
```


## Width

The ``width`` property decides the width of the dropdown container in pixels.

The default value is ``fit-content``

```jsx
<!-- good -->
<foam-dropdown-button :width="400" />

```

```jsx
<!-- bad -->
<foam-dropdown-button width="400px" />
```