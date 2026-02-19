const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'heroA1234#1234@1234'
});
function getRandomUser() {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}


let datas = [];
for(i=0; i<=100; i++){
  datas.push(getRandomUser())
  console.log(datas)
};

let query = "INSERT INTO user(id,username,email,password) VALUES ?";
try{
      connection.query(query,[datas],(err,result)=>{
      if(err) throw err;
      // console.log(result);
})
}catch(err){
      console.log(err)
}

connection.end();
// let query = "INSERT INTO user(id,username,email,password) VALUES ?";
// let users = [["1",'Aazmeer','Aazmeer@gmail.com','heroA1234'],["2","Shaheer","haksh","jsb"]]
// try{
//     connection.query(query,[users],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// })
// }catch(err){
//     console.log(err)
// }
// connection.end();






// console.log(getRandomUser())