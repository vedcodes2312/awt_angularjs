// array example in react

function App() {
    const students = ["David", "John", "Mary", "Peter"];

    // array of objects example
    const students2 = [
        { name: "David", age: 20, class: "A" },
        { name: "John", age: 21, class: "B" },
        { name: "Mary", age: 22, class: "C" },
        { name: "Peter", age: 23, class: "D" }
    ];

    return (
        <div>
            <h1>List of Students</h1>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
             

             // array of objects example
            <h1>List of Students with Details</h1>
            <ul>
                {students2.map((student, index) => (
                    <li key={index}>
                        {student.name} - Age: {student.age}, Class: {student.class}
                    </li>
                ))}
            </ul>

            // destructuring example
            <h1>List of Students with Destructuring</h1>
            <ul>
                {students2.map(({ name, age, class: studentClass }, index) => (
                    <li key={index}>
                        {name} - Age: {age}, Class: {studentClass}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
