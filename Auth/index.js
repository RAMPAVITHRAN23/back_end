const express = require("express");

//it will create Http server instance
const app = express();
//login
app.post("/Login",async (req, res) => {
            console.log("Login route");
        });


//Register
app.post("/Register", (req,res) =>{
    console.log("Register route");
});

app.post("/Refresh",  (req,res)=>
{
    console.log ("Refresh route");
});

//public vs protected
app.post("/public", (req,res)=>{
    console.log("Public route");
});

//auth
app.get("/", (req,res)=>{
    res.send("Auth API working")
})

const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Auth API is running on port ${PORT}`);
});

