# Order-confirm-Message-

<img width="646" height="661" alt="image" src="https://github.com/user-attachments/assets/c089a449-f2f4-46af-88e5-e89cc39a824d" />

Step-by-Step Manual: Building a Responsive Order Confirmation Form with EmailJS
Overview

This project is a web-based order confirmation form that allows users to submit their name, phone number, and email, and then automatically sends a confirmation email using EmailJS. The project also features a modern, responsive UI using HTML, CSS, and JavaScript.

Key features:

Modern, futuristic UI (glassmorphism + floating labels + gradient buttons)

Responsive design for desktop and mobile

Real-time email sending via EmailJS v4 SDK

Status messages for success/failure

Live deployment possible via GitHub Pages

Step 1 — Plan the Project

Before coding, we decided on the requirements:

Form fields:

Full Name

Phone Number

Email Address

Button to submit: "Confirm Order"

Feedback: Status message after sending email

UI: Modern and responsive

Email sending: Using EmailJS free account

Why EmailJS?

Allows sending emails from frontend (HTML/JS) without a backend

Free tier available for testing

Easy integration

Step 2 — Create the Project Structure

We created a folder named OrderFormProject with three files:

index.html → HTML structure of the form

style.css → Styles and responsive design

app.js → JavaScript to handle form submission

Why separate files?

Maintainable code

CSS and JS can be edited independently

Easier to deploy

Step 3 — Build the HTML

Reasoning: HTML defines content and structure.

<form id="orderForm">
    <div class="input-group">
        <input type="text" id="name" required>
        <label for="name">Full Name</label>
    </div>
    <div class="input-group">
        <input type="text" id="phone" required>
        <label for="phone">Phone Number</label>
    </div>
    <div class="input-group">
        <input type="email" id="email" required>
        <label for="email">Email Address</label>
    </div>
    <button type="submit">Confirm Order</button>
</form>


id="orderForm" → JavaScript needs it to detect submission

Floating labels: <label> positioned with CSS for a modern effect

required: Ensures user cannot submit empty fields

We also added:

Container div → centers the form

Card div → adds glassmorphism effect

Step 4 — Style the Form with CSS

Goal: Make the form visually appealing and responsive.

Key design choices:

Glassmorphism card → translucent, blurred background

Gradient button → modern, futuristic feel

Floating labels → animated when user focuses on inputs

Responsive layout → works on mobile and desktop

Hover and focus effects → improves interactivity

Example CSS:

.card {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  transition: transform 0.3s ease;
}


We applied similar styles to inputs, buttons, and labels.

Added media queries for screen sizes ≤480px to make the form mobile-friendly.

Step 5 — Setup EmailJS

Goal: Enable sending emails directly from the frontend.

Steps:

Sign up at EmailJS

Create a service → connects to an email provider (Gmail, Outlook, etc.)

Create a template → defines the email layout and placeholders ({{name}}, {{phone}}, {{email}})

Obtain Public Key → used to initialize EmailJS SDK in JS

Note Service ID and Template ID → used to send emails

Why this works:

The SDK lets us call emailjs.send(serviceID, templateID, templateParams) directly in the browser.

Step 6 — Add JavaScript to Handle Form Submission

Reasoning: JS allows us to capture form data and send it via EmailJS.

document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const templateParams = { name, phone, email };

    emailjs.send('serviceID', 'templateID', templateParams)
      .then(response => { /* success */ }, error => { /* fail */ });

    document.getElementById("orderForm").reset();
});


Key points:

e.preventDefault() stops form from reloading the page

templateParams maps form inputs to email template variables

.then() handles success or failure feedback

Step 7 — Test Locally

Open project using VS Code Live Server

Fill the form and submit → check console logs and status message

Confirm that emails are delivered

Important: EmailJS does not work on file://, must use HTTP/HTTPS

Step 8 — Make the UI Responsive and Interactive

Added hover effects on card and button

Added focus effect on input fields

Ensured the form fits mobile screens via media queries

Used gradient buttons, glass card, and floating labels for modern look

Step 9 — Deploy on GitHub Pages

Create a GitHub repository

Upload the three files (index.html, style.css, app.js)

Go to Settings → Pages → Source → main branch

GitHub generates a live URL (e.g., https://username.github.io/order-form/)

Test on mobile and desktop

Step 10 — Key Learnings

Front-end email sending is possible without backend using EmailJS

CSS effects like glassmorphism and floating labels improve UX

Responsive design is critical for mobile users

Project organization: separate HTML, CSS, JS for maintainability

Testing on HTTP/HTTPS is necessary due to EmailJS restrictions

✅ End Result:

Fully functional order form

Modern, unique UI

Responsive for all devices

Emails sent automatically with user input

Live on GitHub Pages
