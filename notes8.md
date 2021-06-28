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

