const express = require("express");

const app = express();



//create prisma client
const prisma  = new PrismaClient();




app.get("/number", (req, res) => {
    //step 1 - data from fronted or client
    //Step 2 -  Db Logic
    const data = Prisma.student.findmany();
    console.log("data from db", data);
    //Step 3 - Data to frontend from database
    res.send("Number from get method");
});

app.post("/", (req, res) => {
    res.send("Message from post method");
}
);

app.put("/", (req, res) => {
    res.send("Message from put method");
}
);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);