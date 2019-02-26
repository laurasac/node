const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.get("/richiesta", (req, res) => {
          fetch("https://api.paninidellospalla.it/info", {method : "GET"})
               .then(data => data
                     .json())
               .then(json => res.status(200).json(json))

app.listen(3000, () =>{
    console.log("");
});