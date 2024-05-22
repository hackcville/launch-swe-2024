import { useState, useEffect } from "react";
import "./App.css";
import { db } from "../firebase";
import { addDoc, collection, getDocs, doc, updateDoc } from "firebase/firestore";

function App() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [allData, setAllData] = useState([]);

    const fetchData = async () => {
        let temp = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            temp.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        setAllData(temp);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "users"), {
            first: first,
            last: last,
            likes: 0,
        });
        console.log("created doc with id: ", docRef.id);
        fetchData();
    };

    const likeUser = async (id, currentLikes) => {
        await updateDoc(doc(db, "users", id), {
            likes: currentLikes + 1,
        });
        fetchData();
    };

    return (
        <>
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirst(e.target.value)}></input>
                <br></br>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLast(e.target.value)}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>Users:</h2>
                {allData.map((user, index) => (
                    <div key={index} style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                        <h3>
                            {user.first} {user.last}
                        </h3>
                        <p>Likes: {user.likes}</p>
                        <button onClick={() => likeUser(user.id, user.likes)}>Like</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
