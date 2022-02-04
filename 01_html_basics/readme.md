# Section 2 and 3 - HTML Basics
Lest's start with **HTML**
HTML is a *markup language* used to describe and annotate text format, styles and annotations. The goal of HTML is to take plain text and give it visual structure and appearances.

### HTML Elements
```html
<i> italics </i>
<b> italics </b>
```

### HTML Boiler Plate
This is the *Skeleton* for every webpage:

Every page must have ONE `<head>` and ONE `<body>`. The head contains the metadata and the body is the information that will be displayed in the page.

Also, we need some tags to define this document as an HTML one by using:

```html
<!DOCTYPE html>
<html>
    <head>
        Here goes the metadada
        <title> </tile>
    </head>

    <body>
        Here goes the actual page content
    </body>
</html>
```
In VS Code you can use the *Format this document* to re-arrange the file content. The shortcut for this es `Option+Shift+F`

### Lists: ordered and unordered


```html
<ul> This indicates an Unordered List opening
    <li>This is an List Item</li>
    <li>This is another List Item</li>
    <li>...</li>
    <li>...</li>
    <li>Etc :)</li>
</ul>
```
Only `<li>` can be used inside a list. But one can nest lists inside an `<li>` tag :)

### Anchor tags: provide links
anchor tags are *in-line* elements, which means the do not take their own new line. They can be accomodated inside a paragraph or any other text

