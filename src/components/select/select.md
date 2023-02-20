The select component offers a user multiple items or actions to choose from which are initially collapsed behind a button or an input.

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.

## Usage

The ``label`` property renders the label for the select component.

The ``position`` property decides if the label should be inside or top of the input container.


The ``options`` property is the options that will be rendered in the options dropdown.
> Note - The property should be passed down as an array with option objects. 
> Option type is { id : number, text: string, value : string}

Example -
```
    [{ud: 1, text : 'Text', value : 'value'}]
```

The ``sort`` property is a boolean that, if true, sorts the options list alphabetically.

The ``defaultoption`` is a property that will be the first choice in the option dropdown. Default is ``-- Choose an option --``


> Note - The dropdown component is using the ``popperjs`` positioning engine for the dropdown positioning. Read more at https://popper.js.org/