## Dropdown
The dropdown component offers a user multiple items or actions to choose from which are initially collapsed behind a button or an input.

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.

## Usage

The ``role`` property decides what type of dropdown will be rendered. ``button`` or ``input``. Default is ``button``.

The ``text`` property is the text content that will be rendered inside the dropdown button.

The ``variant`` property decides what variant will be used. Default is `primary`.
Variants available : `primary`, `secondary`, `danger`, `danger-outline`, `ghost`


The ``icon`` property decides what type of icon should be rendered. Default is ``null``

The ``width`` property decides the dropdown containers width. Default is ``fit-content``

The ``align`` property decides if the dropdown container should align to the left (``start``) or right (``end``).
Default is ``end``

The ``disabled`` property is a boolean that decides if the dropdown button is active or not. 

The ``placeholder`` property is the text content rendered as a placeholder inside the input field. Default is 'Search'

> For more info about Dropdown Button - see ``Dropdown-Button``

> For more info about Dropdown Input - see ``Dropdown-Input``

> Note - The dropdown component is using the ``popperjs`` positioning engine for the dropdown positioning. Read more at https://popper.js.org/