const express = require("express");
const app = express();

app.get("/daniele", (req, res) => {
    res.status(200).send("ciao daniele come va ");
});
app.post("/info", (req, res) => {
    res.status(200).json({
        nome : "laura", 
        age : 15
    });
});

app.get("/saluta/:nome", (req, res) => {
    res.status(200).send(`ciao ${req.params.nome} come va `);
});

app.listen(3000, () => {
    console.log(" ")
});
