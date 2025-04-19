document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const userTableBody = document.getElementById("userTableBody");

    // Handle form submission
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            // Create user object
            const user = { name, email, contact, address };

            // Get existing users from localStorage or initialize empty array
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Add new user
            users.push(user);

            // Save updated user list to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Reset form fields
            form.reset();

            alert("User registered successfully!");
        });
    }

    // Display users on view page
    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach((user) => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${user.name}</td>
                             <td>${user.email}</td>
                             <td>${user.contact}</td>
                             <td>${user.address}</td>`;
            userTableBody.appendChild(row);
        });
    }
});
