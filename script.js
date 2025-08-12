// Background color changer
function changeBackground() {
  const colors = ['#f9f9f9', '#e3f2fd', '#e8f5e9', '#fff3e0', '#fce4ec'];
  const current = document.body.style.backgroundColor;
  let newColor;

  do {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  } while (newColor === current);

  document.body.style.backgroundColor = newColor;
}

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Simulate success
      successMessage.style.display = "block";
      form.reset();
    });
  }
});
