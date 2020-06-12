exports.seed = function (knex) {
  return knex('Rooms').del()
    .then(function () {
      return knex('Rooms').insert([
        { RoomID: 1,  FloorID: 1, NumberRoom: "101", NameImage: "white1.png" },
        { RoomID: 2,  FloorID: 1, NumberRoom: "102", NameImage: "white2.png" },
        { RoomID: 3,  FloorID: 1, NumberRoom: "103", NameImage: "white3.png" },
        { RoomID: 4,  FloorID: 1, NumberRoom: "104", NameImage: "white4.png" },
        { RoomID: 5,  FloorID: 1, NumberRoom: "105", NameImage: "white5.png" },
        { RoomID: 6,  FloorID: 1, NumberRoom: "106", NameImage: "white6.png" },
        { RoomID: 7,  FloorID: 1, NumberRoom: "107", NameImage: "white7.png" },
        { RoomID: 8,  FloorID: 1, NumberRoom: "108", NameImage: "white8.png" },
        { RoomID: 9,  FloorID: 1, NumberRoom: "109", NameImage: "white9.png" },
        { RoomID: 10, FloorID: 1, NumberRoom: "110", NameImage: "white10.png" },
        { RoomID: 11, FloorID: 1, NumberRoom: "111", NameImage: "white11.png" },
        { RoomID: 12, FloorID: 1, NumberRoom: "112", NameImage: "white12.png" },
        { RoomID: 13, FloorID: 2, NumberRoom: "201", NameImage: "white13.png" },
        { RoomID: 14, FloorID: 2, NumberRoom: "202", NameImage: "white14.png" },
        { RoomID: 15, FloorID: 2, NumberRoom: "203", NameImage: "white15.png" },
        { RoomID: 16, FloorID: 2, NumberRoom: "204", NameImage: "white16.png" },
        { RoomID: 17, FloorID: 2, NumberRoom: "205", NameImage: "white17.png" },
        { RoomID: 18, FloorID: 2, NumberRoom: "206", NameImage: "white18.png" },
        { RoomID: 19, FloorID: 2, NumberRoom: "207", NameImage: "white19.png" },
        { RoomID: 20, FloorID: 2, NumberRoom: "208", NameImage: "white20.png" },
        { RoomID: 21, FloorID: 2, NumberRoom: "209", NameImage: "white21.png" },
        { RoomID: 22, FloorID: 2, NumberRoom: "210", NameImage: "white22.png" },
        { RoomID: 23, FloorID: 2, NumberRoom: "211", NameImage: "white23.png" },
        { RoomID: 24, FloorID: 2, NumberRoom: "212", NameImage: "white24.png" },
        { RoomID: 25, FloorID: 3, NumberRoom: "301", NameImage: "white25.png" },
        { RoomID: 26, FloorID: 3, NumberRoom: "302", NameImage: "white26.png" },
        { RoomID: 27, FloorID: 3, NumberRoom: "303", NameImage: "white27.png" },
        { RoomID: 28, FloorID: 3, NumberRoom: "304", NameImage: "white28.png" },
        { RoomID: 29, FloorID: 3, NumberRoom: "305", NameImage: "white29.png" },
        { RoomID: 30, FloorID: 3, NumberRoom: "306", NameImage: "white30.png" },
        { RoomID: 31, FloorID: 3, NumberRoom: "307", NameImage: "white31.png" },
        { RoomID: 32, FloorID: 3, NumberRoom: "308", NameImage: "white32.png" },
        { RoomID: 33, FloorID: 3, NumberRoom: "309", NameImage: "white33.png" },
        { RoomID: 34, FloorID: 3, NumberRoom: "310", NameImage: "white34.png" },
        { RoomID: 35, FloorID: 3, NumberRoom: "311", NameImage: "white35.png" },
        { RoomID: 36, FloorID: 3, NumberRoom: "312", NameImage: "white36.png" },
        { RoomID: 37, FloorID: 4, NumberRoom: "401", NameImage: "white37.png" },
        { RoomID: 38, FloorID: 4, NumberRoom: "402", NameImage: "white38.png" },
        { RoomID: 39, FloorID: 4, NumberRoom: "403", NameImage: "white39.png" },
        { RoomID: 40, FloorID: 4, NumberRoom: "404", NameImage: "white40.png" },
        { RoomID: 41, FloorID: 4, NumberRoom: "405", NameImage: "white41.png" },
        { RoomID: 42, FloorID: 4, NumberRoom: "406", NameImage: "white42.png" },
        { RoomID: 43, FloorID: 4, NumberRoom: "407", NameImage: "white43.png" },
        { RoomID: 44, FloorID: 4, NumberRoom: "408", NameImage: "white44.png" },
        { RoomID: 45, FloorID: 4, NumberRoom: "409", NameImage: "white45.png" },
        { RoomID: 46, FloorID: 4, NumberRoom: "410", NameImage: "white46.png" },
        { RoomID: 47, FloorID: 4, NumberRoom: "411", NameImage: "white47.png" },
        { RoomID: 48, FloorID: 4, NumberRoom: "412", NameImage: "white48.png" },
        { RoomID: 49, FloorID: 5, NumberRoom: "501", NameImage: "white49.png" },
        { RoomID: 50, FloorID: 5, NumberRoom: "502", NameImage: "white50.png" },
        { RoomID: 51, FloorID: 5, NumberRoom: "503", NameImage: "white51.png" },
        { RoomID: 52, FloorID: 5, NumberRoom: "504", NameImage: "white52.png" },
        { RoomID: 53, FloorID: 5, NumberRoom: "505", NameImage: "white53.png" },
        { RoomID: 54, FloorID: 5, NumberRoom: "506", NameImage: "white54.png" },
        { RoomID: 55, FloorID: 5, NumberRoom: "507", NameImage: "white55.png" },
        { RoomID: 56, FloorID: 5, NumberRoom: "508", NameImage: "white56.png" },
        { RoomID: 57, FloorID: 5, NumberRoom: "509", NameImage: "white57.png" },
        { RoomID: 58, FloorID: 5, NumberRoom: "510", NameImage: "white58.png" },
        { RoomID: 59, FloorID: 5, NumberRoom: "511", NameImage: "white59.png" },
        { RoomID: 60, FloorID: 5, NumberRoom: "512", NameImage: "white60.png" },
        { RoomID: 61, FloorID: 6, NumberRoom: "601", NameImage: "white61.png" },
        { RoomID: 62, FloorID: 6, NumberRoom: "602", NameImage: "white62.png" },
        { RoomID: 63, FloorID: 6, NumberRoom: "603", NameImage: "white63.png" },
        { RoomID: 64, FloorID: 6, NumberRoom: "604", NameImage: "white64.png" },
        { RoomID: 65, FloorID: 6, NumberRoom: "605", NameImage: "white65.png" },
        { RoomID: 66, FloorID: 6, NumberRoom: "606", NameImage: "white66.png" },
        { RoomID: 67, FloorID: 6, NumberRoom: "607", NameImage: "white67.png" },
        { RoomID: 68, FloorID: 6, NumberRoom: "608", NameImage: "white68.png" },
        { RoomID: 69, FloorID: 6, NumberRoom: "609", NameImage: "white69.png" },
        { RoomID: 70, FloorID: 6, NumberRoom: "610", NameImage: "white70.png" },
        { RoomID: 71, FloorID: 6, NumberRoom: "611", NameImage: "white71.png" },
        { RoomID: 72, FloorID: 6, NumberRoom: "612", NameImage: "white72.png" },
        { RoomID: 73, FloorID: 7, NumberRoom: "701", NameImage: "white73.png" },
        { RoomID: 74, FloorID: 7, NumberRoom: "702", NameImage: "white74.png" },
        { RoomID: 75, FloorID: 7, NumberRoom: "703", NameImage: "white75.png" },
        { RoomID: 76, FloorID: 7, NumberRoom: "704", NameImage: "white76.png" },
        { RoomID: 77, FloorID: 7, NumberRoom: "705", NameImage: "white77.png" },
        { RoomID: 78, FloorID: 7, NumberRoom: "706", NameImage: "white78.png" },
        { RoomID: 79, FloorID: 7, NumberRoom: "707", NameImage: "white79.png" },
        { RoomID: 80, FloorID: 7, NumberRoom: "708", NameImage: "white80.png" },
        { RoomID: 81, FloorID: 7, NumberRoom: "709", NameImage: "white81.png" },
        { RoomID: 82, FloorID: 7, NumberRoom: "710", NameImage: "white82.png" },
        { RoomID: 83, FloorID: 7, NumberRoom: "711", NameImage: "white83.png" },
        { RoomID: 84, FloorID: 7, NumberRoom: "712", NameImage: "white84.png" },
        { RoomID: 85, FloorID: 8, NumberRoom: "801", NameImage: "white85.png" },
        { RoomID: 86, FloorID: 8, NumberRoom: "802", NameImage: "white86.png" },
        { RoomID: 87, FloorID: 8, NumberRoom: "803", NameImage: "white87.png" },
        { RoomID: 88, FloorID: 8, NumberRoom: "804", NameImage: "white88.png" },
        { RoomID: 89, FloorID: 8, NumberRoom: "805", NameImage: "white89.png" },
        { RoomID: 90, FloorID: 8, NumberRoom: "806", NameImage: "white90.png" },
        { RoomID: 91, FloorID: 8, NumberRoom: "807", NameImage: "white91.png" },
        { RoomID: 92, FloorID: 8, NumberRoom: "808", NameImage: "white92.png" },
        { RoomID: 93, FloorID: 8, NumberRoom: "809", NameImage: "white93.png" },
        { RoomID: 94, FloorID: 8, NumberRoom: "810", NameImage: "white94.png" },
        { RoomID: 95, FloorID: 8, NumberRoom: "811", NameImage: "white95.png" },
        { RoomID: 96, FloorID: 8, NumberRoom: "812", NameImage: "white96.png" },
        { RoomID: 97, FloorID: 9, NumberRoom: "901", NameImage: "white97.png" },
        { RoomID: 98, FloorID: 9, NumberRoom: "902", NameImage: "white98.png" },
        { RoomID: 99, FloorID: 9, NumberRoom: "903", NameImage: "white99.png" },
        { RoomID: 100, FloorID: 9, NumberRoom: "904", NameImage: "white100.png" },
        { RoomID: 101, FloorID: 9, NumberRoom: "905", NameImage: "white101.png" },
        { RoomID: 102, FloorID: 9, NumberRoom: "906", NameImage: "white102.png" },
        { RoomID: 103, FloorID: 9, NumberRoom: "907", NameImage: "white103.png" },
        { RoomID: 104, FloorID: 9, NumberRoom: "908", NameImage: "white104.png" },
        { RoomID: 105, FloorID: 9, NumberRoom: "909", NameImage: "white105.png" },
        { RoomID: 106, FloorID: 9, NumberRoom: "910", NameImage: "white106.png" },
        { RoomID: 107, FloorID: 9, NumberRoom: "911", NameImage: "white107.png" },
        { RoomID: 108, FloorID: 9, NumberRoom: "912", NameImage: "white108.png" },
        { RoomID: 109, FloorID: 10, NumberRoom: "1001", NameImage: "white109.png" },
        { RoomID: 110, FloorID: 10, NumberRoom: "1002", NameImage: "white110.png" },
        { RoomID: 111, FloorID: 10, NumberRoom: "1003", NameImage: "white111.png" },
        { RoomID: 112, FloorID: 10, NumberRoom: "1004", NameImage: "white112.png" },
        { RoomID: 113, FloorID: 10, NumberRoom: "1005", NameImage: "white113.png" },
        { RoomID: 114, FloorID: 10, NumberRoom: "1006", NameImage: "white114.png" },
        { RoomID: 115, FloorID: 10, NumberRoom: "1007", NameImage: "white115.png" },
        { RoomID: 116, FloorID: 10, NumberRoom: "1008", NameImage: "white116.png" },
        { RoomID: 117, FloorID: 10, NumberRoom: "1009", NameImage: "white117.png" },
        { RoomID: 118, FloorID: 10, NumberRoom: "1010", NameImage: "white118.png" },
        { RoomID: 119, FloorID: 10, NumberRoom: "1011", NameImage: "white119.png" },
        { RoomID: 120, FloorID: 10, NumberRoom: "1012", NameImage: "white120.png" },
        { RoomID: 121, FloorID: 11, NumberRoom: "1101", NameImage: "white121.png" },
        { RoomID: 122, FloorID: 11, NumberRoom: "1102", NameImage: "white122.png" },
        { RoomID: 123, FloorID: 11, NumberRoom: "1103", NameImage: "white123.png" },
        { RoomID: 124, FloorID: 11, NumberRoom: "1104", NameImage: "white124.png" },
        { RoomID: 125, FloorID: 11, NumberRoom: "1105", NameImage: "white125.png" },
        { RoomID: 126, FloorID: 11, NumberRoom: "1106", NameImage: "white126.png" },
        { RoomID: 127, FloorID: 11, NumberRoom: "1107", NameImage: "white127.png" },
        { RoomID: 128, FloorID: 11, NumberRoom: "1108", NameImage: "white128.png" },
        { RoomID: 129, FloorID: 11, NumberRoom: "1109", NameImage: "white129.png" },
        { RoomID: 130, FloorID: 11, NumberRoom: "1110", NameImage: "white130.png" },
        { RoomID: 131, FloorID: 11, NumberRoom: "1111", NameImage: "white131.png" },
        { RoomID: 132, FloorID: 11, NumberRoom: "1112", NameImage: "white132.png" },
        { RoomID: 133, FloorID: 12, NumberRoom: "1201", NameImage: "white133.png" },
        { RoomID: 134, FloorID: 12, NumberRoom: "1202", NameImage: "white134.png" },
        { RoomID: 135, FloorID: 12, NumberRoom: "1203", NameImage: "white135.png" },
        { RoomID: 136, FloorID: 12, NumberRoom: "1204", NameImage: "white136.png" },
        { RoomID: 137, FloorID: 12, NumberRoom: "1205", NameImage: "white137.png" },
        { RoomID: 138, FloorID: 12, NumberRoom: "1206", NameImage: "white138.png" },
        { RoomID: 139, FloorID: 12, NumberRoom: "1207", NameImage: "white139.png" },
        { RoomID: 140, FloorID: 12, NumberRoom: "1208", NameImage: "white140.png" },
        { RoomID: 141, FloorID: 12, NumberRoom: "1209", NameImage: "white141.png" },
        { RoomID: 142, FloorID: 12, NumberRoom: "1210", NameImage: "white142.png" },
        { RoomID: 143, FloorID: 12, NumberRoom: "1211", NameImage: "white143.png" },
        { RoomID: 144, FloorID: 12, NumberRoom: "1212", NameImage: "white144.png" }
      ]);
    });
};

// Exemple  { RoomID: 1, NumberRoom: "101", NameImage: "white.png" },