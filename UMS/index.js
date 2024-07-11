console.log("helllooooo");
class User {
	constructor(username, password) {
		this.username = username;
		this.password = password;
		this.next = null;
		this.prev = null;
	}
}

class UserManager {
	constructor() {
		this.head = null;
	}

	registerUser(username, password) {
		const newUser = new User(username, password);
		if (!this.head) {
			this.head = newUser;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newUser;
			newUser.prev = current;
		}
		return newUser;
	}

	loginUser(username, password) {
		let current = this.head;
		while (current) {
			if (current.username === username && current.password === password) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	showUserList() {
		let current = this.head;
		let userList = [];
		while (current) {
			userList.push(current.username);
			current = current.next;
		}
		return userList;
	}

	searchUser(username) {
		let current = this.head;
		while (current) {
			if (current.username === username) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	deleteUser(username) {
		let current = this.head;
		while (current) {
			if (current.username === username) {
				if (current.prev) {
					current.prev.next = current.next;
				} else {
					this.head = current.next;
				}
				if (current.next) {
					current.next.prev = current.prev;
				}
				return true;
			}
			current = current.next;
		}
		return false;
	}
}

const userManger = new UserManager();

// function showRegestrationForm(formType) {
// 	const formContainer = document.getElementById("form-container");
// 	formContainer.innerHTML = ""; // Clear previous form content

// 	switch (formType) {
// 		case "register":
// 			formContainer.innerHTML = `
//                         <h3>Register User</h3>
//                         <label for="registerUsername">Username:</label>
//                         <input type="text" id="registerUsername" required><br>
//                         <label for="registerPassword">Password:</label>
//                         <input type="password" id="registerPassword" required><br>
//                         <button onclick="registerUser()">Register</button>
//                     `;
// 			break;

// 		case "login":
// 			formContainer.innerHTML = `
//                         <h3>Login</h3>
//                         <label for="loginUsername">Username:</label>
//                         <input type="text" id="loginUsername" required><br>
//                         <label for="loginPassword">Password:</label>
//                         <input type="password" id="loginPassword" required><br>
//                         <button onclick="loginUser()">Login</button>
//                     `;
// 			break;

// 		// case "show":
// 		// 	userManger.showUserList().forEach((username) => {
// 		// 		formContainer.innerHTML += <p>${username}</p>;
// 		// 	});
// 		// 	break;

// 		case "show":
// 			const users = userManger.showUserList();
// 			if (!users.length) {
// 				formContainer.innerHTML = "<p>No users found.</p>";
// 			} else {
// 				users.forEach((username) => {
// 					formContainer.innerHTML += `<p>${username}</p>`;
// 				});
// 			}
// 			break;

// 		case "search":
// 			formContainer.innerHTML = `
//                         <h3>Search User</h3>
//                         <label for="searchUsername">Username:</label>
//                         <input type="text" id="searchUsername" required><br>
//                         <button onclick="searchUser()">Search</button>
//                     `;
// 			break;

// 		case "delete":
// 			formContainer.innerHTML = `
//                         <h3>Delete User</h3>
//                         <label for="deleteUsername">Username:</label>
//                         <input type="text" id="deleteUsername" required><br>
//                         <button onclick="deleteUser()">Delete</button>
//                     `;
// 			break;
// 	}

// 	formContainer.style.display = "block";
// 	document.getElementById("output").innerHTML = ""; // Clear previous output
// }

// function registerUser() {
// 	const username = document.getElementById("registerUsername").value;
// 	const password = document.getElementById("registerPassword").value;

// 	userManger.registerUser(username, password);
// 	document.getElementById("output").innerText =
// 		"User Registered Successfully.";
// }

function registerUser() {
	const username = document.getElementById("registerUsername").value;

	// Check user exists
	if (searchUser() === true) {
		document.getElementById("output").innerText =
			"Username already taken! Please choose another.";
		return;
	}

	const password = document.getElementById("registerPassword").value;

	userManager.registerUser(username, password);
	document.getElementById("output").innerText =
		"User Registered Successfully.";

	console.log(username);
}

function userExists(username) {
	if (username === "admin") {
		return true;
	}
	return false;
}

function loginUser() {
	const username = document.getElementById("loginUsername").value;
	const password = document.getElementById("loginPassword").value;

	if (userManger.loginUser(username, password)) {
		document.getElementById("output").innerText = "Login Successfully.";
	} else {
		document.getElementById("output").innerText =
			"Invalid Username or Password.";
	}
}

function searchUser() {
	const username = document.getElementById("Enter Username").value;

	if (userManger.searchUser(username)) {
		document.getElementById("output").innerText = "User Found.";
		return (found = true);
	} else {
		document.getElementById("output").innerText = "User Not Found.";
		return (found = false);
	}
}

// function deleteUser() {
// 	const username = document.getElementById("deleteUsername").value;
// 	const password = document.getElementById("deletePassword").value;

// 	if (userManger.deleteUser(username)) {
// 		document.getElementById("output").innerText =
// 			"User Removed Successfully.";
// 	} else {
// 		document.getElementById("output").innerText = "User Not Found.";
// 	}
// }

function deleteUser() {
	const username = document.getElementById("deleteUsername").value;
	const password = document.getElementById("deletePassword").value;

	// Check if user exists
	if (!userManger.userExists(username)) {
		document.getElementById("output").innerText = "User Not Found.";
		return;
	}

	// Verify password
	if (!userManger.verifyPassword(username, password)) {
		document.getElementById("output").innerText =
			"Invalid password. Please try again.";
		return;
	}

	// User exists and pass is correct, delete user
	if (userManger.deleteUser(username)) {
		document.getElementById("output").innerText =
			"User Removed Successfully.";
	}
}
