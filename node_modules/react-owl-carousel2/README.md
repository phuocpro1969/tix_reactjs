# react-owl-carousel2
[React](https://facebook.github.io/react/) + [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)


## 1.Installation

```
npm install react-owl-carousel2
```

```html
<!-- Load jQuery(1.7+) -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

<!-- Customized Style -->
<link rel="stylesheet" href="owl-carousel/owl.theme.css">
```

```jsx
import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.
```


## 2.Usage

```javascript
const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};

const events = {
    onDragged: function(event) {...},
    onChanged: function(event) {...}
};
```

```jsx
<OwlCarousel ref="car" options={options} events={events} >
	<div><img src="/img/fullimage1.jpg" alt="The Last of us"/></div>
	<div><img src="/img/fullimage2.jpg" alt="GTA V"/></div>
	<div><img src="/img/fullimage3.jpg" alt="Mirror Edge"/></div>
</OwlCarousel>
```


### Options

>List including all options from built-in plugins video, lazyload, autoheight and animate.

<article>
<h4 id="items">items</h4>
<p>Type: <code>Number</code>
  <br> Default: <code>3</code></p>
<p>The number of items you want to see on the screen.</p>
<hr>
<h4 id="margin">margin</h4>
<p>Type: <code>Number</code>
  <br> Default: <code>0</code></p>
<p>margin-right(px) on item.</p>
<hr>
<h4 id="loop">loop</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Infinity loop. Duplicate last and first items to get loop illusion.</p>
<hr>
<h4 id="center">center</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Center item. Works well with even an odd number of items.</p>
<hr>
<h4 id="mousedrag">mouseDrag</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>true</code></p>
<p>Mouse drag enabled.</p>
<hr>
<h4 id="touchdrag">touchDrag</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>true</code></p>
<p>Touch drag enabled.</p>
<hr>
<h4 id="pulldrag">pullDrag</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>true</code></p>
<p>Stage pull to edge.</p>
<hr>
<h4 id="freedrag">freeDrag</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Item pull to edge.</p>
<hr>
<h4 id="stagepadding">stagePadding</h4>
<p>Type: <code>Number</code>
  <br> Default: <code>0</code></p>
<p>Padding left and right on stage (can see neighbours).</p>
<hr>
<h4 id="merge">merge</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Merge items. Looking for data-merge='{number}' inside item..</p>
<hr>
<h4 id="mergefit">mergeFit</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>true</code></p>
<p>Fit merged items if screen is smaller than items value.</p>
<hr>
<h4 id="autowidth">autoWidth</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Set non grid content. Try using width style on divs.</p>
<hr>
<h4 id="startposition">startPosition</h4>
<p>Type: <code>Number/String</code>
  <br> Default: <code>0</code></p>
<p>Start position or URL Hash string like '#id'.</p>
<hr>
<h4 id="urlhashlistener">URLhashListener</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Listen to url hash changes. data-hash on items is required.</p>
<hr>
<h4 id="nav">nav</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Show next/prev buttons.</p>
<hr>
<h4 id="rewind">rewind</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>true</code></p>
<p>Go backwards when the boundary has reached.</p>
<hr>
<h4 id="navtext">navText</h4>
<p>Type: <code>Array</code>
  <br> Default: <code>[&amp;#x27;next&amp;#x27;,&amp;#x27;prev&amp;#x27;]</code></p>
<p>HTML allowed.</p>
<hr>
<h4 id="navelement">navElement</h4>
<p>Type: <code>String</code>
  <br> Default: <code>div</code></p>
<p>DOM element type for a single directional navigation link.</p>
<hr>
<h4 id="slideby">slideBy</h4>
<p>Type: <code>Number/String</code>
  <br> Default: <code>1</code></p>
<p>Navigation slide by x. 'page' string can be set to slide by page.</p>
<hr>
<h4 id="dots">dots</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>true</code></p>
<p>Show dots navigation.</p>
<hr>
<h4 id="dotseach">dotsEach</h4>
<p>Type: <code>Number/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Show dots each x item.</p>
<hr>
<h4 id="dotdata">dotData</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Used by data-dot content.</p>
<hr>
<h4 id="lazyload">lazyLoad</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Lazy load images. data-src and data-src-retina for highres. Also load images into background inline style if element is not &lt;img&gt;</p>
<hr>
<h4 id="lazycontent">lazyContent</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>lazyContent was introduced during beta tests but i removed it from the final release due to bad implementation. It is a nice options so i will work on it in the nearest feature.</p>
<hr>
<h4 id="autoplay">autoplay</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Autoplay.</p>
<hr>
<h4 id="autoplaytimeout">autoplayTimeout</h4>
<p>Type: <code>Number</code>
  <br> Default: <code>5000</code></p>
<p>Autoplay interval timeout.</p>
<hr>
<h4 id="autoplayhoverpause">autoplayHoverPause</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Pause on mouse hover.</p>
<hr>
<h4 id="smartspeed">smartSpeed</h4>
<p>Type: <code>Number</code>
  <br> Default: <code>250</code></p>
<p>Speed Calculate. More info to come..</p>
<hr>
<h4 id="fluidspeed">fluidSpeed</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>Number</code></p>
<p>Speed Calculate. More info to come..</p>
<hr>
<h4 id="autoplayspeed">autoplaySpeed</h4>
<p>Type: <code>Number/Boolean</code>
  <br> Default: <code>false</code></p>
<p>autoplay speed.</p>
<hr>
<h4 id="navspeed">navSpeed</h4>
<p>Type: <code>Number/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Navigation speed.</p>
<hr>
<h4 id="dotsspeed">dotsSpeed</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>Number/Boolean</code></p>
<p>Pagination speed.</p>
<hr>
<h4 id="dragendspeed">dragEndSpeed</h4>
<p>Type: <code>Number/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Drag end speed.</p>
<hr>
<h4 id="callbacks">callbacks</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>true</code></p>
<p>Enable callback events.</p>
<hr>
<h4 id="responsive">responsive</h4>
<p>Type: <code>Object</code>
  <br> Default: <code>empty object</code></p>
<p>Object containing responsive options. Can be set to false to remove responsive capabilities.</p>
<hr>
<h4 id="responsiverefreshrate">responsiveRefreshRate</h4>
<p>Type: <code>Number</code>
  <br> Default: <code>200</code></p>
<p>Responsive refresh rate.</p>
<hr>
<h4 id="responsivebaseelement">responsiveBaseElement</h4>
<p>Type: <code>DOM element</code>
  <br> Default: <code>window</code></p>
<p>Set on any DOM element. If you care about non responsive browser (like ie8) then use it on main wrapper. This will prevent from crazy resizing.</p>
<hr>
<h4 id="video">video</h4>
<p>Type: <code>Boolean</code>
  <br> Default: <code>false</code></p>
<p>Enable fetching YouTube/Vimeo/Vzaar videos.</p>
<hr>
<h4 id="videoheight">videoHeight</h4>
<p>Type: <code>Number/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Set height for videos.</p>
<hr>
<h4 id="videowidth">videoWidth</h4>
<p>Type: <code>Number/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Set width for videos.</p>
<hr>
<h4 id="animateout">animateOut</h4>
<p>Type: <code>String/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Class for CSS3 animation out.</p>
<hr>
<h4 id="animatein">animateIn</h4>
<p>Type: <code>String/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Class for CSS3 animation in.</p>
<hr>
<h4 id="fallbackeasing">fallbackEasing</h4>
<p>Type: <code>String</code>
  <br> Default: <code>swing</code></p>
<p>Easing for CSS2 $.animate.</p>
<hr>
<h4 id="info">info</h4>
<p>Type: <code>Function</code>
  <br> Default: <code>false</code></p>
<p>Callback to retrieve basic information (current item/pages/widths). Info function second parameter is Owl DOM object reference.</p>
<hr>
<h4 id="nesteditemselector">nestedItemSelector</h4>
<p>Type: <code>String/Class</code>
  <br> Default: <code>false</code></p>
<p>Use it if owl items are deep nested inside some generated content. E.g 'youritem'. Dont use dot before class name.</p>
<hr>
<h4 id="itemelement">itemElement</h4>
<p>Type: <code>String</code>
  <br> Default: <code>div</code></p>
<p>DOM element type for owl-item.</p>
<hr>
<h4 id="stageelement">stageElement</h4>
<p>Type: <code>String</code>
  <br> Default: <code>div</code></p>
<p>DOM element type for owl-stage.</p>
<hr>
<h4 id="navcontainer">navContainer</h4>
<p>Type: <code>String/Class/ID/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Set your own container for nav.</p>
<hr>
<h4 id="dotscontainer">dotsContainer</h4>
<p>Type: <code>String/Class/ID/Boolean</code>
  <br> Default: <code>false</code></p>
<p>Set your own container for nav.</p>
<hr>
</article>


### Events

>List including all events of type 'attachable' from carousel, lazyload and built-in plugins video.

<article>
<h3 id="carousel">Carousel</h3>
<h4 id="initialize-owl-carousel">initialize.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onInitialize</code>
  <br>
</p>
<p>When the plugin initializes.</p>
<hr>
<h4 id="initialized-owl-carousel">initialized.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onInitialized</code>
  <br>
</p>
<p>When the plugin has initialized.</p>
<hr>
<h4 id="resize-owl-carousel">resize.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onResize</code>
  <br>
</p>
<p>When the plugin gets resized.</p>
<hr>
<h4 id="resized-owl-carousel">resized.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onResized</code>
  <br>
</p>
<p>When the plugin has resized.</p>
<hr>
<h4 id="refresh-owl-carousel">refresh.owl.carousel</h4>
<p>Type: <code>attachable, cancelable, triggerable</code>
  <br>Callback: <code>onRefresh</code>
  <br>Parameter: <code>[event, speed]</code>
  <br>
</p>
<p>When the internal state of the plugin needs update.</p>
<hr>
<h4 id="refreshed-owl-carousel">refreshed.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onRefreshed</code>
  <br>
</p>
<p>When the internal state of the plugin has updated.</p>
<hr>
<h4 id="drag-owl-carousel">drag.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onDrag</code>
  <br>
</p>
<p>When the dragging of an item is started.</p>
<hr>
<h4 id="dragged-owl-carousel">dragged.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onDragged</code>
  <br>
</p>
<p>When the dragging of an item has finished.</p>
<hr>
<h4 id="translate-owl-carousel">translate.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onTranslate</code>
  <br>
</p>
<p>When the translation of the stage starts.</p>
<hr>
<h4 id="translated-owl-carousel">translated.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onTranslated</code>
  <br>
</p>
<p>When the translation of the stage has finished.</p>
<hr>
<h4 id="change-owl-carousel">change.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onChange</code>
  <br>Parameter: <code>property</code>
  <br>
</p>
<p>When a property is going to change its value.</p>
<hr>
<h4 id="changed-owl-carousel">changed.owl.carousel</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onChanged</code>
  <br>Parameter: <code>property</code>
  <br>
</p>
<p>When a property has changed its value.</p>
<hr>
<h3 id="lazy">Lazy</h3>
<h4 id="load-owl-lazy">load.owl.lazy</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onLoadLazy</code>
  <br>
</p>
<p>When lazy image loads.</p>
<hr>
<h4 id="loaded-owl-lazy">loaded.owl.lazy</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onLoadedLazy</code>
  <br>
</p>
<p>When lazy image has loaded.</p>
<hr>
<h3 id="video">Video</h3>
<h4 id="stop-owl-video">stop.owl.video</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onStopVideo</code>
  <br>
</p>
<p>When video has unloaded.</p>
<hr>
<h4 id="play-owl-video">play.owl.video</h4>
<p>Type: <code>attachable</code>
  <br>Callback: <code>onPlayVideo</code>
  <br>
</p>
<p>When video has loaded.</p>
<hr>
</article>


### Methods

* prev ()
```jsx
<button onClick={() => this.refs.car.prev()}>prev</button>
```

* next ()
```jsx
<button onClick={() => this.refs.car.next()}>next</button>
```

* goTo (page)
```jsx
<button onClick={() => this.refs.car.goTo(0)}>goTo</button>
```
