const express = require("express");
const booksRoute = require("./routes/booksRoute")

const app = express()
//midlleware
app.use(express.json())

app.use(booksRoute)

//home route
app.get("/", (req, res)=>{
    res.json("Welcome To Our Library")
})

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log("server is working")
})
