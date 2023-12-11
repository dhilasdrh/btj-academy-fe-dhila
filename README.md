# Task 3 Web Basic (Responsive Web)

>- Update the About Page from previous meeting. 
>- Modify your CSS with the one we learn today! 
>- Use as many CSS property as you can.

## Result 

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/task3-result.gif">

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/task3-responsive-result.gif" width="80%">

### Variables (`:root`):

-   Sets global CSS variables for various colors, text sizes, box shadows, and transition timing.

### General Styles (`*`):

Applies styles to all elements on the page.

-   `box-sizing: border-box;`: ensures that padding and border are included in the element's total width and height.
-   `font-family: 'DM Sans', sans-serif;`: sets the default font for the entire document.
-   `scroll-behavior: smooth;`: adds smooth scrolling behavior for anchor links.
-   `background-image`: applies a background image to the body.

### Main Container Styles:

-   `display: flex;`: uses flexbox for layout.
-   `justify-content`, `align-items`: centers content both horizontally and vertically.
-   `box-shadow`: adds a subtle shadow effect.

### Header Styles:

-   Flex container with space between items for the header.
-   Logo styling, including image size and header styles.
-   Navigation bar styling with links, active states, and hover effects.

### Content Container Styles:

-   Flex container for content with space between items.

### Left Container Styles:

-   Background color, box shadow, padding for the left container.
-   Styles for the login container, labels, inputs, buttons, and focus effects.
-   Emphasis on the login button hover effect.

### Right Container Styles:

-   Flex container with center-aligned items.
-   Styles for images, quotes, and paragraphs.

### Footer Styles:

-   Margin, text alignment, font size, and letter spacing for the footer.

### Profile Styles:

-   Padding, flex layout, and border radius for the profile container.
-   Styles for the profile image, description, buttons, and additional styles for various profile details.

### Education Section Styles:

-   Styles for the education section, fieldset, legend, and education list.
-   List item styling, icons, and hover effects.
-   Different styling for odd and even list items.

### Work Experiences Styles:

-   Grid container layout and gap for work experiences.
-   Card styling for work experiences with box shadow and transitions.
-   Styles for titles, emphasis, horizontal lines, descriptions, and spans.

### Motto Section Styles:

-   Padding and text alignment for the motto section.
-   Styling for the mark element within the motto section.

### Animations:

-   `@keyframes fadeAnimation`: Defines a fade-in animation.
-   `@keyframes orbit1, orbit2, orbit3`: Defines orbit animations for circles.
-   Orbiting circle styling with positioning and animation properties.

### Media Queries:

-   Adjustments for mobile screens (max-width: 700px) and desktop screens (min-width: 1000px).
-   Changes include modifications to container heights, font sizes, and layout adjustments for better responsiveness.
