const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'project',
  multipleStatements: true
});
connection.connect();

app.get('/login',(req,res)=>{
  connection.query('select * from register',function(err,result){
      if(err)
      {
        return res.send(err);
      }
      else {
        return res.json({
          data:result
        })
      }
  });
});

app.get('/register/add',(req,res) => {
  const {name,email,pass}=req.query;
  const register = `insert into register values ('${email}','${pass}','${name}')`;
  connection.query(register,function(err,result){
    if(err)
    {
      return res.send(err)
    }
    else {
      return res.send("successful")
    }
  });
});


app.listen(4000,()=>{
  console.log("connected");
});
