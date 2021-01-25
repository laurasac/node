const fs = require("fs")
let text = []


const write = (text, index , string) => {
    text[index] = string
    if ( text.length == 3){
        let data = text.reduce((acc, e)=> {
            return acc+e+" "
        },"")
        fs.writeFile("test4.txt",data , err =>{
          if(err) throw err
        })
    } else{
        return
    }
}

fs.readFile("test1.txt", (err, data) => {
    if(err) throw err
    else {
        write(text,0, data)
    }
})
fs.readFile("test2.txt", (err, data) => {
    if(err) throw err
    else {
        write(text,1, data)
    }
})
fs.readFile("test3.txt", (err, data) => {
    if(err) throw err
    else {
        write(text,2, data)
    }
})