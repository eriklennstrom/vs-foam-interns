
Icons are a medium to highlight important information to the user. 

## Usage

The icon property adds the icon type.
Icons that are included are -

`warning`, `circle-down`, `user-secret`, `arrow-down`, `arrow-alt-circle-down`

If the icon property does not have the correct spelling and / or an icon that is not included, it will default to the `warning` icon.

```html
<!-- good -->
<foam-icon icon="circle-down" />
```

```html
<!-- bad -->
<foam-icon icon="warning-icon" />
```

> Note: The icons being used in this component are imported from Font Awesome.

## Size

The size property is a number value to decide the font size of the icon in pixels.

If a size property is not included, the icon size will default to 100% of the parents font size.

Example : 

```html
<h2> Headline
    <foam-icon icon="circle-down" />
</h2>
```

The font size of the icon will follow the font size of the `<h2>` element.

```html
<!-- good -->
<foam-icon icon="circle-down" size="12" />
<foam-icon icon="circle-down" />
```

```html
<!-- bad -->
<foam-icon icon="circle-down" size="12px" />
```

## Variant

The variant property decides what variant will be used. Default is `primary`.

Variants that are available : `primary`, `secondary`, `danger`, `success`

```html
<!-- good -->
<foam-icon icon="circle-down" variant="success" />
```

```html
<!-- bad -->
<foam-icon icon="circle-down" variant="green" />
```

The variant property `green`does not exist, and will default to `secondary`
