const mysql = require("mysql2");

const conection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "VoucherDev@2024",
    database: "Edjoin"

});

conection.connect((error) => {
    if (error) {
        console.log("Error connecting to the database:", error);
        return
    }
    console.log("Connected to the database");
});

module.exports = conection;