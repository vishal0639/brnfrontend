let mongoose=require('mongoose');

let connectToMDB=()=>{
    let url='mongodb://127.0.0.1:27017/PulseBRN';
    mongoose.connect(url).then(()=>{
        console.log('mongoose connected mongodb to server')
    }).catch((e)=>{
        console.log(`unable to connect .Error:${e}`)
    })
}
 
module.exports=connectToMDB;