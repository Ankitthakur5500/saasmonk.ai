import express from "express";

const port = 3001;
const app = express();

app.listen(port,(req,res)=>{
    console.log(`port working at ${port}`);
});