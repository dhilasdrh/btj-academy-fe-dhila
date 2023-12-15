# Task 5 Web Basic (jQuery)

>  - Update the JS script created previously using jQuery
>  - Use Fake API when submitting login page
>      - https://dummyjson.com/docs/users
>      - https://dummyjson.com/docs/auth
>  - When the response is 200 from the API then redirect to the about page.
>  - Update the About Page from previous meeting.
>  - Modify js script using jQuery, add some jQuery effects, be creative!

## Results

###   Logo Rotation

when the `"logo-img" `element is clicked, it rotates the logo image by 360 degrees, creating a spinning or rotating animation effect. The `css()` method is used to apply the rotation using the `transform` property and a transition effect with a duration of 1 second.

     let degree = 0;
     $('#logo-img').on('click', function () {
            degree += 360;
            $(this).css({ 'transform': `rotate(${degree}deg)`, 'transition-duration': '1s' });
        });
    });

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/rotate-logo.gif">

###  Show Password Checkbox
A checkbox enables users to toggle password visibility in the input field. This function dynamically changes the password input field's type to either show or hide the entered characters based on the checkbox state.

Utilizes `on('change')` to toggle the `type` attribute of the password input field using `attr()`, switching between 'text' (showing the password) and 'password' (hiding the password) based on checkbox status.

    $('#show-password').on('change', function() {
        passwordInput.attr('type', this.checked ? 'text' : 'password');
    });

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/show-password.gif">

## Login Validation

User cant access about page without inputing valid username and password. Will display error messages prompting them to correct their input. 

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/login-validation.gif">

Function `validateLogin()` prevents the default form submission behavior, validates the username and password, and redirects to About page if user data is found. This function is invoked both when the login form is submitted (`submit()`) and when the "About" link is clicked (`click()`). 

    $('#login-form').submit(validateLogin);
    $('#about-link').click(validateLogin);

    function validateLogin(e) {
        e.preventDefault(); // prevent Default Form Submission
        validateUsername();
        validatePassword();   
		
		// check if both username and password are filled and there are no password validation errors
        if (username !== "" && password !== "" && passwordError.css('display') === 'none') {
            authenticateUser();
        }
    }

## Username & Password Input Validation

To validate user input, use `input` event listeners to to trigger validation functions for username and password inputs.  The `validateUsername` function is called when user types into the username input on the username input field, and `validatePassword` is called when user types into the password input field. 

    usernameInput.on('input', validateUsername);
    passwordInput.on('input', validatePassword);

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/input-validation.gif">

### `validateUsername()`

 Function (`validateUsername`) checks if the username is empty and displays an error message with a red box shadow if it's not valid.

    function validateUsername() {
        username = $.trim(usernameInput.val());
        const errorMessage = (username == "") ? "Please fill the username correctly." : "";

        usernameError.text(errorMessage);
        usernameError.toggle(!!errorMessage);
        usernameInput.css('box-shadow', errorMessage ? 'var(--input-error-box-shadow)' : 'none'); 
    }
	
The `.text()` method sets the text content of `usernameError`, `.toggle()` dynamically shows or hides it based on the existence of an error message, and the `.css()` method adjusts the box-shadow property of `usernameInput` to signal errors visually.

### `validatePassword()`

Similar with `validateUsername()`, function `validatePassword()` validates the password input, checking for criteria such as at least one uppercase letter, one lowercase letter, one number, and one symbol. Displays error messages and red box shadow if the password is not valid.
 
    function validatePassword() {
        password = $.trim(passwordInput.val());
        const isValid = isPasswordValid(password);
        const errorMessage = (password == "") ? "Please fill the password correctly." : (!isValid && passwordError.text());
        
        passwordError.text(errorMessage);
        passwordError.toggle(!!errorMessage);
        passwordInput.css('box-shadow', errorMessage ? 'var(--input-error-box-shadow)' : 'none'); 
    }


### Check Password Validation Function (`isPasswordValid`)

Checks if the password meets certain conditions (at least one uppercase letter, one lowercase letter, one number, and one symbol).  Will return error message if the password doesn't meet the criteria.

    function isPasswordValid(password) {
        var conditions = [
            { regex: /[A-Z]/, message: 'one uppercase letter' },
            { regex: /[a-z]/, message: 'one lowercase letter' },
            { regex: /\d/, message: 'one number' }
            // { regex: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/, message: 'one symbol' }
        ];

        var unmetConditions = conditions.filter(function(condition) {
            return !condition.regex.test(password);
        });

        if (unmetConditions.length > 0) {
            var errorMessage = "Password need to have " + unmetConditions.map(function(cond) {
                return cond.message;
            }).join(', ').replace(/,([^,]*)$/, unmetConditions.length > 2 ? ', and$1' : ' and$1') + '.';

            passwordError.text(errorMessage);
            return false;
        } else {
            return true;
        }
    }
