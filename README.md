# iNotepad

iNotepad is a simple and efficient notes management application built with React and Vite. It allows users to add, edit, and display notes seamlessly. The project leverages Axios for API requests and Bootstrap for few styling.

### Live https://inotepadv1.netlify.app/login
## Features

- Add new notes
![](./frontend/Demo/Screenshot%202024-06-28%20143546.png)
- Edit existing notes
- Display notes
- Customized Navbar
- Authentication is implemented using Express and JWT.

    - Sign Up:
    ![](./frontend/Demo/Screenshot%202024-06-28%20142256.png)
    - Log In:
    ![](./frontend/Demo/Screenshot%202024-06-28%20145015.png)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Bootstrap**: A CSS framework for developing responsive and mobile-first websites.
- **Express**: A minimal and flexible Node.js web application framework.
- **JWT**: JSON Web Token for secure user authentication.

## Project Structure
```
└── 📁inotepad
    └── 📁backend
        └── .env
        └── 📁connection
            └── connect.js
        └── index.js
        └── 📁middleware
            └── 📁auth
                └── Signin.js
                └── Signup.js
                └── UsersInfo.js
            └── 📁tasks
                └── Create.js
                └── Delete.js
                └── Fetch.js
                └── Update.js
        └── 📁models
            └── Note.js
            └── User.js
        └── package-lock.json
        └── package.json
        └── 📁routes
            └── auth.js
            └── tasks.js
    └── 📁frontend
        └── 📁public
            └── index.html
        └── 📁src
            └── App.css
            └── App.js
            └── 📁components
                └── About.js
                └── Addnote.js
                └── Home.js
                └── Login.js
                └── Navbar.js
                └── Noteitem.js
                └── Notes.js
                └── Signup.js
            └── 📁context
                └── NoteContext.js
                └── NoteState.js
            └── index.css
            └── index.js
            └── render.js
            └── 📁style
                └── About.css
                └── Addnote.css
                └── Login.css
                └── Navbar.css
                └── Noteitem.css
                └── Notes.css
                └── Signup.css
```
## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.😁😁
