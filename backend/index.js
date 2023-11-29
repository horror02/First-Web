const express = require('express');
const mysql = require('mysql');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users",
});


app.post('/Registration', (req,res) => {
  const sql = "INSERT INTO register (`username`, `password`, `pinnumber`) VALUES (?)"
  const values = [
    req.body.username,
    req.body.password,
    req.body.pinnumber
  ]
    

    db.query(sql, [values], (err, data) => {
      if(err){
        return res.json("Error")
      }
      return res.json(data)
    });   
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
    db.query("SELECT * FROM register WHERE username = ? AND password = ?",
    
    [username, password],
    (err, res) =>{
      if(err){
        res.send({err:err})
      }
      if(res){
        res.send(result);
      }else{
        res.send({message: "Wrong username/password"});
      }
    })
})


app.listen(8081, () =>{
    console.log("Its Working");
})