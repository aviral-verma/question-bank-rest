const mysql = require('mysql');
const mysqlCfg = require('./mysql-config');

module.exports = (req, res) => {
    const conn = mysql.createConnection(mysqlCfg);
    const qbId = req.body.questionbankIdentifier;
    conn.query(
        `insert into ${qbId}(questions,A,B,C,D,Answer) VALUES('${req.body.questions}','${req.body.A}','${req.body.B}','${req.body.C}','${req.body.D}','${req.body.Answer}')`,
       
     (err) => {
        if(err) throw err; // results in HTTP response code 500
        res.end(); //ends the response and sends HTTP response code 200 without any content
    }
        );

 };