
Number inputs are small inputs that can be changed using arrows or manually typing the number desired.
The number is then emitted up to parent directory.
## Usage

Add the <foam-number/> element and use the props to manage state of the input and bind it to a function that is emitted.

```html
<!-- good -->
<foam-number v-model="emitFunction" />
```

```html
<!-- bad -->
<foam-number />
```

## Label

The prop `label` is an optional Label above the input to inform the user as of what is wanted.


```html
<!-- good -->
<foam-number label="Age" v-model="emitFunction" />
```


## Validation

To indicate to the user that something is Valid/Invalid use `isValid`= boolean - and `validationText` to add context.


```html
<!-- good -->
<foam-number isValid=true validationText="Success!" v-model="emitFunction"/>
```

## Direction

The direction prop defines the layout of the input.
`horizontal` lays out the user controls on left and right of the input, this is the default layout if not provided.
`vertical` lays out the user controls above and below the input.

```html
<!-- good -->
<foam-number direction='horizontal' v-model="emitFunction" />
<foam-number direction='vertical' v-model="emitFunction" />
```


## Increment

`increment` defines the value of the user control click to incriment or decrement the value. default is 1

```html
<!-- good -->
<foam-number increment=10 v-model="emitFunction" />
```




## Disabled

Using the `disabled` prop will disable the entire element and make it uninteractible and phasing it out

```html
<!-- good -->
<foam-number disabled v-model="emitFunction" />
```



## Helpertext

`helpertext` is a string prop that tells the user additional information as what the input needs or if label is not enough to inform the user

```html
<!-- good -->
<foam-number helpertext="input atleast 5 numbers" v-model="emitFunction" />
```


## User restrictions

To help guiding the user what the program needs you can restrict the user from entering an invalid input

`maxLength` restricts the user to a specific length of the input ie. 2 = 99 default is `3` that is `999`.
`maxValue` restricts the user to a specific number ie. `20` default is `999`

```html
<!-- good -->
<foam-number maxLength= 10 v-model="emitFunction" />
<foam-number maxValue= 1415 v-model="emitFunction" />
```


