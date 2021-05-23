# Section 4 - HTML next steps
- Undestanding what HTML5 actually is
- Block vs Inline Elements
- `span`and `div`elements
- NTH: `sub` `hr` `br`and `sup`elements   

## HTML5 is not a *version*
HTML5 is an *evolution* of the HTML Living Standard: There is no *official* version of HTML. There only a "how HTML must work": every company build their own HTML into their applications. These instructions are [here](https://html.spec.whatwg.org/). One can always use older HTML's, but it's very uncommon.



## Section 5 - HTML Tables & Forms

What we will learn: HTML tables and HTML forms (how to input data), although these days is not a good practice.
### Tables Basics:
Tables were used to *layout* content inside a webpage. We can create tables usign upto 15 elemets, but we don't actually need all of them :)

- `<table>`: declare a table block
- `<tr>`: row of a table
- `<td>`: table data (one single element)
- `<th>`: table header

These are just for proper handling of the table
- `<tbody>`: isn't
- `<thead>`: these
- `<tfoot>`: obvious?

Always follow this structure:
```
<table>
    <thead>
        <tr>
            <th> Table Head uses table headers</th>
            <th>...</th>
            <th>...</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> Table Body uses table data</td>
            <td>...</td>
            <td>...</td>
        </tr>
        <tr>
        <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
        </tr>
        <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
        </tr>
    </tbody>
</table>
```

How about multiple table headers?

### Forms
A form represents a section of the document containing interactive controls for submitting informatio

- The *action* attribute specifies WHERE the data should be sent. e.g.: `/search/`, `/tacos`
- The *method* attribute specifies which HTTP method should be used

What con go inside a form: almost any type of input and text. This is the basic structure:
```
<form action="/tacos">
    <p>
        <label for="username">Enter a username: </label>
        <input id="username" type="text" placeholder="username" name="name">
    </p>
    <button>Submit</button>
</form>
```
The abtributes do the following:
- Inside `label`, `for=""` specifies the identifier for the label across the form (or document *citation needed )
- The label identifier then is passed to the `input` in the `id` attribute
- `name`specifies the variable name that will be passed to the server when the action/query is triggered. It will be reflected in the address bar
- `placeholder`specifies the text that is displayed when the user has not typed anything yet. Useful for suggestions like "enter your search here"



Why add labels? Several reasons:
- They provide visual information/text/indicators related to the input
- Labels allow to click this visual indicators in sync with the actual input, whichc makes it easier and more usable in mobile applications
- 


Checkboxes


Radio Buttons
Note that radio buttons and checkboxes always send `on` when submitted, unless the `value` attribute is specified.

The following won't work when submit button is clicked
```
<form action="">
    <label for="xs">XS:</label>
    <input type="radio" name="size" id="xs">
    <label for="s">S:</label>
    <input type="radio" name="size" id="s">
    <label for="m">M:</label>
    <input type="radio" name="size" id="m">
    <button>Submit</button>
</form>
``
This will send
```
?size=on
```

The following, however, will send the data we want to send:
```
<form action="">
    <label for="xs">XS:</label>
    <input type="radio" name="size" id="xs" value="xs">
    <label for="s">S:</label>
    <input type="radio" name="size" id="s" value="s">
    <label for="m">M:</label>
    <input type="radio" name="size" id="m" value="m">
    
    <button>Submit</button>
</form>
```

### Dropdown lists: Select and Option

```
<form>
    <label for="meal">Please Select an Entree</label>
    <select name="meal" id="meal">
        <option value="">-- Please Select Your Meal--</option>
        <option value="fish">Fish</option>
        <option value="veg">Veggie</option>
        <option value="steak">Steak</option>
    </select> 
</form>
```

```
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Race Registration!</h1>
    <form action="/race">
        <div>
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" required>
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" required>
        </div>
        <div>
            <p>Select a Race:</p>
            <div>
                <input type="radio" id="5k" name="race" value="5k">
                <label for="5k">Fun Run 5K</label>
                <br>
                <input type="radio" id="half" name="race" value="half">
                <label for="half">Half Marathon</label>
                <br>
                <input type="radio" id="full" name="race" value="full">
                <label for="full">Full Marathon</label>
            </div>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>
        </div>
        <div>
            <label for="age">Select age group</label>
            <select name="age" id="age">
                <option value="age1">Under 18</option>
                <option value="age2">18-30</option>
                <option value="age4">50+</option><html lang="en">

</html>

```