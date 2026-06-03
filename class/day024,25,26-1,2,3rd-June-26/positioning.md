# CSS Positioning

> positioning is incredibly powerful and useful, as long as you’re using it for the right use case.

We have a lot of ways to move things around to create layouts or adjust where an element is on the screen, and you probably want one of those things instead.

- My first rule of using positioning is, don’t use it if you don’t have to!

- We have several values that we can use with the position property:
  - absolute
  - fixed
  - relative
  - sticky
  - static (the default)
- When we declare any of these other than static, we open up a new set of properties:
  - top
  - bottom
  - left
  - right
  - inset (shorthand for all of the above)
  - z-index (controls the stacking order of elements that overlap each other)

## Fixed Positioning

> When we use position: fixed, we are removing that element from the document flow and “fixing” the position of the element to a specific place in the viewport.

> it's referenced to the viewport, so it will stay in the same place even when the user scrolls.

However, it can also cause issues with overlapping content and may not be the best choice for all layouts.

- usecases:
  - a navigation bar that stays at the top of the page as you scroll down.
  - a "back to top" button that appears in the bottom right corner of the screen when you scroll down.
  - a modal dialog that appears in the center of the screen and stays there even when the user scrolls.

coding example:

- https://codepen.io/sameerahmedkhan/pen/WboMWaO?editors=1100

## Sticky Positioning

> When we use position: sticky, we are making an element "stick" to a specific position in the viewport as the user scrolls.
>
> position: sticky is a lot like fixed, except it is only pulled out of the flow when it hits the point you told it as you scroll down, and it will return to its normal position when you scroll back up.

usecases:

- using sticky for navbars, instead of fixed, because they’ll take up space until you start to scroll. An important difference is that it isn’t pulled out of the flow until it “sticks”.

coding examples:

- https://codepen.io/sameerahmedkhan/pen/EaNQJdO
- https://codepen.io/sameerahmedkhan/pen/myOXgQe

- Another important difference is that it can’t escape it’s parent like a fixed element can.
  https://codepen.io/sameerahmedkhan/pen/ByQYEGQ
  https://codepen.io/sameerahmedkhan/pen/QwGQPJM

## Relative Positioning

> When we use position: relative, we are moving an element relative to its normal position in the document flow.
> The element is not pulled out of the flow of the document, so other elements still “see” it.

The `inset` properties allow you to move the element around, relative to where it is in the normal flow. When you move the element with those properties, the other elements don’t “see” that movement.

In general, use a `translate` to move an element, rather than a `position: relative` if I need to change the position of an element.
The most common time you’ll use `position: relative` is when you are also using `position: absolute` on another element.

coding example:

- https://codepen.io/sameerahmedkhan/pen/raWJbQr

- usecases:
  - adjusting the position of an element slightly without affecting the layout of other elements.
  - creating a "hover" effect where an element moves slightly when the user hovers over it.
  - creating a "tooltip" effect where an element appears above another element when the user hovers over it.

## Absolute Positioning

> When we use position: absolute, we are removing an element from the document flow and positioning it relative to its nearest positioned ancestor (or the initial containing block if there is no positioned ancestor).
> position: absolute pulls an element out of the flow, just like we saw with position: fixed. The difference is that it is positioned relative to its nearest positioned ancestor, rather than the viewport.

However, instead of being positioned relative to the viewport. If you do not use any of the inset values, it will stay where it was in the normal flow, but other elements no longer “see” it, and they will slide under it.

Unlike position: fixed, rather than being positioned relative to the viewport, it is positioned relative to it’s nearest defined containing block. By default, this is the page itself. However, if you have a parent element with a position other than static, that becomes the containing block for the absolutely positioned element.

A containing block defines the reference point for an absolutely positioned element. The easiest way to create a containing block is to add position: relative to any ancestor element (usually the direct parent) of the absolutely positioned element. Without a containing block, an absolutely positioned element will position itself relative to the browser viewport.

coding example:

- https://codepen.io/sameerahmedkhan/pen/XJNZQyP

- usecases:
  - creating a dropdown menu that appears when the user clicks on a button.
  - creating a tooltip that appears above an element when the user hovers over it.
  - creating a modal dialog that appears in the center of the screen and stays there even when the user scrolls.
  - position: absolute is typically a good choice when you need to position an element to a specific place within its parent container, especially when the element needs to be taken out of the normal document flow and positioned independently of other content, such as tags or labels that need to appear in a specific corner of a card.

## review points

- When we use position: fixed, the viewport becomes the containing block.
- When we use position: absolute, the containing block for that element is the nearest ancestor which has a position other than static. If there is no ancestor that has a position other than static, then it becomes the <html> element.
- use position: relative to create a containing block for an absolutely positioned element.
