const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static("public"));
app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

app.post("/form", (req, res)=>{
    console.log(req.body)
    

    res.sendFile(__dirname + '/done.html')
})

app.listen(PORT);