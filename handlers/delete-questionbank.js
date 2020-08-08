const mysql = require('mysql');
const mysqlCfg = require('./mysql-config');

module.exports = (req, res) => {
    const conn = mysql.createConnection(mysqlCfg);
    const qbId = req.params.questionbank;
    // console.log('typeof qbid', typeof qbId);
    //console.log(req.params.questionbank);
    conn.query(
        `delete from questionbank_tb where questionbank_list='${qbId}'` ,
        req.body,
        (err) => {
            if(err) throw err; // results in HTTP response code 500
            conn.query(
                `drop TABLE ${qbId};;`
            )
            res.end(); //ends the response and sends HTTP response code 200 without any content
        });
 };