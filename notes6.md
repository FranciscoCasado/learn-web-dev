# Section 6 - CSS

What it is: Cascading Style Sheets. Decribing *how* documents are presented visually, a.k.a. *the looks*

Everything in CSS follows this pattern
```css
selector {
    property: value;
}
```

For example
This paints every `<h1>` purple
```css
h1 {
    color: purple;
}
```

**CSS is huge!** - Always have the [MDN CSS Resources](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) at hand

## Good practices
1. Never include styles inline
```html
<h1 style="color: purple">Hello</h1>
<button style="background-color: palegreen;">About</button>
<button style="background-color: palegreen;">Another button</button>
```

2. We may write our css in the `<head>` of the html file inside a `<style>` block, BUT it isn't good either:
```html
<style>
    h2 {
        color: palevioletred;
    }
</style>
```

3. Best practice is to create a `.css` file that will be included with a `<link>` tag in the html `<head>`

## Properties

### Colors
In CSS we have *named* colors, but we can also use *coded* colors

### Text
`text-align`: how does the text align in an element. It does not control the alignment of an element respect to the whole page
`font-weight`: how to *bold* and *unbold* text. `400` is the same as `normal`
`text-decoration`: controls lines for underlining, strike-through, etc. may be useful for "removing" default underlining of `<a>`.
`line-height`: how tall a line of text is. Several units: normal, 2.5, etc.
`letter-spacing`: horizontal space between letters in our text

### Sizes

- Realvite Units: `em`, `rem`, `vh`, `vw`, `%`
- Absolute units: `pt`, `cm`, `mm`
    - `px` not necessarily equal the width of 1 pixel in your machine. Not recommended for responsive websites  
### Fonts
`font-family` is the property that specifies the font of the page, but changing it may not be as easy as it seem. Some fonts may not be supported in a users browser

Every font after the comma is the next alternative font to use if the machine does not support the preferred font family:

```css
font-family: Helvetica, sans-serif;
```

# Section 7 - CSS Selectors

CSS has a strutured way of computing which selector must go in every element, so having that in mind will help to organize our code better.

- `*`not very common and not recommended
- element selector is very common and can be grouped using commas
- `id` selectors: appart from `label`-ing, id's are also useful for linking custom and specific selectors

- `.class` selector: similar idea to our id, but it can applied to miltuple elements
- descendant selector: select only elements inside the previous selector. Example: *select `a` only if inside of `li`*
```css
li a {
    ...
}
```
- Adjacent selector (Combinators): `h1 + p` select `p`that come right after an `h1`(not nested, immediately right after)

- Child selector: `h1 > p` select `p`that are inmediate children of an `h1`, but not the nested in further children

- Attribute selector: `input[type=password]` select only `input` of type `password`

- Pseudo Classes: keywords added to a selector that specifies a special state of the element: `:active`, `:checked`, `:first`, `:first-child`, `:not()`, `nth-child`, `nth-of-type`.

- Pseudo Elements: Modifiers to our selectors: `::after`, `::before`, `::first-letter`, `::first-line`, `::selection`,

## Cascade!
The order matters: the last selector is the one that will be applied

## Specificity
The most specific selector wins when in a conflict:
ID > Class > Element