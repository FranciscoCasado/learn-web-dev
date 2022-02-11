
# 4. CSS Selectors

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