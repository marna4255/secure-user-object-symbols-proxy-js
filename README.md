# Secure User Object with JavaScript Symbols and Proxy

This project demonstrates how to securely handle sensitive user data using **JavaScript Symbols** and **Proxy**. The goal is to ensure that certain properties (such as username and password) are **private** and cannot be accessed directly, while still allowing other properties (like age) to be displayed.

## Technologies Used

- **HTML**: Provides the structure for displaying user information on the page.
- **CSS**: Basic styling for the page layout.
- **JavaScript**:
  - **Symbols**: A unique identifier to create private properties for the `username` and `password`.
  - **Proxy**: Intercepts and manages the access to properties of the `userObject` to secure private fields.

## Features

- **Private Username and Password**: Using Symbols to create unique identifiers for sensitive data that cannot be accessed directly via object properties.
- **Age Display**: The age of the user is accessible and displayed publicly.
- **Security Features**: The `Proxy` object is used to prevent modification, deletion, or access of private properties like username and password.

## Instructions

### 1. Clone the repository:

If you want to clone the project to your local machine, run:
git clone 8888888888

### 2. Open the project:

Once the repository is cloned, open the project folder.

### 3. Run the project:

- Open the `index.html` file in your web browser.
- The user data will be displayed on the page with a message about `username`, `password`, and `age`. The `username` and `password` are private and cannot be accessed directly from the console or page.

### 4. View the output:

You can modify the JavaScript code (inside `script.js`) to change values, such as the `username`, `password`, or `age`, by using the setter functions `setUsername()` and `setPassword()`.

The output on the webpage will update based on the code changes, but private data will still be protected.

## Code Structure

- **`index.html`**: Contains the structure of the page and links to the CSS and JavaScript files.
- **`style.css`**: Provides basic styling for the page.
- **`script.js`**: Contains the logic for the user object, including Symbols and Proxy usage.

## Example Usage

### 1. Change Username:

In `script.js`, you can update the username by calling the `setUsername()` function:

```javascript
setUsername(userObject, "NewUsername");
```

## Security

The Proxy will block any attempts to modify, delete, or access the private properties (username and password) directly.
If you try to access them directly from the console or code, you will get a message saying "Access Denied: Private Property."

## License

This project is open-source, and you are free to use and modify it as needed. Please refer to the LICENSE file for more information.