The code uses the `map` function to extract these messages into an array. The `join(', ')` method concatenates these messages with commas in between. The `replace` method is then employed to replace the last comma in the resulting string. If there are more than two unmet conditions, it replaces the last comma with ', and', forming a grammatically correct list. Otherwise, it simply appends 'and' before the last condition.

example: 

 - if there is 1 unmet condition --> "one uppercase letter"
 - if there are 2 unmet condition --> "one uppercase letter and one lowercase letter"
 - if there are more than 2 unmet condition --> "one uppercase letter, one lowercase letter, and one number."

    
### Check Caps Lock Function (`checkCapsLock`):

Check whether the caps lock key is active and displays a warning if it is. The caps lock warning is triggered using the jQuery `keyup` and `keydown` methods. 

    // Check Capslock
    passwordInput.on('keyup keydown', function(e){
        const capsLockOn = e.originalEvent.getModifierState('CapsLock');
        $('.capslock-warning').toggle(capsLockOn);
    });

Use `toggle()` method to show or hide them based on the value of `capsLockOn`. If `capsLockOn` is true (Caps Lock is active), the warning is displayed; otherwise, it is hidden.

## User authentication  (`authenticateUser`):

Authenticating users via an API fetch (`fetch()`). When the API responds with status code 200 (ok), it will check if the provided username and password match any user data fetched from the API.

    const authenticateUser = async () => {
           const url = 'https://dummyjson.com/users';
           try {
               const response = await fetch(url);
               if (response.ok) {
                   const data = await response.json();
                   const isValidUser = data.users.some(user => user.username === username && user.password === password);
       
               if (isValidUser) {
                   // find user object & full name
                   const user = data.users.find(user => user.username === username && user.password === password);                
                   const fullName = `${user.firstName} ${user.lastName}`;
       
                   // show welcome alert with user full name
                   alert(`Login Successful! Welcome ${fullName}`);
                   window.location.href = 'about.html';
               } else {
                   $('#invalid-data-message').show(500);
               }
           } else {
               throw new Error('Failed to fetch data');
           } 
       } catch (error) {
           console.error('Error fetching data:', error);
           alert('An error occurred during login. Please try again later.');
       }
    };

If username & password found (match with data in API), the user is considered authenticated and granted access, then will displays user's full name (retrieve from data API) and welcome alert using `alert()` then redirects to the About page. 

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/login-success.JPG">

If the login is invalid (username and/or password not found), it displays an error message using jQuery `show()` effect.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/invalid-data.JPG">

## Toggle Light/Dark Mode

The web allows users to switch between light and dark modes using a toggle switch. This functionality is stored in local storage, ensuring the preferred mode is retained upon revisits. Dark mode  styles are defined under `:root[data-theme="dark"]` to change the color scheme when dark mode is enabled. CSS variables are used for easy theming, allowing for a quick switch between dark and light modes.
   
    /* Dark mode */
    :root[data-theme="dark"] {
    	--mark-text-color: #dcdbf9;
        --primary-color: #636aee;
        --secondary-color: #9a97f3;
        --accent-color: #e1e8ed;
        .......
    }

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/mode-switch.gif">

The jQuery code initializes the state based on the value stored in local storage, updates the theme accordingly, and listens for a click event on the toggle switch to toggle between the modes. The state is saved in local storage to persist the user's preference across page reloads. Uses `click()` and `change()` to switch between light and dark themes. 

    // load theme mode state from localStorage
    const darkModeToggle = $('#dark-mode-toggle');
    const rootElement = $(':root');
    const initialDarkModeState = localStorage.getItem('darkMode') === 'true';
    darkModeToggle.prop('checked', initialDarkModeState);
    rootElement.attr('data-theme', initialDarkModeState ? 'dark' : '');

    $('.slider').click(function () {
        const newModeState = !darkModeToggle.is(':checked');
        darkModeToggle.prop('checked', newModeState).trigger('change');
        saveDarkModeState(newModeState);
    });

    darkModeToggle.on('change', function () {
        const isDarkMode = darkModeToggle.is(':checked');
        rootElement.attr('data-theme', isDarkMode ? 'dark' : '');
        saveDarkModeState(isDarkMode);
    });

    function saveDarkModeState(isDarkMode) {
        localStorage.setItem('darkMode', isDarkMode);
    }

##  Effect & Animation

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/animation-1.gif">

### Prompt Login

the prompt login is initially hidden and then displayed by sliding down using the jQuery `hide()` and `slideDown()` methods.

    $("#prompt-login").hide(); // initially hide prompt login
    $("#prompt-login").slideDown(700); // display prompt login by sliding it down

### Shrinking Image

