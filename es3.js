const express = require("express");
const app = express();
app.get("/promise/:num", (req, res) => {
    
    const promessa = new Promise ((resolve, reject) => {
        if (req.params.num % 2 === 0) {
            resolve("Il numero è pari");
        } else if (req.params.num % 2 === 1) {
            resolve("Il numero è dispari");
        } else {
            reject("Errore non hai inserito un  numero");
        };
    })

    promessa.then((r) => res.status(200).send(r))
            .catch((err) => res.status(400).send(err));
            
});

app.listen(3000, () => {
    console.log("");
});
