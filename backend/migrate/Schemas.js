const connection = require('../database/connection')

async function SchemaUsers () {
    const sql = `
    CREATE TABLE Users (
        UserID INT AUTO_INCREMENT PRIMARY KEY,
        UserName VARCHAR(255) NOT NULL,
        UserPassword VARCHAR(255) NOT NULL,
        NameImage VARCHAR(255) NOT NULL,
        UrlImage VARCHAR(255)
    );    
    `
    await connection.query(sql,(err, results, fields)=>{
        console.log(results)
    })

}

async function SchemaRooms() {
    const sql = `   
    CREATE TABLE Rooms (
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
     CREATE TABLE Floors (
        FloorsID INT AUTO_INCREMENT PRIMARY KEY,
        NumberFloor VARCHAR(30) NOT NULL ,
        RoomsID INT NOT NULL,
        FOREIGN KEY(RoomsID) REFERENCES Rooms(RoomsID)
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