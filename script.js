const OWNER_EMAIL = "enoshcherian4@gmail.com";

const form = document.getElementById("enquiryForm");
const noticeBox = document.getElementById("noticeBox");

function showNotice(message) {
    noticeBox.textContent = message;
    noticeBox.classList.add("show");
}

function validPhone(phone) {
    const cleaned = phone.replace(/\s+/g, "");
    return /^(\+?\d{10,15})$/.test(cleaned);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const guests = document.getElementById("guests").value;
    const dates = document.getElementById("dates").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !email) {
        showNotice("Please fill in your name, phone number, and email.");
        return;
    }

    if (!validPhone(phone)) {
        showNotice("Please enter a valid phone number.");
        return;
    }

    const subject = "Booking Enquiry - PSE Enclave";
    const body =
        `Hello PSE Enclave,

I would like to enquire about a stay.

Name: ${name}
Phone: ${phone}
Email: ${email}
Guests: ${guests}
Preferred Dates: ${dates || "Not specified"}

Message:
${message || "Not specified"}

Thank you.`;

    const mailtoLink =
        `mailto:${encodeURIComponent(OWNER_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});