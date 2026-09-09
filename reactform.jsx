// form example in react

import React, {useState} from 'react';

// uses useState hook to manage form state

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault(); // prevent page refresh on form submission
        console.log("Name:", name);
        console.log("Email:", email);
    }

    return (
        <div>
            <h1>Form Example</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;  

//target.value is used to get the value of the input 
//field when it changes. The onChange event handler updates the state with the new value, 
// allowing React to re-render the component with the updated state.
