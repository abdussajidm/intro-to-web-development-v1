# Student Practice Suggestions

These exercises and tasks stay within the topics covered in HTML, semantic structure, text formatting, CSS basics, the cascade, and browser debugging tools.

## Practice Exercises

1. Build a basic page structure with `<!doctype html>`, `html`, `head`, and `body`, then add a title, a heading, and a paragraph.
2. Create a page that uses heading tags from `h1` to `h6` to show a hierarchy for a sample article.
3. Make a profile page using `p`, `span`, `div`, and headings, and explain the difference between inline and block elements through layout.
4. Write a page with a list of favorite books or topics using ordered and unordered lists.
5. Add links and images to a simple page and make sure each image has meaningful `alt` text.
6. Create a page that uses semantic elements only: `header`, `nav`, `main`, `article`, `section`, `aside`, and `footer`.
7. Build a text formatting demo page showing bold, italic, underline, quotations, lists, and line breaks.
8. Create a CSS selector practice sheet using element, class, id, and attribute selectors.
9. Make a box model demo page with several boxes showing content, padding, border, and margin clearly.
10. Add conflicting styles to the same element and observe which one wins using inline style, internal CSS, and external CSS.

## Development Tasks

1. Build a simple personal homepage with a header, navigation, main content, aside, and footer.
2. Create a mini blog post layout with one article and multiple sections, each with headings and formatted text.
3. Make a product card page that uses `div` and `span` for layout, then improve it by replacing layout `div`s with semantic tags where appropriate.
4. Build a gallery page with images, captions, and links to related pages.
5. Create a two-column layout using only HTML and CSS basics, then adjust spacing using the box model.
6. Recreate a simple webpage from a screenshot using the correct HTML structure and CSS selectors.
7. Make a classroom notes page with sections for HTML, CSS, and tools, using semantic HTML and clean heading hierarchy.
8. Build a style conflict demo page showing the effect of class, id, inline style, and `!important`.
9. Create a broken HTML page with invalid tags and nesting, then ask students to fix it using browser inspection and source view.
10. Use Live Server to preview a page, then use Chrome DevTools to inspect elements and identify which CSS rule is applying.

## Debugging and Tool Practice

1. Open a page in Live Server and change text or CSS, then refresh to confirm the update.
2. Use Chrome DevTools to inspect a heading and identify its font size, margin, and color.
3. Find a CSS rule that is being overridden and explain why it is not taking effect.
4. Inspect an element, edit its class in DevTools, and observe how the styling changes.
5. Use the source tab to compare the original HTML with the rendered result.
6. Add an invalid tag or incorrect nesting, then use DevTools and the browser output to find the issue.

## Mini Projects

1. Personal introduction page with semantic structure, headings, formatted text, links, and images.
2. Simple article page with header, main content, aside, footer, and CSS styling.
3. Study notes page for HTML and CSS topics with sections, lists, and visual spacing using the box model.
4. Documentation-style page that demonstrates selectors, cascade, inline styles, and overriding behavior.
5. Small multi-section landing page that combines semantic HTML, text formatting, and CSS basics.

## Day 3 Tag Mastery Tasks (Based on `types-of-tags.html` and `image-tag.html`)

1. Build an "All Basic Tags" showcase page.
   Requirements:
   - Add `h1` to `h6` headings with meaningful text.
   - Write at least 3 paragraphs and use `span` inside one paragraph to style one important word.
   - Use one `div` to group a mini "About" section.
   - Add 2 links using `a`: one opens in same tab, one with `target="_blank"`.
   - Add one ordered list (`ol`) with 3 items and one unordered list (`ul`) with 3 items.
   - Add a `button` with text explaining what it would do.
   - Use one `br` intentionally inside a paragraph to show a line break.
     Deliverable:
   - A single HTML file named `task1-tags-showcase.html`.

2. Create an image practice gallery using `<img>` correctly.
   Requirements:
   - Add at least 5 images using `img`.
   - Include one direct URL image, one fixed-size image (`width` and `height`), one broken image example, one clickable image wrapped in `a`, and one responsive image (`style="width: 100%; height: auto"`).
   - Every image must have meaningful `alt` text.
   - Group each example in its own `div` and label each section with `h2`.
   - Add one short `p` below each image describing what the example demonstrates.
     Deliverable:
   - A single HTML file named `task2-image-gallery.html`.

3. Build a user input demo page with form elements.
   Requirements:
   - Create one `form` containing:
     - 2 text `input` fields (first name and last name with placeholders)
     - 1 `input` each for `number`, `color`, `file`, `datetime-local`
     - 1 `input` radio option group (at least 2 choices)
     - 2 `input` checkboxes
     - 1 `textarea`
     - 1 `select` with at least 3 `option` items
     - 1 submit `button`
   - Use headings and paragraphs to explain each section.
   - Add one paragraph explaining 3 attributes used in your page (for example: `href`, `type`, `id`, `class`, `alt`, `target`, `placeholder`).
     Deliverable:
   - A single HTML file named `task3-form-lab.html`.

### Optional Extension

1. Add IDs to each major section and create a small jump menu at the top using anchor links.
2. Apply internal CSS to improve readability while keeping HTML structure clear.
3. Replace one non-semantic `div` with a semantic container (`section` or `article`) and explain why.
