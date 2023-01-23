Inputs are elements that the user interacts with to add information to the program, it will inform the program of the information provided IE. Passwords, strings .
The label informs the user what the input wants and
when the user hovers the input it reinforces that it is an interactable element.
To indicate the diffrent states of an input, it will either provide colors and/or context of the state.

## Usage

The text property is the text content that will be rendered as a label. Default text is 'Label'.

The variant property decides what variant will be used. Default is `text`.

Variants available : `text`, `numer`, `email`, `password`

```html
<!-- good -->
<foam-input variant="password" text="enter your password" />
```

```html
<!-- bad -->
<foam-input variant="primary" text="enter your password" />
```

Primary variant does not exist - will give the default input "text".


## Placeholder

Placeholder is a string attribute that shows within the input element before anything is typed in opacity of 0.3

This is handled by adding placeholder to the html allong with desired string value


```html
<!-- good -->
<foam-input placeholder="Please enter password" text="Password" />
```

```html
<!-- bad -->
<foam-input "placeholder = Please enter password" text="Password" />
```

##Disabled

Disabled attribute is a boolean value that can be used to indicate to the user that you cannot interact with the element.

This is handled by adding disabled to the html


```html
<!-- good -->
<foam-input disabled text="Password" />
```

```html
<!-- bad -->
<foam-input "disabled" text="Password" />
```



##Slots

Within the component there are slots for content with embedded functionality with the accordian boolean, when paired with the slot will provide information from the acordian button.


```html
<!-- good -->
<foam-input accordian >     
    <template #sentContent>
      Slot items
    </template>   
<foam-input accordian />
```

```html
<!-- bad -->
<foam-input accordian slot= /> 
```
