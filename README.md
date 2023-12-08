# Task 2 Web Basic

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
-   `#navbar`: styling the navigation bar within the header, applying a secondary background color, white text, and centered content.
-   `#navbar > a`: styling navigation links with white text and padding.
-   `#navbar > a:hover`: change color on hover for navbar link to the accent color.
-   `#navbar > a.active`: highlight the active link in the navbar with primary color, increased font weight, and a bottom border.
-   `h1`: styling the main heading with zero margin, padding, and a white background.

### Body

-   `body`: styling for the body, including font family, background color, flex properties, etc.
-   `#main-container`: styling for the main content container, with a white background, rounded corners, box shadow, padding, margin.
-   `.welcome-login`: styling for the welcome message, with left alignment and margin.
-   `#login-container`: styling for the login form container, with inline-block, left alignment, box shadow, and padding.
-   `label, input, button`: styling for form elements with specific width, display, margin, and padding.
-   `input[type="text"], input[type="password"]` : styling for text and password input fields, including margin, border, padding, and border radius.
-   `input:focus`: styling for the focus state of input fields, with a border color change and a box shadow.
-   `#login-button, #login-button:hover`: styling the login button with a primary background color and a darker shade on hover. button styling for the login button, including background color, text color, width, margin, padding, border, and border radius.
- `label`: styles for labels, including text alignment, color, and font size.
-   `#img-login`: styling the login image with display, centered margin, and a maximum width.
-   `.quote`: center-aligns and italicizes the text within the quote.
-   `footer`: styling the footer with a secondary background color, white text, padding, and center alignment.

### About Me

-   `#profile-container` : styling the profile container with flex display, centered alignment, padding, width, background color, margin, and box shadow.
-   `#profile-img`: styling the profile image container with flex and padding. allowing the profile image to grow or shrink within the flex container
-   `#profile-img img`: make the profile picture rounded with max-width, height, and border-radius
-   `figcaption`: styling the image caption with small font size, centered-align text, italic font style, and color.
-   `#profile-description`: styling the profile description with flex, padding, and background color.
-   `#profile-description h2`: styling the profile heading with a secondary color.
-   `mark`: highlight marked text with a yellow background covering the lower half of the text.
-   `article[id="profile-description"] > p`: styling paragraphs with specific line height.
-   `#profile-description > p > em`: styling emphasized text with the primary color and bold font weight.
-   `address`: styling the address section with italic font style and small font size.
-   `#profile-description aside`: styling the profile buttons layout with margin and flex wrap.
-   `#profile-description button`: styling buttons within the profile description, including padding, margin, cursor, color, border, border-radius, box shadow, font family, and width.
-  `#profile-description button:hover`: enhances box shadow on hover for profile description buttons.
-   `#btn-github, #btn-email`: styling background colors for button github and email.

### Education 

-   `fieldset`: styling fieldset with container box, rounded corners, padding, no border, flex display, and a subtle shadow.
-   `fieldset legend`: styling title within the fieldset/container (Education & Work Experiences), including color, padding, font size, border radius, margin, text transformation, and color.
- `.education-list` : styling education list, including list style type and font weight.
-  `.education-list li`: styling list items in the education section with margin, line height, flex display, and add dashed border-bottom.
-  `.education-list li:before`: styling the icon before education list items, including font family, content, color, and margin.
- `.education-list li i` : styling the field of study within education list items, including font style, color, margin, font weight, and display.
-  `.education-list li:hover`: hover effect for education list items, including background color and cursor.
-  `.education-list li:nth-child(odd)`, `.education-list li:nth-child(even)` : styling for odd and even education list items color.

### Work Experiences

 - `.grid-container` : use grid container layout, including display, grid-template-columns, and gap.
-   `.work-experience`: styling work experience cards, including border, border-radius, padding, box shadow, display, flex direction, and transition.
-   `.work-experience:hover`: adds a blue box shadow on hover for work experience sections.
-   `.work-experience h4`: styling work experience headings with a specific font size, margin, and color.
-   `.work-experience hr`: styling horizontal line within work experience sections. including border, width, height, and background image.
-   `.work-experience h4 + em`: additional styling for emphasized text following the h4 in work experience details, including font size, color, and font style.
-   `.work-experience p`: styling paragraphs within work experience sections with margin, font size, and line height.
-   `.work-experience p ~ span`: styling span following a paragraph within work-experience (for work duration), including margin, color, font size, font style, and italic.

### Motto

 - `#motto`: styling the motto section with padding and center alignment.

## Screenshots (Task 2)

### Login Page
<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/ss-css-login.png">

### About Me Page
<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/ss-css-about.jpg">
