# Comparisons

As in many languages, JS has comparisons between numbers and other types. The most basic is comparing numbers, which always return a `boolean`, but characters can also be compared using the unicode mapping:
```js
1 > 3;      // false
5 < 9;      // true
'A' < 'a';  // true
```
### Common operators
-
-
-
-

### Equality operators

- `==` : equiality that coherces value type, i.e.: convert to the same type and then compare
- `!=` : negate  equality
```js
1 == '1';   // true
0 == false; // true
```
- `===` : *strict* equality that compares value *and* type
- `!==` : negate strict equality
```js
1 === '1';   // false
0 === false; // false
```

**Important**: It is recommended to always use *strict* equals.
