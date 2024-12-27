# 📒 **Redux Phonebook App**

A React-based Phonebook application that allows users to manage their contacts efficiently. This project showcases skills in building dynamic user interfaces with **React**, implementing robust state management using **Redux Toolkit** and **Redux Persist**, and ensuring a seamless user experience with features like authentication, contact management, and responsive design.

## 🔧 **Technologies Used**

- **React**, **Redux Toolkit**, **Redux Persist** (Core libraries & state management)
- **React Router DOM** (Client-side routing)
- **Axios** (HTTP requests)
- **Formik**, **Yup** (Form handling & validation)
- **React Icons**, **React Toastify** (UI/UX enhancements)
- **Vite** (Build & development)
- **Git**, **GitHub** (Version control & repository hosting)

---

## 🌟 **Features**

- **User Authentication**

  - **Register:** Create a new account (name, email, password)
  - **Login:** Secure login with email and password
  - **Logout:** Safely log out to end the session

- **Contact Management**

  - **Add Contact:** Add new contacts with name and phone number
  - **Delete Contact:** Remove unwanted contacts with a single click
  - **Search Contacts:** Quickly find contacts by name

- **State Management**

  - **Redux Toolkit:** Efficient, scalable, and intuitive global state management
  - **Redux Persist:** Keeps users logged in and retains essential data across sessions

- **Responsive Design**

  - **Mobile-Friendly:** Optimized layout for various screen sizes

- **Enhanced User Experience**
  - **Interactive Icons:** Powered by `react-icons`
  - **Notifications:** Integrated `react-toastify` for clean and informative alerts

---

## ⚙️ **Implementation Details**

This application integrates **Redux Toolkit** and **axios** to handle authentication seamlessly. Key points include:

- **Maintaining user state** (name, email, and token) in Redux.
- **Using async operations** (`createAsyncThunk`) for register, login, logout, and refresh.
- **Persisting the auth token** with Redux Persist for an uninterrupted experience.

All API requests are handled by an Axios instance, allowing for easy headers and error handling configuration.

---

## 🚀 **Live Demo**

[Check out the live application on Vercel](https://redux-phonebook-app-kohl-two.vercel.app/)
