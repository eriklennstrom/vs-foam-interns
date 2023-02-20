The select component collects user-provided information from a list of options. 

Selects are usually used in forms where a user submits data and chooses one option from a list.

## Usage

The ``label`` property renders the label for the select component.

The ``position`` property decides if the label should be inside or top of the input container.


The ``options`` property is the options that will be rendered in the options dropdown.
> Note - The property should be passed down as an array with option objects. 
> Option type is { id : string, text: string, value : string}

Example -
```
    [{ud: 'id-1', text : 'Text', value : 'value'}]
```

The ``sort`` property is a boolean that, if true, sorts the options list alphabetically.

The ``defaultoption`` is a property that will be the first choice in the option dropdown. Default is ``-- Choose an option --``

> While the options dropdown is open. Typing on the keyboard will search the options list and focus on an option that matches the search string.

In order to access the values a user chooses, a ``change`` event should be passed to the Select component.

> Note - The value emitted back to the parent is the ``value`` key value passed from the parent.

> Note - The dropdown component is using the ``popperjs`` positioning engine for the dropdown positioning. Read more at https://popper.js.org/

```html
<!-- good -->
    <foam-select label="Country" :options="[Array of countries]" @change="handleCountry" />
```

## Position

Property that decides the position of the label.

Acceptable values are ``top`` and ``inside``

> Note - default value is ``top``

```html
<!-- good -->
    <foam-select label="Label Inside" position="inside" />
    <foam-select label="Label Top" position="top" />
    <foam-select label="Label Top" />
```

## Options

The ``options`` property is an array of objects which will be the options rendered inside the Select component.

Options object - 
```
    [{ud: 1, text : 'Text', value : 'value'}]
```

> Note - The options array must be an array of object and follow the ``Options object`` shown above.

```jsx
<!-- good -->
    const optionsArr = [{ud: 1, text : 'Text', value : 'value'}]
    <foam-select label="Country" :options="optionsArr" @change="handleCountry" />
```

```jsx
<!-- bad -->
    <foam-select label="Country" :options="['option 1', 'option 2']" @change="handleCountry" />
```


## Defaultoption

The ``defaultoption`` property is a string that will render the first option in the options list. 

If the default value is selected, an empty string will be passed into the emit function.

Default value is ``-- Choose an option --``

## Sort

The ``sort`` property is a boolean to tell the component to sort the options list alphabetically.

If not passed in - the options list will follow the passed in ``options`` array.

```html
<!-- good -->
    <foam-select label="Country" :options="optionsArr" @change="handleCountry" sort />
    <foam-select label="Country" :options="optionsArr" @change="handleCountry" :sort="sortVariable" />
    <foam-select label="Country" :options="optionsArr" @change="handleCountry" :sort="true" />
```

```html
<!-- bad -->
    <foam-select label="Country" :options="optionsArr" @change="handleCountry" sort="true" />
```