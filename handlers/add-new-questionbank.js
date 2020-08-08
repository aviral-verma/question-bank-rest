const mysql = require('mysql');
const mysqlCfg = require('./mysql-config');

module.exports = (req, res) => {
    const conn = mysql.createConnection(mysqlCfg);

    // perform validation before query
    // const requiredFields = ['questionbank_list'];

    // const missingFields = [];

    // requiredFields.forEach((field) => {
    //     if (field in req.body === false) {
    //         missingFields.push(field);
    //     }
    // });

    // if(missingFields.length > 0) {
    //     res.status(400);
    //     res.json({ missingFields });
    //     return;
    // }
    const qbId = req.body.question;
    conn.query(
        `insert into questionbank_tb(questionbank_list) values('${qbId}')` ,
        req.body,
        (err) => {
            if(err) throw err; // results in HTTP response code 500
            conn.query(
                `create TABLE ${qbId} (
                    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    questions VARCHAR(500) NOT NULL,
                    A VARCHAR(100),
                    B VARCHAR(100),
                    C VARCHAR(100),
                    D VARCHAR(100),
                    Answer VARCHAR(5)
             );`
            )
            res.end(); //ends the response and sends HTTP response code 200 without any content
        });
 };