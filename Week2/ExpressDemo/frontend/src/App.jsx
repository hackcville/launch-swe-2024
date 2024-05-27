import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [allData, setAllData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:5000/posts");
        console.log("response", response.data);
        setAllData(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            first: first,
            last: last,
        };
        const response = await axios.post("http://localhost:5000/users", body);
        console.log(response)
        fetchData();
    };

    const likeUser = async (id, currentLikes) => {
        const response = await axios.put(`http://localhost:5000/posts/${id}`, {
            currentLikes: currentLikes,
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
