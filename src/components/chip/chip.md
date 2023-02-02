Chips are compact elements that represent an input, attribute, or action. 

Chips allow users to enter information, make selections, filter content, or trigger actions.

## Usage

If the chip is used to emit a function. 

For example filter a list, all you need to do is to add the function to the Chip component

## Input
```jsx
<!-- good -->
<foam-chip variant="input" text="Input Chip" />
```

```jsx
<!-- bad -->
<foam-chip variant="input-variant" text="Input Chip" />
```

## Input States

Input have two states `` default `` and `` outline ``.

For default, no prop need to be passed in.

For outline, an `` outline `` prop needs to be passed to the component.

```jsx
<!-- good -->
<foam-chip variant="input" outline />
```

```jsx
<!-- bad -->
<foam-chip variant="input" state="outline" />
```

## Input Removable
!Disclaimer - the `` removable `` prop does not work in conjunction with the `` selected `` prop.

You can add the ```removable``` prop to an ```input chip``` to render the remove icon.

However, you also need to pass a `` click event `` for the remove function.


```html
<!-- good -->
<foam-chip variant="input" removable @click="removeFunction" />
```

```jsx
<!-- bad -->
<foam-chip variant="input" removable />
```
## Filter
```jsx
<!-- good -->
<foam-chip variant="filter" text="Filter Chip" />
```

```jsx
<!-- bad -->
<foam-chip variant="filter-variant" text="Filter Chip" />
```

## Selected
!Disclaimer - the `` selected `` prop does not work in conjunction with the `` removable `` prop.

The `` selected `` prop indicated to the user that the value in the chip is being active.

Example. Chip with the value ``blue`` is selected - items with the property ``blue`` will then be filtered.

The `` selected `` prop works in both the `` input `` and `` filter `` variants.

If the `` selected `` prop should be toggleable, you also need to pass in a `` click event `` that toggles the `` selected `` prop.


```html
<!-- good -->
<foam-chip variant="filter" selected />
<foam-chip variant="filter" :selected="selectFilter" @click="toggleSelectFilter" />
<foam-chip variant="input" :selected="selectInput" @click="toggleSelectInput"/>

```

```jsx
<!-- bad -->
<foam-chip variant="filter" selected removable />
```

## Icons

The ``icons`` property adds an icon to the badge.
Icons that are included are -

`warning`, `circle-down`, `user-secret`, `arrow-down`, `arrow-alt-circle-down`

If the icon property does not have the correct spelling and / or an icon that is not included, it will default to the `warning` icon.

If the `` selected `` prop is used, and the value is `` true ``, the `` selected `` prop will overwrite the icon.

```jsx
<!-- good -->
<foam-chip icon="warning" />

```

```jsx
<!-- bad -->
<foam-chip icon="warning-icon" />
```

## Disabled

The `` disabled `` property is a boolean value that can be used to indicate to the user that you cannt interact with the chip

```jsx
<!-- good -->
<foam-chip disabled />

```

```jsx
<!-- bad -->
<foam-chip disabled="true" />
```
