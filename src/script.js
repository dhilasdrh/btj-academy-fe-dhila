// run script after the DOM has fully loaded
$(document).ready(function() {
    /* ------- ROTATE LOGO 360 DEGREE ------ */
    let degree = 0;
    $('#logo-img').on('click', function() {
        degree += 360;
        $(this).css({'transform': `rotate(${degree}deg)`, 'transition-duration': '1s'});
    });

    /* ------- SHOW PASSWORD CHECKBOX ------ */
    $('#show-password').on('change', function() {
        passwordInput.attr('type', this.checked ? 'text' : 'password');
    });

    /* ---------- INPUT VALIDATION --------- */
    var usernameInput = $('#username');
    var passwordInput = $('#password');
    var usernameError = $('#error-username');
    var passwordError = $('#error-password');

    let username = "";
    let password = "";

    usernameInput.on('input', validateUsername);
    passwordInput.on('input', validatePassword);

    // caps lock warning
    passwordInput.on('keyup keydown', function(e){
        const capsLockOn = e.originalEvent.getModifierState('CapsLock');
        $('.capslock-warning').toggle(capsLockOn);
    });
    
    function validateUsername() {
        username = $.trim(usernameInput.val());
        const errorMessage = (username == "") ? "Please fill the username correctly." : "";

        usernameError.text(errorMessage);
        usernameError.toggle(!!errorMessage);
        usernameInput.css('box-shadow', errorMessage ? 'var(--input-error-box-shadow)' : 'none'); 
    }

    function validatePassword() {
        password = $.trim(passwordInput.val());
        const isValid = isPasswordValid(password);
        const errorMessage = (password == "") ? "Please fill the password correctly." : (!isValid && passwordError.text());
        
        passwordError.text(errorMessage);
        passwordError.toggle(!!errorMessage);
        passwordInput.css('box-shadow', errorMessage ? 'var(--input-error-box-shadow)' : 'none'); 
    }
    
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

    /* ---------- LOGIN VALIDATION --------- */
    $('#login-form').submit(validateLogin);
    $('#about-link').click(validateLogin);

    function validateLogin(e) {
        e.preventDefault();
        validateUsername();
        validatePassword();   

        if (username !== "" && password !== "" && passwordError.css('display') === 'none') {
            authenticateUser();
        }
    }

    // fetch data from API and authenticate user 
    const authenticateUser = async () => {
        const url = 'https://dummyjson.com/users';
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const isValidUser = data.users.some(user => user.username === username && user.password === password);
        
                if (isValidUser) {
                    // find the user object
                    const user = data.users.find(user => user.username === username && user.password === password);
                    
                    // get full name from user object
                    const fullName = `${user.firstName} ${user.lastName}`;
        
                    // show welcome alert with user full name
                    alert(`Login Successful! Welcome ${fullName}`);

                    // redirect to About page
                    window.location.href = 'about.html';
                } else {
                    // alert("Invalid Username and Password");
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


    /* ------ TOGGLE DARK/LIGHT MODE TOGGLE ------- */
    
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

    
   /* ------ ANIMATED SECTION & SCROLL UP/DOWN BUTTONS ------ */
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

    // scroll to the top when the scroll-top button is clicked
    $(".scroll-top").on("click", function () {
        $(".main-container").animate({ scrollTop: 0 }, 500);
        $(".scroll-top").hide(); // hide the button again after reaching the top
        $(".scroll-bottom").show();
    });

    // scroll to the bottom when the scroll-bottom button is clicked
    $(".scroll-bottom").on("click", function () {
        $(".main-container").animate({ scrollTop: $(document).height() }, "slow");
        $(".scroll-bottom").hide(); // hide the button again after reaching the bottom
        $(".scroll-top").fadeIn(200);
    });


    /* -------- Additional jQuery Effects -------- */

    $("#prompt-login").hide(); // initially hide prompt login 
    $("#prompt-login").slideDown(700); // display prompt login by sliding it down

    // $("#name").slideDown();


    // smoothly shrinking the image by adding space (padding) around them
    $(".img-login").animate({
        padding: '15px'
    }, 700); 


    // animated letter spacing for logo title (Welcome)
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
        }}); 


    // show profile img
    $(".profile-img").show(500);


    // typing and fade-in fade-out effect for name
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

});