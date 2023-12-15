# Task 4 Web Basic (JavaScript)

## Key Features

###   Logo Rotation

Clicking on the logo triggers a 360-degree rotation animation.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/rotate-logo.gif">

###  Password Visibility Toggle

A checkbox enables users to toggle password visibility in the input field. This function dynamically changes the password input field's type to either show or hide the entered characters based on the checkbox state.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/show-password.gif">

### Login Form Validation

Username and password input validation and caps lock warning.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/input-validation.gif">

User cant access about page without inputing valid username and password. Will display error messages prompting them to correct their input.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/login-validation.gif">

- **Event Listeners:**
The `validateUsername` function is called when there's an 'input' event on the username field, `validatePassword` is called on 'input' events on the password field, and `checkCapsLock` is triggered when the user releases a key ('keyup' event) in the password field

- **Validate Login Function (`validateLogin`):**
Called when attempting to submit the login form. It prevents the default form submission behavior, validates the username and password, and redirects to about page if both are valid.

- **Username Validation Function (`validateUsername`):**
Checks if the username is empty and displays an error message with a red box shadow if it's not valid.

- **Password Validation Function (`validatePassword`):**    
Validates the password, checking for criteria such as at least one uppercase letter, one lowercase letter, one number, and one symbol. Displays error messages and red box shadow if the password is not valid.

-  **Check Password Validation Function (`isPasswordValid`):**
Checks if the password meets certain conditions (at least one uppercase letter, one lowercase letter, one number, and one symbol). Will return error message if the password doesn't meet the criteria.
    
- **Check Caps Lock Function (`checkCapsLock`):**
Check whether the caps lock key is active and displays a warning if it is.

### Dynamic Theming (Toggle Light/Dark Mode)

The application allows users to switch between light and dark modes using a toggle switch. This functionality is stored in local storage, ensuring the preferred mode is retained upon revisits. 

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/mode-switch.gif">

Dark mode  styles are defined under `:root[data-theme="dark"]` to change the color scheme when dark mode is enabled. CSS variables are used for easy theming, allowing for a quick switch between dark and light modes.

The JavaScript code initializes the state based on the value stored in local storage, updates the theme accordingly, and listens for a click event on the toggle switch to toggle between the modes. The state is saved in local storage to persist the user's preference across page reloads.

### Animations

Several keyframe animations, such as fadeAnimation, slideHorizontal, slideInLeft, and slideInRight, are defined for various elements.

The page includes animated sections that trigger animation effects when scrolled into view. The animations utilize the Intersection Observer API to detect when elements become visible in the viewport, triggering specific animations like sliding in from the left or right with opacity changes.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/animation.gif">

### Media Queries (Responsive Web)

The styling is adjusted for different screen sizes using media queries.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/responsive.gif">
