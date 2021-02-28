const fetch = require("node-fetch")
/*fetch("http://192.168.1.231:8080/accreditamento", {method:"post", body:JSON.stringify({nome:"Laura Saccani"}), headers:{"Content-type": "application/json"}})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))*/


fetch("http://192.168.1.231:8080/esercizi/", { headers:{"x-data": "true"}})
    .then(res => res.json())
    .then(json => {
        console.log(json)
        return json.data
    })
    .then( data => {
        let result 
        return fetch("http://192.168.1.231:8080/esercizi/", {method: "post", body:JSON.stringify({data: result}), headers:{"Content-type": "application/json"}})
    })
    .then(res => res.json())
    .then( json => console.log(json))
    .catch(err => console.log(err))