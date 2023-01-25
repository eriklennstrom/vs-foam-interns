## Usage 

The dropdown item component is meant to be used for clickable entries inside a dropdown component.

The ``type`` property decides the type for the dropdown item. Valid values are ``checkbox`` ``container`` and ``color``.

The ``text`` property is the text content that will be rendered inside the dropdown filter component.

The ``disabled`` property is a boolean that decides if the dropdown item is active or not. 

The ``selected`` property is a boolean that decides if the dropdown item is selected or not. 

The ``color`` property is a string that decides the url link. 
> Note - Only usable with type value ``color``. Default is ``red``

The ``dropdown filter`` component should be used with a selected and click-event passed to the component for it to work properly

## Type

The ``type`` property decides what type of filter wil be used.

The ``checkbox`` value will be rendered as checkbox.

The ``color`` value will be rendered as <a></a>. 
> Note - used together with the ``color`` property to add the color to the container.

The ``container`` value will be rendered as smaller container lined ``3`` per row.

> Note - recommended to be used with shorter ``text`` values.


If the ``selected`` property is true, the checkbox will be a checkmark.

```jsx
<!-- good -->
<foam-dropdown-filter type="checkbox" text="$100 - $1000" @click="handleCheckbox" :selected="selectValue" />
<foam-dropdown-filter type="color" text="Blue" color="blue" @click="handleColor" :selected="selectValue" />
```

## Text

``text`` is a string property that renders the property as a text inside the dropdown button

```jsx
<!-- good -->
<foam-dropdown-filter text="Dropdown Text" />
```

## Color 

The ``color`` property is a string that is being used as a CSS value to add the color to the type ``color`` dropdown filter

All valid CSS color code are valid as a property value - words, hex, rgb(a), hsl, hsv

> Note - Only usable with type value ``color``. Default is ``red``

```html
<!-- good -->
<foam-dropdown-filter type="color" color="rgb(161, 43, 118)" />
<foam-dropdown-filter type="color" color="#32a852" />
<foam-dropdown-filter type="color" color="hotpink" />

```html

```h
<!-- bad -->
<foam-dropdown-filter type="checkbox" color="red" />
<foam-dropdown-filter type="color" color="161, 42, 118" />
```


## Selected

The `` selected `` property indicated to the user that the value in the chip is being active.

Example. A dropdown filter component with the value ``blue`` is selected - items with the property ``blue`` will then be filtered.

If the `` selected `` property should be toggleable, you also need to pass in a `` click event `` that toggles the `` selected `` prop.

> Note - The ``selected`` property can only be used with the type property ``button ``


```html
<!-- good -->
<foam-dropdown-filter text="Selected Item" selected />
<foam-dropdown-filter text="Selected Item" :selected="selectFilter" @click="toggleSelectFilter" />
<foam-dropdown-filter text="Selected Item" :selected="selectInput" @click="toggleSelectInput"/>

```

```jsx
<!-- bad -->
<foam-dropdown type="link" selected />
```


## Disabled

The `` disabled `` property is a boolean value that can be used to indicate to the user that you cannt interact with the chip
Best usage is to pass a boolean variable together with a ``click event`` that updated the passed ``disabled`` variable.

```jsx
<!-- good -->
<foam-dropdown-filter disabled />
<foam-dropdown-filter :disabled="isDisabled" @click="handleAPICall" />

```

```jsx
<!-- bad -->
<foam-dropdown-filter disabled="true" />
```