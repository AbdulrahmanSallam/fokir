const nav = document.getElementById("nav");
const goTop = document.getElementById("goTop");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");
// counter
const valueDisplays = document.querySelectorAll(".counter");
const interval = 4500;
// ======== nav Change ========
let newScrollVal = 0;
window.addEventListener("scroll", function () {
    const scrollY = this.scrollY;
    (newScrollVal < scrollY) ? nav.classList.add("nav-hidden") : nav.classList.remove("nav-hidden");
    (scrollY > 0) ? nav.classList.add("bg-second-color") : nav.classList.remove("bg-second-color");
    newScrollVal = scrollY;
});
// ======== owl carousal =======
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 200,
    });
});
// ========= go top =========
goTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

// ========= typed js =========
var typed = new Typed('#typed', {
    strings: ['Developer', 'Designer'],
    typeSpeed: 60,
    loop: true,
    backSpeed: 60,
    smartBackspace: false,
});

// ========== counter ==========

valueDisplays.forEach((element) => {
    let start = 0;
    let end = parseInt(element.getAttribute("data-val"));
    let duration = Math.floor(interval / end);
    let counter = setInterval(() => {
        ++start;
        element.textContent = start;
        if (start == end) clearInterval(counter);
    }, duration)
})


// ========== validation ==========
function validation() {
    validateName(nameInput.value) ? nameError.setAttribute("hidden", "true") : nameError.removeAttribute("hidden");
    validateEmail(emailInput.value) ? emailError.setAttribute("hidden", "true") : emailError.removeAttribute("hidden");
    validateSubject(subjectInput.value) ? subjectError.setAttribute("hidden", "true") : subjectError.removeAttribute("hidden");
    validateMessage(messageInput.value) ? messageError.setAttribute("hidden", "true") : messageError.removeAttribute("hidden");
}

// name validation
const validateName = (name) => {
    return String(name).match(/^[a-zA-Z ]+$/);
};
// email validation
const validateEmail = (email) => {
    return String(email)
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/d);
};
// subject validation
const validateSubject = (subject) => {
    return String(subject).match(/^\w{5,}$/);
};
// message validation
const validateMessage = (message) => {
    return String(message)
        .match(
            /^\w{10,}$/
        );
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validation();
});

// oninput
function nameValidation(){
    validateName(nameInput.value) ? nameError.setAttribute("hidden", "true") : nameError.removeAttribute("hidden");
}
function emialValidation(){
    validateEmail(emailInput.value) ? emailError.setAttribute("hidden", "true") : emailError.removeAttribute("hidden");
}
function subjectValidation(){
    validateSubject(subjectInput.value) ? subjectError.setAttribute("hidden", "true") : subjectError.removeAttribute("hidden");
}
function messageValidation(){
    validateMessage(messageInput.value) ? messageError.setAttribute("hidden", "true") : messageError.removeAttribute("hidden");   
}






