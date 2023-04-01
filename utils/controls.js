const fs = require('fs')

 async function read(file){
     let final = []
     return JSON.parse(fs.readFileSync(file))
}

function write(file,data){
    fs.writeFile(file,JSON.stringify(data),(err)=>{
        if (err) console.log(err)
        console.log('file writen')
    })
}

function save(file,Data){
    let old
    fs.readFile(file, (err, data) => {
        // console.log(data.byteLength)
        err && console.log(err)
        if(data.byteLength > 0) old = JSON.parse(data)
        
        if(old === undefined || old === null) {
            write(file,[Data])
            // console.log(11)
        }else{
            // console.log(10)
            // if (old.find((user)=>{
            //     user.email === data.email
            // })){
            //     console.log('user exist')
            // }else{
                old.push(Data)
                write(file,old)
            // }
        }
    })
        
    }


module.exports = {read,save}