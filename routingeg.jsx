// Home.jsx
function Home() {
    return (
        <h2>Home Page</h2>
    );
}
export default Home;

// About.jsx
function About() {
    return (
        <h2>About Page</h2>
    );
}

export default About;

//  Contact.jsx
function Contact() {
    return (
        <h2>Contact Page</h2>
    );
}

export default Contact;

/*

src/
│
├── App.jsx
├── main.jsx
│
└── pages/
    ├── Home.jsx
    ├── About.jsx
    └── Contact.jsx

  */

// npm install react-router-dom
// App.jsx

import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <div>

            <h1>React Router Example</h1>
            {/* Navigation Links */}
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/contact">Contact</Link>
            </nav>
            <hr />
            {/* Routes */}

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    );
}

export default App;

// main.jsx optional
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

);
