// ===== Interactive Button Features =====
const colorBtn = document.getElementById('colorBtn');
const toggleTextBtn = document.getElementById('toggleTextBtn');
const toggleText = document.getElementById('toggleText');

// Change background color randomly
colorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Toggle text visibility
toggleTextBtn.addEventListener('click', () => {
    if(toggleText.style.display === 'none') {
        toggleText.style.display = 'block';
    } else {
        toggleText.style.display = 'none';
    }
});

// ===== Slider Interaction =====
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

slider.addEventListener('input', () => {
    sliderValue.textContent = slider.value;
});

// ===== Custom Form Validation =====
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation checks
    if(name === "" || email === "" || password === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
        return;
    }

    if(!email.includes('@') || !email.includes('.')) {
        formMessage.textContent = "Please enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    if(password.length < 6) {
        formMessage.textContent = "Password must be at least 6 characters!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
});
