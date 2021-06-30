# Section 10 - Flexbox

Flexbox is a **one-dimensional** layout method for laying out items in rows or columns. It's fairly new.
Why "Flex"? Because Flexbox allows us to dristibute space dynamically across elements of *unknown* size.

## Flex Direction

In Flex model there are two axis
- **Main** axis: default `row`
- **Cross** axis: default `column`

We can modify the direction using the `flex-direction` property:
- `reverse` uses `row`as main axis, but starting from right to left
- `column`uses `column`as main axis
- `column-reverse` you can figure it out

## Justify Content
How the content is ditributed along the main axis. We can use the following parameters;
- `flex-start` moves everything to the start of the main axis
- `flex-end` moves everything to the end of the main axis
- `flex-center` centers everythin aling the main
- `space-between` spans every element along the main axis, but not around the borders
- `space-around` spans every element along the main axis, including the spaces between the one from start to the first element and from last element to end.
- `space-evenly` spans every element evenly

## Align Items and contents
Align items distributes the content along the **cross axis**, just like justify.

Also, we can use `align-self`

## Flex Wrap
`flex: wrap-reverse` also changes the **cross axis** :grimmacing:

