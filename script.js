// JavaScript symbols were a new primitive data type introduced with ES6.
// Every value returned from a symbol is unique,
// meaning that we can use them as identifiers for object properties.

const symbolUserName = Symbol("username"); // Unique identifier for username
const symbolPassword = Symbol("password"); // Unique identifier for password

// The user object contains private properties using symbols
const userObject = {
  [symbolUserName]: "Marina", // Symbol used to assign private username
  age: 32, // Public property age
  [symbolPassword]: 12345678, // Symbol used to assign private password
};

// Getter function for username
function getUsername(userObject) {
  return userObject[symbolUserName];
}

// Getter function for password
function getPassword(userObject) {
  return userObject[symbolPassword];
}

// Setter function for username
function setUsername(userObject, newUsername) {
  if (typeof newUsername === "string" && newUsername.length > 0) {
    userObject[symbolUserName] = newUsername;
  } else {
    throw new Error("Invalid username. It must be a non-empty string.");
  }
}

// Setter function for password
function setPassword(userObject, newPassword) {
  if (typeof newPassword === "number" && newPassword.toString().length >= 6) {
    userObject[symbolPassword] = newPassword;
  } else {
    throw new Error(
      "Invalid password. It must be a number with at least 6 digits."
    );
  }
}

// Proxy for the user object to secure private properties
const secureUserObject = new Proxy(userObject, {
  // Intercept get operations to deny access to private properties
  get(target, prop) {
    if (prop === symbolUserName || prop === symbolPassword) {
      return "Access Denied: Private Property"; // Prevent access to private properties
    }
    return target[prop]; // Return other properties normally
  },

  // Intercept set operations to prevent modification of private properties
  set(target, prop, value) {
    if (prop === symbolUserName || prop === symbolPassword) {
      throw new Error("Cannot modify private properties directly");
    }
    target[prop] = value; // Modify other properties normally
    return true;
  },

  // Intercept delete operations to prevent deletion of private properties
  deleteProperty(target, prop) {
    if (prop === symbolUserName || prop === symbolPassword) {
      throw new Error("Cannot delete private properties");
    }
    delete target[prop]; // Delete other properties normally
    return true;
  },
});

// Displaying user data in the browser
const divContent = document.querySelector(".main"); // Select the container to display data

// Display age
const ageText = document.createElement("p"); // Create a new paragraph for age
ageText.textContent = `Age: ${secureUserObject.age}`; // Set text content to display age
divContent.appendChild(ageText); // Append to the container

// Display username (accessed using the getter function)
const usernameText = document.createElement("p");
usernameText.textContent = `Username: ${getUsername(secureUserObject)}`;
divContent.appendChild(usernameText);

// Display password (accessed using the getter function)
const passwordText = document.createElement("p");
passwordText.textContent = `Password: ${getPassword(secureUserObject)}`;
divContent.appendChild(passwordText);
