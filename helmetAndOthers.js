const express = require('express');
const helmet = require('helmet')

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet())

app.post("/ajax",(req,res) => {
    console.log(req.body);
    res.json({name:"lakith"});
});

app.listen(3000,()=>{
    console.log("Server Started On Port 3000");
})