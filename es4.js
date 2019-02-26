const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/home", (req, res) => {
    res.status(200).send("home");
});

let user = {
    name : "laura",
    age : 15,
    email : "laurasaccani24@gmail.com"
};

app.get("/json", (req, res) => {
    res.status(200).send(`${user.name} ha ${user.age} anni e la sua email è ${user.email} `)
});

app.get("/request", (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(data => data.json())
        .then(json => res.status(200).send(json.title));
});

app.get("/promise/:password", (req, res) => {
    const promessa = new Promise((resolve, reject) => {
        if(req.params.password === "admin") {
            resolve("sei un admin");
        } else {
            reject( "non sei un admin");
        };
    })

    promessa.then((resolved) => res.status(200).send(resolved))
            .catch((err) => res.status(401).send(err));
        
});

app.all("*", (req, res) => {
    res.status(404).send("Pagina non trovata");
})

app.listen(8080, () => {
    console.log(" ");
});