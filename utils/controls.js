const fs = require('fs')

function read(file){
    fs.readFile(file, (err, data) => {
        err && console.log(err)
        const Data = JSON.parse(data)
        return Data
    })
}

function write(file,data){
    fs.writeFile(file,JSON.stringify(data),(err)=>{
        if (err) console.log(err)
        console.log('file writed')
    })
}

function save(file,data){
    const old = loadFile(file)
    old.push(data)
    write(old,data)
}