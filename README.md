Adaptive Slider jQuery Plugin
======================

A jQuery plugin for a slider with adaptive colored figcaption and navigation.

#<a target="_blank" href="http://demos.creative-punch.net/adaptiveslider/?utm_source=GitHub?utm_source=GitHub&utm_medium=GitHub&utm_campaign=AdaptiveSlider">Demo</a>

**Author**: <a target="_blank" href="http://creative-punch.net">Creative Punch</a>

Installation
------------
You can get this plugin either through the repository, or with **Bower**

```
bower install adaptiveslider
```

Usage
-------
First, be sure to add rgbaster.js and jQuery to your project.
Next, make sure you have a list of images, with a *figure* element inside of the list item and a *figcaption* containing a description.

```html

  <ul class="adaptive-slider">    
    <!-- Slider Item -->
    <li>
      <figure>
        <img src="images/4.jpg">
        <figcaption>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </figcaption>
      </figure>
    </li>
    <!-- End Slider Item -->
    ...
  </ul>
```

Now you can simply initialize the slider with the following JavaScript:

```javascript
$(function() {
	$('.adaptive-slider').adaptiveSlider({
		opacity: 0.7,
		normalizedTextColors: {
			light: '#f1f1f1',
			dark: '#222'
		}
	});
});
```

Both of the options are optional. Let's go over them!

Options
--------
**opacity**: This will allow you to set the opacity of the figcaption. This defaults to 1 (full opacity)

**normalizedTextColors**: An array. This allows you to configure what color the light text (on a dark background) should have, and vice versa.

License
--------
MIT License
