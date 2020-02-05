const connection = require('../database/connection')

async function SchemaUsers () {
    const sql = `
    CREATE TABLE IF NOT EXISTS Users (
        UserID INT AUTO_INCREMENT PRIMARY KEY,
        UserName VARCHAR(255) NOT NULL,
        UserPassword VARCHAR(255) NOT NULL,
        UserType VARCHAR(255) NOT NULL);`
        
    await connection.query(sql,(err, results, fields)=>{
        console.log(results)
        connection.query("INSERT INTO Users (UserName, UserPassword, UserType ) VALUES ('admin','admin','administrator');")
    })

}
async function SchemaRooms() {
    const sql = `   
    CREATE TABLE IF NOT EXISTS Rooms (
        RoomsID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        NumberRoom VARCHAR(10),
        NameImage VARCHAR(100)
    );
    `
    
    await connection.query(sql,(err, results, fields)=>{
        console.log(results)
    })

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
    
    await connection.query(sql,(err, results, fields)=>{
        console.log(results)
    })

}

module.exports = { 
    SchemaFloors,
    SchemaRooms,
    SchemaUsers
}