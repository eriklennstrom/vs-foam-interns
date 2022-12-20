Badges highlight metadata of objects, the kind of information that always needs
some context and isn’t useful on its own. For example, they can be used to
indicate an issue’s status, a member’s role, or if a branch is protected.

## Usage

The text property is the text content that will be rendered inside the badge. Default text is 'Badge'.

The variant property decides what variant will be used. Default is `secondary`.

Variants available : `primary`, `secondary`, `danger`, `warning`, `success`

```html
<!-- good -->
<foam-badge variant="success" text="Complete" />
```

```html
<!-- bad -->
<foam-badge variant="error-variant" text="Complete" />
```

Error variant does not exist - will give the default badge.

## Icons
The icons property adds an icon to the badge. 
Icons that are included are  - 

`warning`, `circle-down`, `user-secret`, `arrow-down`, `arrow-alt-circle-down`

If the icon property does not have the correct spelling and / or an icon that is not included, it will default to the `warning` icon.


```html
<!-- good -->
<foam-badge variant="danger" text="Warning" icon="warning" />
```

```html
<!-- bad -->
<foam-badge variant="danger" text="Warning" icon="warning-icon" />
```
> Note: The icons being used in this component are imported from Font Awesome.

## Outline 

To add an outline to the badge, you need to add `outline` to the component as a property.

```html

<foam-badge variant="success" text="Complete" outline />
```