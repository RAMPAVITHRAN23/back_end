const express = require("express");

const app = express();

app.get("/", (req, res) => {
    //step 1 - data from fronted or client

    //Step 2 -  Db Logic

    //Step 3 - Data to frontend from database
    res.send("Message from get method");
});

app.post("/", (req, res) => {
    res.send("Message from post method");
});

app.put("/", (req, res) => {
    res.send("Message from put method");
});

app.delete("/", (req, res) => {
    res.send("Message from delete method");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});