
// Mobile Navigation
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Admission Form
document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    let message = document.getElementById("formMessage");

    message.innerHTML =
        "Thank you " + name + "! Your admission enquiry has been received. " +
        "Course: " + course;

    this.reset();
});
