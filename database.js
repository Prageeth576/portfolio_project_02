var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if(err) {
        console.error(err.message)
        throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productName text,
            description text,
            category text,
            brand text,
            expiredDate text,
            manufacturedDate text,
            batchNumber text,
            unitPrice INTEGER,
            quantity INTEGER,
            createdDate text
        )`, (err) => {
            if (err) {

            } else {
                var insert = 'INSERT INTO products (productName, description, category, brand, expiredDate, manufacturedDate, batchNumber, unitPrice, quantity, createdDate)'
                db.run(insert, ["", "", "", "", "", "", "", , , ""])
            }
        }

        )
    }
})

module.exports = db