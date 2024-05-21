import { useState } from "react";
import "./App.css";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function App() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "users"), {
            first: first,
            last: last,
        });
        console.log("created doc with id: ", docRef.id);
    };

    return (
        <>
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" onChange={(e) => setFirst(e.target.value)}></input>
                <br></br>
                <label>Last Name:</label>
                <input type="text" onChange={(e) => setLast(e.target.value)}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;
