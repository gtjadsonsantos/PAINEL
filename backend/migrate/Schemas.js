const mysql = require('mysql2')
const database = require('../database/connection')

async function SchemaUsers () {
    const sql = `
    CREATE TABLE IF NOT EXISTS Users (
        UserID INT AUTO_INCREMENT PRIMARY KEY,
        UserName VARCHAR(255) NOT NULL,
        UserPassword VARCHAR(255) NOT NULL,
        UserType VARCHAR(255) NOT NULL);`
        
    const connection = await mysql.createConnection(database)
    await connection.promise().execute(sql)
    await connection.promise().execute("INSERT INTO Users (UserName, UserPassword, UserType ) SELECT 'admin','4180f75431','administrator' WHERE NOT EXISTS (SELECT 2 FROM Users WHERE Users.UserName = 'admin' LIMIT 1);")
    connection.end();

}
async function SchemaRooms() {
    const sql = `   
    CREATE TABLE IF NOT EXISTS Rooms (
        RoomsID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        NumberRoom VARCHAR(10),
        NameImage VARCHAR(100)
    );
    `
    const connection = await mysql.createConnection(database)
    await connection.promise().query(sql);
    connection.end();

}
async function SchemaFloors() {
    const sql = ` 
     CREATE TABLE IF NOT EXISTS Floors (
        FloorsID INT AUTO_INCREMENT PRIMARY KEY,
        NumberFloor VARCHAR(30) NOT NULL ,
        RoomsID INT NOT NULL,
        FOREIGN KEY(RoomsID) REFERENCES Rooms(RoomsID)ON DELETE CASCADE ON UPDATE CASCADE
    );
    `
    const connection = await mysql.createConnection(database)
    await connection.promise().query(sql);
    connection.end();

}

module.exports = { 
    SchemaFloors,
    SchemaRooms,
    SchemaUsers
}