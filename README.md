# Rectangles.js

[![NPM Package](https://img.shields.io/npm/v/rectangles.svg?style=flat)](https://npmjs.org/package/rectangles "View this project on npm")
[![Build Status](https://travis-ci.org/infusion/Rectangles.js.svg)](https://travis-ci.org/infusion/Rectangles.js)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


Rectangles.js is a collection of functions to work with rectangles. The aim is to have a fast and correct library, which makes it easy to calculate the intersection of two rectangles, the area of a rectangle and so on.

Every rectangle is defined by two cartesian points `(x1, y1)` on the top left corner and `(x2, y2)` on the right bottom corner. You have to ensure that `x1 <= x2` and `y1 <= y2`. Otherwise you can use the `normalize()` function to ensure correct behavior.

Examples
===

```javascript
var rect = require('rectangles');
var A = {x1: 20, y1: 20, x2: 100, y2: 100};
var B = {x1: 80, y1: 80, x2: 300, y2: 300};
if (rect.intersect(A, B)) {
  console.log(rect.intersection(A, B)); // Intersection rectangle
} else {
  console.log("no intersection");
}
```

Functions
===

intersect(a, b)
---
Determines if two rectangles intersect

intersection(a, b)
---
Calculates the intersection rectangle of two rectangles. Rectangles have to intersect to work properly!

normalize(a)
---
Normalizes a rectangle to ensure `x1 < x2` and `y1 < y2`.

area(a)
---
Calculates the area of a rectangle

height(a)
---
Calculates the height of a rectangle

width(a)
---
Calculates the width of a rectangle

perimater(a)
---
Calculates the perimeter of a rectangle

center(a)
---
Calculates the center point of a rectangle

insetBy(a)
---
Resizes the rectangle by a given value on the center

Installation
===
Installing Rectangles.js is as easy as cloning this repo or use one of the following commands:

```
bower install rectangle
```
or

```
npm install --save rectangles
```


Using Rectangles.js with the browser
===
```html
<script src="rectangles.js"></script>
<script>
console.log(Rectangles.center(A));
</script>
```

Using Rectangles.js with require.js
===
```html
<script src="require.js"></script>
<script>
requirejs(['rectangles.js'],
function(Rectangles) {
    console.log(Rectangles.normalize(128));
});
</script>
```

Coding Style
===
As every library I publish, Rectangles.js is also built to be as small as possible after compressing it with Google Closure Compiler in advanced mode. Thus the coding style orientates a little on maxing-out the compression rate. Please make sure you keep this style if you plan to extend the library.

Testing
===
If you plan to enhance the library, make sure you add test cases and all the previous tests are passing. You can test the library with

```
npm test
```

Copyright and licensing
===
Copyright (c) 2016, Robert Eisele (robert@xarg.org)
Dual licensed under the MIT or GPL Version 2 licenses.
