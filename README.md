
# Practical Exercise 1 - Basic Web Programming 

> Create About Page with Your Profile.
> 
> Use as many HTML tag as you can and add your profile about:
>  - Image Profile
>  - Name
>  - One paragraph about yourself
>  - Education and Work Experience
>  - Your Motto in Life

## HTML Structure and Elements

### Basic  HTML Structure and Elements
Below is basic HTML Structure and Elements that used in both Home (login) and About page. 

 - Document Type Declaration
	 - `<!DOCTYPE html>` : declares the document type and version of HTML being used (HTML5).
 - HTML Root Element
	 - `<html>` : indicate the beginning and end of an HTML element. displays visible part of the HTML document. Attribute `lang` specifies the language as English.
 - Head Element
	 - `<head>` : to define the head section of HTML document. the content inside the `<head>` tag is not displayed on the actual webpage, it's for the browser's use in understanding and processing the page.
	 - `<meta>` : contains meta-information about the document, including character set, viewport configuration, and the title of the web page.
	 - `<title>` : title of the web page. displayed in the tab browser.
 - Body (`<body>`) : to define the main content present inside an HTML page, such as heading, paragraph, image, etc.
 - Header (`<header>`): to define the document's header section.
 - Heading (`<h1>`): to define main heading of the page. 
 - Paragraph (`<p>`) : to define a paragraph.
- Navbar 
	-  `<nav>` : a navigation menu. contains navigation links to the home and about pages.
	- `<a>` : to define a hyperlink. attribute `href` specifies the destination URL. when clicked, directs the user to `index.html` or `about.html` page. 
 - Footer (`<footer>`) : displays a footer with copyright information.
 
### Content Elements in index.html (login page) 
HTML Structure and Elements that used in the main content in index.html (login page):

- Heading(`<h2>`) : defines subheading (heading level 2) with text "Welcome to Our Landing Page". 
- Paragraph (`<p>`): provides a brief message/instruction prompting user to login.
- Form
	- `<div>` : used as a container to wrapped the login form. 
	- `<form>` : used to create an HTML form that allows users to input data. It wraps the form controls (label, input, button). The `action` attribute pointing to where the form data will be submitted.
	- `<label>` : to associate a label with their respective form control/input field (Username and Password). The `for` attribute is set to the `id` of the related form control, to helps screen readers and improves accessibility.
	- `<input>`: define input field that allow user to enter data for username and password. used three attributes:
		- `type`: specifies the type of input field (text, password, etc.). `type="text"`used to create single-line text input, and `type="password"` to create password input where the entered characters are masked.
		- `placeholder`: provides a short hint that describes the expected value of the input field.
		- `required`: makes sure the user enters information before submitting the form. 
	- `<button>` : clickable "Submit" button to triggers the form submission.
- Image (`<img>`) : to embed and display image. used three attributes:
	- source (`src`) : specifies the URL or file path of the image.
	- alternative text (`alt`): provides alternative text that is displayed if the image cannot be loaded or for accessibility purposes (screen readers).
	- width (`width`): specifies the width of the image in pixels.
- Article (`<article>`) : contains a quote within a paragraph (`<p>`).

### Content Elements in about.html (About Me page) 
HTML Structure and Elements that used in the main content in about.html (About Me page): 

 - Header (`<header align="center">`): contains a centered welcome header at the top of the page.
 - Navbar (`<nav align="center">`): navigation bar with centered links (`<a>`) to Login (`href="index.html`") and About Me page (`href="about.html"`)
 - Horizontal Line (`<hr width="80%">`): draws a horizontal line with a width of 80%.
 - Profile Section
	 - `<div>`: Container for profile information.
	 - Table  
		 - `<table>`: defines a table container for organizing profile details. the table has attribute`border="0"`, indicating no border.
		 - inside the table there's a single row ( `<tr>`).
		 - within that row, there are two cells (`<td>`):
			 - The first cell contains profile image (`<img>`).`<figure>`used to wrapped/group together an image (`<img>`) and its caption (`<figcaption>`).
			 - The second cell contains an `<article>` element with a heading group (`<hgroup>`), a subheading (`<h2>`) for name, a paragraph (`<p>`) for profile description, an `<address>` element with contact details, and an `<aside>` element that represents content aside from the main content with buttons (`<button>`) for "Visit GitHub" and "Email Me" actions. The button has attribute `onclick` attribute that triggers JavaScript function that directed user to the GitHub profile and another to initiate an email with a predefined subject and message. 
	 - Text Formatting Element:
  		- `<u>`: underlined text.
  		- `<mark>`: highlight or mark portions of text.
  		- `<strong>`: indicates strong importance, written in bold.
		- `<em>`: emphasizes text, written in italic.
  		- `<s>`: represents deleted or irrelevant text, often with a strikethrough.
   		- `<abbr>`: used for abbreviation or acronym. includes `title` attribute to provide the full meaning, and browsers often display this information as a tooltip when users hover over the abbreviated text.
 - Education Section
	 - `<section>`: represents a thematic grouping of content, often used to divide a webpage into sections.
	 - `<fieldset>`: to semantically group related form elements (Education) together and provide a visual and organizational structure to the form.
	 - `<legend>`: provides caption/title for the `<fieldset>` (Education).
	 - `<h3>`: defines subheading (heading level 3) for Education.
	 - `<ul>` and `<li>`: create a bulleted list of educational levels. presented in an unordered list (`<ul>`) with list items (`<li>`).
	 - `<i>`: italicizing specific fields of study.
 - Work Experience Section
	 - `<section>`: represents a thematic grouping of content.
	 - `<fieldset>`: to semantically group related form elements (Work Experiences) together and provide a visual and organizational structure to the form.
	 - `<legend>`: provides caption/title for the `<fieldset>` (Work Experiences).
	 - `<h3>`: defines subheading (heading level 3) for Work Experiences.
	 - Table
  		- `<table cellspacing="5"`: table container with space between cells in the table set to "5".
   		- `<thead>`, `<tbody>`, `<tfoot>`: table sections representing the header, body, and footer of the table. 
		 - `<thead align="left">` : align the text content within the header cells to the left.
		 - `<tr>`: table rows, containing cells (`<th>` for headers and `<td>` for data).
		 - `<th>`: table header cells containing job titles.
		 - `<td>`: table data cells containing company names, job descriptions/responsibilities, and duration of each work experiences. attribute`valign="baseline"`used to specify vertical alignment to the baseline for specific cells.
 - Motto Section
	 - `<section align="center">`: represents a thematic grouping of content (motto section). content within the section horizontally centered.
	 - `<br>`: line break.
	 - `<blockquote>`: indicates a section that is a longer quotation, often styled with indentation. contains motto in life and a quote.
	 - `<h2>`: subheading (heading level 2) for the motto.
	 -   `<u>`: underlined text. used  to underline the motto.
	-   `<em>`: emphasized text. used for italicizing a quote.
	-   `<q>`: a short inline quotation. browser normally insert quotation marks around the quotation.
	-   `<span>`: defines a section of content to apply additional styling. used here to represent the author's name.

## Screenshot
<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/web-basic-day1/screenshot/ss-about-page.jpg">
