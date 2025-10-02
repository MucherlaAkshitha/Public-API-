const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

// Fetch and display users
async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading...</p>";
  
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    // Clear previous data
    userContainer.innerHTML = "";

    // Loop through users and display
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, 
        ${user.address.city}</p>
      `;

      userContainer.appendChild(userCard);
    });
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

// Reload button event
reloadBtn.addEventListener("click", fetchUsers);

// Load users on page load
fetchUsers();
