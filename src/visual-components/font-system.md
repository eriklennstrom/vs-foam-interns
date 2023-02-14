Default typography and classes for FOAM
## Usage
add "import 'fonts-system.scss' from '@foam/typography'" to your project to add this library to your css.

Adding classes to desired element overrides current fontsize and font-family to selected font using $primaryFontFamily default is ("SourceSansPro").

The class decides what typography will be used. Default is 1rem (16px).

classes available : `.h1` , `.h2` , `.h3` , `.h4` , `.h5`, `.body1`, `.subtitle1`, `.body2`, `.subtitle2`, `.small` `.overline`

```html
<!-- good -->
<any-element class="h1" />
```

```html
<!-- bad -->
<h3 .h1 ><h3/>
```
.h1 props does not exits - will generate an error.


## Expressive typography and embellishment

To Embellish information given add the following classes to any element:
`.bold`, `.italic`, `.black`


```html
<!-- good -->
<any-element class="black"/>
```



## Overriding other scss

all variables are found in a list in the css if you want to use the sizes for other use in your scss:

valid font sizes are: `h1` , `h2` , `h3` , `h4` , `h5`, `body1`, `subtitle1`, `body2`, `subtitle2`, `small`, `.overline`

`.uppercase` changes all input to uppercase letters
`.lowercase` changes all input to lowercase letters

replace FONT-SIZE with any of these variables



```html
font-size: map-get(font-system.$font-size, <FONT-SIZE>)
```

