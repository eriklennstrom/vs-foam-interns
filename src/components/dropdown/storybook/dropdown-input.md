The dropdown input component offers a user multiple items or actions to choose from which are initially collapsed behind a input.

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.

The dropdown input is an input with dropdown items or dropdown filter components in the slot.

The dropdown input also works as a search function - where the dropdown input checks the children components and hides those that do not align with the users input.

## Usage

The ``text`` property is the text content that will be rendered inside the dropdown button.

> Note - The dropdown component is using the ``popperjs`` positioning engine for the dropdown positioning. Read more at https://popper.js.org/

```jsx
<foam-dropdown-input text="Countries" >
    <foam-dropdown-filter type="checkbox" text="Sweden" />
    <foam-dropdown-filter type="checkbox" text="Norway" />
    <foam-dropdown-filter type="checkbox" text="Finland" />
</foam-dropdown-input>

<foam-dropdown-input text="Navigation" >
    <foam-dropdown-item type="route" text="About Us" to="/about" />
    <foam-dropdown-item type="route" text="Menu" to="/menu" />
    <foam-dropdown-item type="route" text="Home" to="/home" />
</foam-dropdown-input>
```