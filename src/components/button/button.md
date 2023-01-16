Buttons are elements that indicate to the user that it is pressable, and will perform a function relevant to position, color and text within the button.
When the user hovers the button it reinforces that it is a button and understands what it does.
To indicate the diffrent states of a button color, hoverability and visibility is key to showing the user what the button will preform.

## Usage

The text property is the text content that will be rendered inside the button. Default text is 'Button'.

The variant property decides what variant will be used. Default is `primary`.

Variants available : `primary`, `secondary`, `danger`, `danger-outline`, `ghost`

```html
<!-- good -->
<foam-button variant="primary" text="Complete" />
```

```html
<!-- bad -->
<foam-button variant="error-variant" text="Complete" />
```

Error variant does not exist - will give the default button.


## Dropdown

Dropdown is a boolean attribute that allows the button to act like a dropdown menu and adds an arrow indicating if dropdown is active or not.

This is handled by adding dropdown to the html


```html
<!-- good -->
<foam-button dropdown text="Button" />
```

```html
<!-- bad -->
<foam-button "dropdown" text="Button" />
```

##Disabled

Disabled attribute is a boolean value that can be used to indicate to the user that you cannot interact with the button.

This is handled by adding disabled to the html


```html
<!-- good -->
<foam-button disabled text="Button" />
```

```html
<!-- bad -->
<foam-button "disabled" text="Button" />
```


## Icons

The icons property adds an icon to the button.
Icons that are included are -

`warning`, `circle-down`, `user-secret`, `arrow-down`, `arrow-alt-circle-down`

If the icon property does not have the correct spelling and / or an icon that is not included, it will default to the `warning` icon.

```html
<!-- good -->
<foam-button variant="danger" text="Warning" icon="warning" />
```

```html
<!-- bad -->
<foam-button variant="danger" text="Warning" icon="warning-icon" />
```

> Note: The icons being used in this component are imported from Font Awesome.
