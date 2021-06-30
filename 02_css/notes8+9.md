# Section 8 - CSS Box Model

## Width and Heigth
The always state the **content** dimensions

## Borders 
Every border need at least these three parameters:
- `border-width`
- `border-color`
- `border-style`

These three can be provided in one line with the `border` shorthand property.
```css
/* width | style | color*/
border: 
```


Additionally, we can set `border-sizing`to specify if the dimensions consider what is inside the border or if it es included in the overall dimensions.

## Padding and Margin
The thing you put inside a box carrying fragile stuff to prevent damages. The padding goes between the content and the border. It is colored in green in the code inspector tools

The padding shorthand is just `padding` and it can be written as 

```css
/* top | right | bottom | left */
padding: 
```
The margin works as padding, but outside the box border.
By default, the `body` has a fixed margin value, so it is common to override it to cero at the very start of a new project.

## Display
The `display`property handles how elements use the space, in relation to other elements


## EMs & REMs

*EM* is a unit in the typography field that is equil to the currently specified point size.

`em` in `font-size` refers to the relative size of the **parent**
`em` in `marigin`, `padding`, `border-radius` refers to the relative size of the **element**

*REM* stands for *Root EM*, which refers to the font size specified for the root element of the page, which often is `<html>``

One may want to use EMs and REMs combined, depending on the context and what the behaviour of specific elements should be.


# Section 9 - Other Useful CSS Properties

## Opacity & Alpha Channel

Setting `color` with `rgba` only sets the color for the selected property, however `opacity` sets the transparecy/opacity for the entire element and its children

## Position

The position property specifies how is the 

## Transitions

So much fun!!

## Transform