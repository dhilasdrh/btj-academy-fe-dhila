# Practical Exercise 1 - Basic Web Programming 

Create About Page with Your Profile.

Use as many HTML tag as you can and add your profile about:
 - Image Profile
 - Name
 - One paragraph about yourself
 - Education and Work Experience
 - Your Motto in Life

## HTML Structure and Elements
This project contains two HTML files, `index.html` and `about.html`, showcasing a simple website structure for login and about me page with basic elements like headers, navigation bars, forms, images, text formatting, and more.

### Basic  HTML Structure and Elements
Below is basic HTML Structure and Elements that used in both login and about me page. 

 - Document Type Declaration
	 - `<!DOCTYPE html>` : declares the document type and version of HTML being used (HTML5).
 - HTML Root Element
	 - `<html>` : used to indicate the beginning and end of an HTML element. displays visible part of the HTML document. Attribute `lang` specifies the language as English.
 - Head Element
	 - `<head>` : used to define the head section of HTML document.
	 - `<meta>` : contains meta-information about the document, including character set, viewport configuration, and the title of the web page.
	 - `<title>` : title of the web page. displayed in the tab browser.
 - Body (`<body>`) : contains all the contents of the web page.
 - Header (`<header>`): defines the document's header section.
 - Heading (`<h1>`): represents the main heading of the page. indicating a welcoming message.
 - Paragraph (`<p>`) : defines a paragraph.
- Navbar 
	-  `<nav>` : a navigation menu. contains navigation links to the home and about pages.
	- `<a>` : defines a hyperlink. attribute `href` specifies the destination URL. when clicked, directs the user to `index.html` or `about.html` page. 
 - Footer (`<footer>`) : displays a footer with copyright information.
 
### Content Elements in index.html (login page) 
Below is HTML Structure and Elements that used in the main content in index.html (login page). 

- Heading( `<h2>`) : defines secondary most important heading. providing a welcome message.
-  Paragraph (`<p>`): provides a brief message/instruction prompting user to login.
- Form
	- `<div>` : used as a container to wrapped the login form. 
	- `<form>` : used to create an HTML form that allows users to input data. It wraps the form controls (label, input, button). The `action` attribute pointing to `about.html`, indicating where the form data will be submitted.
	- `<label>` : to associate a label with their respective form control (input field). The `for` attribute is set to the `id` of the related form control, to helps screen readers and improves accessibility.
	- `<input>`: input field that allow user to enter data for username and password. It has three attributes:
		- `type`: specifies the type of input field (text, password, etc.). `type="text"`used to create single-line text input, and `type="password"` to create password input where the entered characters are masked.
		- `placeholder`: provides a short hint that describes the expected value of the input field.
		- `required`: makes sure the user enters information before submitting the form. 
		- `<button>` : clickable submit button to triggers the form submission.
- Image (`<img>`) : to display image. included with a source (`src`), alt text (`alt`), and width (`width`) attributes. 
- Article (`<article>`) : contains a quote within a paragraph (`<p>`).

### Content Elements in about.html (About Me page) 
Below is HTML Structure and Elements that used in the main content in about.html (About Me page). 

Content Element:
 - Header (`<header align="center">`): contains a centered welcome heading.
 - Navbar (`<nav align="center">`): navigation bar with centered links (`<a>`) to Login (`href="index.html`") and About Me page (`href="about.html"`)
 - Horizontal Line (`<hr width="80%">`): draws a horizontal line with a width of 80%.
 - Profile Section
	 - `<div>`: Container for profile information.
	 - Table  
		 - `<table>`: defines a table container for organizing profile details. the table has attribute`border="0"`, indicating no border.
		 - inside the table there's a single row ( `<tr>`).
		 - within that row, there are two cells (`<td>`):
			 - The first cell contains profile image (`img`) wrapped in  `<figure>` element with a caption (`<figcaption>`).
			 - The second cell contains an `<article>` element with a heading group (`<hgroup>`), a subheading (`<h2>`) for name, a paragraph (`<p>`) for profile description, an `<address>` element with contact details, and an `<aside>` element that represents content aside from the main content with buttons (`<button>`) for GitHub and email actions. The button has attribute `onclick` attribute that triggers JavaScript function that directed user to the GitHub profile and another to initiate an email with a predefined subject and message. 
	 - Text Formatting Element:
		 - `<u>`: underlined text.
		 - `<mark>`: highlight or mark portions of text.
		 - `<strong>`: indicates strong importance, typically bold.
		 - `<em>`: emphasizes text, typically italic.
		 -  `<s>`: represents deleted or irrelevant text, often with a strikethrough.
 - Education Section
	 - `<section>`: represents a thematic grouping of content, often used to divide a webpage into sections.
	 - `<fieldset>`: to group related elements for education information together. 
	 - `<legend>`: provides caption/title for the `<fieldset>` (Education).
	 - 	`<h3>`: defines subheading (heading level 3).
	 - `<ul>` and `<li>`: create a bulleted list of educational levels.  presented in an unordered list (`<ul>`) with list items (`<li>`).
	 - `<i>`: italicizing specific fields of study.
 - Work Experience Section
	 - `<section>`: represents a thematic grouping of content.
	 - `<fieldset>`: to group related elements for work experience information together. providing a visual separation.
	 - `<legend>`: provides caption/title for the `<fieldset>` (Work Experiences).
	 - 	`<h3>`: defines subheading (heading level 3).
	 - Table
		 - `<table cellspacing="5"`: table container with space between cells in the table set to "5".
		 `<thead>`, `<tbody>`, `<tfoot>`: table sections representing the header, body, and footer of the table. 
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
	-   `<q>`: a short inline quotation. used for the quote.
	-   `<span>`: defines a section of content to apply additional styling. used here to represent the author's name.