the login image smoothly shrinks by adding padding using the jQuery `animate()` method.

    $(".img-login").animate({ padding: '15px' }, 700); 

### Animated Section & Scroll Top/Bottom Buttons

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/animation-2.gif">

the effects applied to different sections when they come into view using the jQuery `animate()` method.

    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

    $(".animated-section").each(function () {
        observer.observe(this);
    });

    // Initial state: hide scroll-up and scroll-down buttons
    $(".scroll-top, .scroll-bottom").hide();

    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                switch (entry.target.id) {
                    case "section-profile":
                        $(".scroll-bottom").show();
                        $(".scroll-top").hide();
                        break;
                    case "section-education":
                        // fade in and slide in from left
                        $(entry.target).animate({ opacity: 1, left: 0 }, 500);
                        break;
                    case "section-work":
                        // fade in and scale up
                        $(entry.target).animate({ opacity: 1, scale: 1 }, 500);
                        break;
                    case "section-motto":
                        // fade in and slide in from left
                        $(entry.target).animate({ opacity: 1, right: 0 }, 500, function () {
                            // show the scroll-top button when the "section-motto" is reached
                            $(".scroll-top").fadeIn(200);
                            $(".scroll-bottom").hide();
                        });
                        break;
                }
                observer.unobserve(entry.target);
            }
        });
    }

Intersection Observer API was used to create an `observer` instance that monitors the visibility of elements with the class "animated-section." The `handleIntersection` function is called when these elements intersect with the viewport. 

jQuery effect `animate()` used to apply animations based on the specific sections in view. It is employed to create dynamic visual effects, such as fading in, sliding in, or scaling up elements. It also used `show()` and `hide()` to dynamically control the visibility of button scroll top and scroll down with `fadeIn()` effect. When the viewport reach `section-profile`  (top of the page), the code executes `$(".scroll-bottom").show()`, making the scroll-bottom button visible. And when it reach `section-motto` (bottom of the page),  `$(".scroll-top").show()` will be executed, making the scroll-top button visible. 

### Animated Letter Spacing

When the logo title (Welcome) is clicked, it toggles an animated letter-spacing effect applied to text using jQuery `animate()` by dynamically adjusts the margin-left and letter-spacing properties. It also used `addClass()` and `removeClass()` to to manage the 'animated' class, enabling the script to switch between the original and modified text styles upon each click.

    $(".logo > h1").on('click', function(){
        if ($(this).hasClass('animated')) {
            // If the element has the 'animated' class, remove it and animate back to the original state
            $(this).animate({
                marginLeft: '0',
                letterSpacing: '0'
            }, 700).removeClass('animated');
        } else {
            // If the element doesn't have the 'animated' class, add it and animate
            $(this).animate({
                marginLeft: '10px',
                letterSpacing: '2px'
            }, 700).addClass('animated');
        }
     }); 

### Show Profile Image

the profile image is displayed with a fade-in effect using the jQuery `show()` method.

    $(".profile-img").show(500);

### Typing Effect for Name

the typing effect and fade-in/fade-out applied to the name using the jQuery `text`, `fadeIn`, `fadeToggle`, and `setTimeout` methods.

	var name = $("#name").text();
	var speed = 100; // 1s

    function typeWriter(text, i) {
        $("#name").text(text.substring(0, i + 1));
        
        if (i === text.length) {
            pointer.fadeToggle(speed, () => typeWriter(text, i));
        } else {
            $("#name").fadeIn(speed, () => setTimeout(() => typeWriter(text, i + 1), speed));
        }
    }
    setTimeout(() => typeWriter(name, 0), 100);

### Scroll Top/Bottom Button

This code will be executed when user click button scroll top/bottom.

    // scroll to the top when the scroll-top button is clicked
    $(".scroll-top").on("click", function () {
           $(".main-container").animate({ scrollTop: 0 }, 500);
           $(".scroll-top").hide(); // hide the button again after reaching the top
           $(".scroll-bottom").show();
       });

clicking the "scroll-top" button smoothly scrolls the "main-container" to the top, hiding the button after reaching the top and revealing the "scroll-bottom" button. 

    // scroll to the bottom when the scroll-bottom button is clicked
    $(".scroll-bottom").on("click", function () {
        $(".main-container").animate({ scrollTop: $(document).height() }, "slow");
        $(".scroll-bottom").hide(); // hide the button again after reaching the bottom
        $(".scroll-top").fadeIn(200);
    });
clicking the "scroll-bottom" button scrolls the container to the bottom, hiding the button after reaching the bottom and displaying the "scroll-top" button.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/animation-scroll-top-and-bottom.gif">

### Media Queries (Responsive Web)

The styling is adjusted for different screen sizes using media queries.

<img src="https://github.com/dhilasdrh/btj-academy-fe-dhila/blob/main/screenshot/responsive.gif">
