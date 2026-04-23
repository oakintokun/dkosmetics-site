document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameField = document.getElementById("name");
    const phoneField = document.getElementById("phone");
    const emailField = document.getElementById("email");
    const commentsField = document.getElementById("comments");

    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");
    const commentsError = document.getElementById("comments-error");

    function hideAllErrors() {
        nameError.style.display = "none";
        phoneError.style.display = "none";
        emailError.style.display = "none";
        commentsError.style.display = "none";
    }

    hideAllErrors();

    form.addEventListener("submit", function (event) {
        hideAllErrors();
        let isValid = true;

        // Name: required
        if (nameField.value.trim() === "") {
            nameError.style.display = "block";
            nameField.focus();
            nameField.select();
            isValid = false;
        }

        // Phone: 10 digits
        const phonePattern = /^\d{10}$/;
        const cleanedPhone = phoneField.value.replace(/\D/g, "");
        if (isValid && !phonePattern.test(cleanedPhone)) {
            phoneError.style.display = "block";
            phoneField.focus();
            phoneField.select();
            isValid = false;
        }

        // Email: basic regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (isValid && !emailPattern.test(emailField.value.trim())) {
            emailError.style.display = "block";
            emailField.focus();
            emailField.select();
            isValid = false;
        }

        // Comments: required
        if (isValid && commentsField.value.trim() === "") {
            commentsError.style.display = "block";
            commentsField.focus();
            commentsField.select();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
