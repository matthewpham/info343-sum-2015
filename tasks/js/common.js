"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('o7R0Q7ptV9UP8h1W6wlG1rDWCycHc2Jpu1nyjbId', '9YMhccIVyMqXN7wx4iUSZVs2dWHMzEx13YCcLefH');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
