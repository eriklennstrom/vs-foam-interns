## Usage 

The dropdown item component is meant to be used for clickable entries inside a dropdown component.

The ``type`` property decides the type for the dropdown item. Valid values are ``button`` ``link`` and ``route``.

The ``text`` property is the text content that will be rendered inside the dropdown item.

The ``secondaryText`` property is the text content that will be rendered below the ``text`` property.
> Note - Only usable if the ``text`` property has a value.

The ``icon`` property decides what type of icon should be rendered. Default is ``null``.

The ``disabled`` property is a boolean that decides if the dropdown item is active or not. 

The ``selected`` property is a boolean that decides if the dropdown item is selected or not. 

The ``to`` property is a string that decides the url link. 
> Note - Only usable with type values ``link`` and ``route`` 

The ``subdropdown``propertyp is a boolean that can be used with type ``button`` to create a secondary dropdown inside the dropdown item.

## Type

The ``type`` property decides what type of html-element will be rendered in the DOM.

The ``button`` value will be rendered as <button></button>. 
If the ``type`` property value is button, you can also add a click event to the dropdown-item.

The ``link`` value will be rendered as <a></a>. 
> Note - used together with the ``to`` property to add a ``href`` url-link.

The ``route`` value will be rendered as <router-link></router-link>. 
> Note - used together with the ``to`` property to add a ``to`` endpoint url.

## Text

``text`` is a string property that renders the property as a text inside the dropdown button

```jsx
<!-- good -->
<foam-dropdown-item text="Dropdown Text" />
```

## Secondary text

The ``secondaryText`` property adds text below the main text in a smaller font.

```jsx
<!-- good -->
<foam-dropdown-item text="Primary Text" secondaryText="Secondary Text" />

```

```jsx
<!-- bad -->
<foam-dropdown-item secondaryText="Secondary Text" />
```

## To 

The ``to`` property is a string that is being used as a url string when used together with the type property value ``link`` or ``route``.
For the type value ``link`` the ``to`` property will be a ``href`` attribute, and the value as the url string

For the type value ``route`` the ``to`` property will be a ``to`` attribute for ``vue-router``, and the value as the endpoint string

```jsx
<!-- good -->
<foam-dropdown-item type="link" to="https://www.google.com" />
<foam-dropdown-item type="route" to="/account" />

```

```jsx
<!-- bad -->
<foam-dropdown-item type="route" to="/account" />
<foam-dropdown-item type="route" to="https://www.google.com" />
```


## Selected

The `` selected `` property indicated to the user that the value in the chip is being active.

Example. A dropdown item with the value ``blue`` is selected - items with the property ``blue`` will then be filtered.

If the `` selected `` property should be toggleable, you also need to pass in a `` click event `` that toggles the `` selected `` prop.

> Note - The ``selected`` property can only be used with the type property ``button ``


```html
<!-- good -->
<foam-dropdown-item text="Selected Item" selected />
<foam-dropdown-item text="Selected Item" :selected="selectFilter" @click="toggleSelectFilter" />
<foam-dropdown-item text="Selected Item" :selected="selectInput" @click="toggleSelectInput"/>

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
<foam-dropdown-item disabled />
<foam-dropdown-item :disabled="isDisabled" @click="handleAPICall" />

```

```jsx
<!-- bad -->
<foam-dropdown-item disabled="true" />
```


## Icons

The icons property adds an icon to the dropdown item.
Icons that are included are -

`warning`, `circle-down`, `user-secret`, `arrow-down`, `arrow-alt-circle-down`

If the icon property does not have the correct spelling and / or an icon that is not included, it will default to the `warning` icon.

```html
<!-- good -->
<foam-dropdown-item text="Warning" icon="warning" />
```

```html
<!-- bad -->
<foam-dropdown-item text="Warning" icon="warning-icon" />
```

> Note: The icons being used in this component are imported from Font Awesome.

## Subdropdown

The ``subdropdown`` property marks a dropdown item with the type ``button`` to be able to include a dropdown.

The content that should be included in the subdropdown is in a ``<slot>`` element and should be used in the same way as dropdown-button.

> Note - ``subdropdown`` only works with type ``button``
>> Note - While the ``subdropdown`` property is added and ``true``, emits are disabled.

```html
<!-- good -->
<foam-dropdown-button>
    <foam-dropdown-item text="List of links" subdropdown>
        <foam-dropdown-item type="link" text="link 1" />
        <foam-dropdown-item type="link" text="link 2" />
        <foam-dropdown-item type="link" text="link 3" />
    </foam-dropdown-item>
</foam-dropdown-button>
```

```html
<!-- bad -->
<foam-dropdown-button type="link">
    <foam-dropdown-item text="List of links" subdropdown>
        <foam-dropdown-item type="link" text="link 1" />
        <foam-dropdown-item type="link" text="link 2" />
        <foam-dropdown-item type="link" text="link 3" />
    </foam-dropdown-item>
</foam-dropdown-button>
```
