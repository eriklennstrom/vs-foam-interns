Inputs are elements that the user interacts with to add information to the program, it will inform the program of the information provided IE. Passwords, strings .
The label informs the user what the input wants and
when the user hovers the input it reinforces that it is an interactable element.
To indicate the diffrent states of an input, it will either provide colors and/or context of the state.

## Usage

The label property is the text content that will be rendered as a label. Default label is 'Label'.

The variant property decides what variant will be used. Default is `text`.

Variants available : `text`, `number`, `email`, `password`

```html
<!-- good -->
<foam-input variant="password" label="enter your password" v-model="value"/>
```

```html
<!-- bad -->
<foam-input variant="primary" label="enter your password" v-model="value" />
```

Primary variant does not exist - will give the default input "text".


## Placeholder

Placeholder is a string attribute that shows within the input element before anything is typed in opacity of 0.3

This is handled by adding placeholder to the html allong with desired string value


```html
<!-- good -->
<foam-input placeholder="Please enter password" label="Password" v-model="value" />
```

```html
<!-- bad -->
<foam-input "placeholder = Please enter password" label="Password" v-model="value" />
```

## Disabled

Disabled attribute is a boolean value that can be used to indicate to the user that you cannot interact with the element.

This is handled by adding disabled to the html


```html
<!-- good -->
<foam-input disabled label="Password" v-model="value" />
```

```html
<!-- bad -->
<foam-input "disabled" label="Password" v-model="value" />
```



## Slots

Within the component there are slots for content with embedded functionality that adds a button to the label.
Clicking the button will drop down your slotted content and clicking it again will hide it.


```html
<!-- good -->
<foam-input v-model="value" >     
    <template #sentContent>
      Slot items
    </template>   
<foam-input />
```

```html
<!-- bad -->
<foam-input accordion slot /> 
```


## Size

The thickness of the input-wrapper can be controlled with the size prop that takes a string value.
Valid sizes are: `sm`, `md`, `lg` (default is `md`)


```html
<!-- good -->
<foam-input size='lg' v-model="value" />     

```

```html
<!-- bad -->
<foam-input lg v-model="value"/> 
```
