/**
 * 0. connection test
 * 1. C
 * 2. R
 * 3. U
 * 4. D
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '10.200.121.26',
    user: 'kevin',
    password: '1234',
    database: 'test_node'
});
connection.connect()

// connection test
connectionTest()
function connectionTest() {
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    })
}

// create
createSample()
function createSample() {
    var addSql = 'INSERT INTO websites(name,url,alexa,country) VALUES(?,?,?,?)';
    var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
    //增
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log('INSERT res:', result);
    });
}

// retrieve
retrieveSample()
function retrieveSample() {
    var sql = 'SELECT * FROM websites';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('retrieve:', result);
    });
}

// update
updateSample()
function updateSample() {
    var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
    var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];
    //改
    connection.query(modSql, modSqlParams, function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        console.log('UPDATE rows', result.affectedRows);
    });
}

// delete
deleteSample()
function deleteSample() {
    var delSql = 'DELETE FROM websites where alexa=?';
    var delParams = ['23453']
    connection.query(delSql, delParams, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        console.log('DELETE rows', result.affectedRows);
    });
}

// close connection
connection.end()