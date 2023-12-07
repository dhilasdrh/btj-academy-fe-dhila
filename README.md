# Practical Task 2 - Basic Web Programming

> - Update the About Page from previous meeting.
>-  Add your CSS.
>- Use as many CSS property as you can.

## CSS Properties 

### Root Variables

The `:root` pseudo-class is used to define global CSS variables that can be reused throughout the stylesheet for consistent theming.

-   `--primary-color`: Main color for headers and buttons.
-   `--secondary-color`: Secondary color used in the navigation bar and footer.
-   `--accent-color`: Accent color for interactive elements.
-   `--highlight-color`: Highlight color for active or selected elements.
-   `--background-color`: Background color for the main container.
-   `--text-color`: Text color for the body.
-   `--box-shadow-color`: Color for box shadows.
-   `--hover-glow-color`: Color for the hover effect on buttons.

### Header 

-   `header`: styling for the header section, with a primary background color (`--primary-color`), white text, and center-aligned content.
-   `#navbar`: styling the navigation bar within the header, applying a secondary background color (`--secondary-color`), white text, and centered content.
-   `#navbar > a`: styling navigation links with white text and padding.
-   `#navbar > a:hover`: adds a color change on hover to the accent color (`--accent-color`).
-   `#navbar > a.active`: styling the active navigation link with a bolder font and a bottom border in the highlight color (`--highlight-color`).
-   `h1`: styling the main heading with zero margin, padding, and a white background.

### Body

-   `body`: styling for the body, including font family, background color (`--background-color`), and flex properties
-   `#main-container`: styling for the main content container, with a white background, rounded corners, box shadow, and padding.
-   `.welcome-login`: styling for the welcome message, with left alignment and margin.
-   `#login-container`styling for the login form container, with inline-block, left alignment, box shadow, and padding.
-   `label, input, button`: styling for form elements with specific width, display, margin, and padding.
-   `input:focus`: styling for the focus state of input fields, with a border color change and a box shadow.
-   `#login-button, #login-button:hover`: styling the login button with a primary background color and a darker shade on hover.
-   `#img-login`: styling the login image with block display, centered margin, and a maximum width.
-   `.quote`: styling the quote section with center alignment and italic font style.
-   `footer`: styling the footer with a secondary background color, white text, padding, and center alignment.

### About Me

-   `#profile-container, .profile-container`: styling the profile container with flex display, centered alignment, background color, and padding.
-   `#profile-img`: styling the profile image container with flex and padding.
-   `#profile-img img`: styling the profile image with a maximum width, border-radius for a rounded appearance.
-   `figcaption`: styling the image caption with small font size, italic font style, and color.
-   `#profile-description`: styling the profile description with flex, padding, and background color.
-   `#profile-description h2`: styling the profile heading with a secondary color.
-   `mark`: styling highlighted text with a gradient background.
-   `#profile-description p`: styling paragraphs with a specific line height.
-   `#profile-description em`: styling emphasized text with the primary color and bold font weight.
-   `#profile-description address`: styling the address section with italic font style and small font size.
-   `#profile-description aside`: styling the profile buttons with margin and flex wrap.
-   `#profile-description button, #profile-description button:hover`: styling buttons with padding, margin, and a hover effect.
-   `#btn-github, #btn-email`: styling specific buttons with background colors.

### Education and Work Experience

-   `fieldset`: styling fieldsets with border-radius, padding, no border, and a flex display.
-   `fieldset legend`: styling fieldset legends with padding, border-radius, and a specific color.
-   `.education-list li`: styling list items in the education section with margin, line height, and flex display.
-   `.work-experience`: styling work experience sections with borders, border-radius, padding, box shadow, and flex display.
-   `.work-experience:hover`: adds a box shadow on hover for work experience sections.
-   `.work-experience h4`: styling work experience headings with a specific font size and color.
-   `.work-experience hr`: styling horizontal rules within work experience sections.
-   `.work-experience em`: styling italicized text within work experience sections.
-   `.work-experience p`: styling paragraphs within work experience sections with margin and line height.
-   `.work-experience span`: styling spans within work experience sections with specific colors and font styles.

### Motto

 - `#motto`: styling the motto section with padding and center alignment.
