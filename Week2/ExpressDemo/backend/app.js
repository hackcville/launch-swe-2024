const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

const db = require("./firebase");
const { collection, getDocs, updateDoc, doc, addDoc } = require("firebase/firestore");

const cors = require("cors");
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// get all posts
app.get("/posts", async (req, res) => {
    try {
        let ret = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            ret.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        res.status(200).json(ret);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// like a post
app.put("/posts/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const currentLikes = req.body.currentLikes;
        await updateDoc(doc(db, "users", id), {
            likes: currentLikes + 1,
        });
        res.status(200).json({ message: "success" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// add a user
app.post("/users", async (req, res) => {
    try {
        const first = req.body.first;
        const last = req.body.last;
        const docRef = await addDoc(collection(db, "users"), {
            first: first,
            last: last,
            likes: 0,
        });
        res.status(200).json({message: `Successfully created user with id ${docRef.id}`})
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});
