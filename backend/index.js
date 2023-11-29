console.log("fheeur");
let express=require('express');
let cors=require('cors');
let connectToMDB=require("./mongodb/connection");
let Routes=require('./routes/route');
let app=express();
app.use(cors());
app.use("/",Routes);
connectToMDB();
let portNumber=4321;

app.listen(portNumber,()=>{
    console.log(`server is successfully running on port ${portNumber}`);
})

