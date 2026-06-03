# CSS Interview Questions

## CSS Positioning

1. What is the default value of the position property in CSS?
2. What new properties become available when you change an element's position from static to any other value?
3. What does position: fixed do to an element?
4. Can you give an example of when you might use position: fixed in a web design?
5. What happens to an element's width when you apply position: fixed to it?
6. What does the inset property do in CSS positioning?
7. How does the z-index property affect elements that overlap each other?

8. What happens to content when an element is given position: sticky without specifying a position value like 'top'?
9. What is a key limitation of position: sticky compared to position: fixed?
10. How does position: sticky differ from position: fixed in terms of document flow?
11. When using position: sticky with top: 0, at what point does the element actually become 'stuck'?

12. What happens when you first declare position: relative on an element without any additional properties?
13. How does position: relative interpret the top property when set to a value like 20 pixels?
14. What happens to surrounding elements when an element with position: relative is moved using top and left properties?
15. What is a containing block in the context of CSS positioning?
16. How does position: absolute behave differently from position: fixed when scrolling?

You should maintain proper semantic structure and document outline for accessibility. For example, a heading should come before its related tag or badge in the HTML, even if visually the tag appears above the heading, because the tag is part of that heading's section. This ensures screen readers and other assistive technologies interpret the document structure correctly, similar to how a table of contents would be organized.

What does the CSS property object-fit: cover do when applied to an image element?

object-fit: cover is the equivalent of background-size: cover for actual image elements. It makes the image fill its container while maintaining its aspect ratio by cropping parts of the image rather than stretching it. This is useful when you need an image to fit a specific size that doesn't match its natural aspect ratio.

Why should heading elements (h2, h3, etc.) come before tags in the HTML structure of a card, even if the visual design shows tags positioned higher?

How does the z-index property layer elements when no z-index values are explicitly set?

Why is it recommended to use longhand background properties (like background-color) instead of the background shorthand?
