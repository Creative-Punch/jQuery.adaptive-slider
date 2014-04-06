# <img src="https://rawgithub.com/briangonzalez/rgbaster.js/master/demo/baster.svg" width=25 style="margin-right: 10px"> RGBaster

A dead simple javascript library for extracting the dominant color from an image.

### Usage

Usage is simple. Create an image (or grab an image URL), then get its dominant color & palette.

```javascript
var img = document.getElementById('image');
// or
var img = 'http://example.com/path-to-image.jpg'
````

var colors = RGBaster.colors(img, function(payload){
  // You now have the payload.
  console.log(payload.dominant);
  console.log(payload.palette);
});
```

The `colors` function takes an optional third parameter, which is the size of the palette to return. By default, it returns a palette size of 10.

```javascript
var colors = RGBaster.colors(img, success, 30) // Returns 30 colors.
```

### Browser support

rgbaster.js depends on the following browser functionality:

* [Canvas](http://caniuse.com/#feat=canvas)
* [CORS](http://caniuse.com/#feat=cors)
* [Array.prototype.map](http://kangax.github.io/es5-compat-table/#Array.prototype.map)

Check the linked resources above to determine current level of browser support.


Author
-------
| ![twitter/brianmgonzalez](http://gravatar.com/avatar/f6363fe1d9aadb1c3f07ba7867f0e854?s=70](http://twitter.com/brianmgonzalez "Follow @brianmgonzalez on Twitter") |
|---|
| [Brian Gonzalez](http://briangonzalez.org) |

About
-----
RGBaster was created to modularize a feature of another plugin I built called [adaptive backgrounds](http://briangonzalez.github.io/jquery.adaptive-backgrounds.js/). Check it out.

License
-------
MIT
