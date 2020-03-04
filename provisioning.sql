CREATE DATABASE IF NOT EXISTS test;

USE test;

/* TABELA DE USUÁRIOS */

CREATE TABLE IF NOT EXISTS Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(255) NOT NULL,
    UserPassword VARCHAR(255) NOT NULL,
    UserType VARCHAR(255) NOT NULL
);

/* TABELA DE SALAS */
CREATE TABLE IF NOT EXISTS Rooms (
        RoomsID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        NumberRoom VARCHAR(10),
        NameImage VARCHAR(100)
);

/* TABELA DE ANDARES */

CREATE TABLE IF NOT EXISTS Floors (
        FloorsID INT AUTO_INCREMENT PRIMARY KEY,
        NumberFloor VARCHAR(30) NOT NULL ,
        RoomsID INT NOT NULL,
        FOREIGN KEY(RoomsID) REFERENCES Rooms(RoomsID)ON DELETE CASCADE ON UPDATE CASCADE
    );
/* 1º ANDAR  */

INSERT INTO Users (UserName, UserPassword, UserType ) VALUES ('admin','admin','administrator');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('101', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '1');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('102', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '2');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('103', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '3');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('104', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '4');    

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('105', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '5');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('106', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '6');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('107', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '7');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('108', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '8');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('109', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '9');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('110', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '10');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('111', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('1', '11');

/* 2º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('201', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '12');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('202', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '13');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('203', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '14');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('204', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '15');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('205', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '16');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('206', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '17');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('207', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '18');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('208', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '19');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('209', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '20');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('210', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '21');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('211', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('2', '22');


/* 3º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('301', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '23');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('302', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '24');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('303', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '25');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('304', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '26');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('305', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '27');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('306', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '28');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('307', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '29');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('308', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '30');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('309', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '31');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('310', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '32');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('311', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('3', '33');


/*4º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('401', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '34');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('402', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '35');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('403', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '36');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('404', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '37');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('405', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '38');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('406', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '39');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('407', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '40');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('408', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '41');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('409', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '42');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('410', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '43');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('411', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('4', '44');

/*5º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('501', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '45');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('502', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '46');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('503', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '47');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('504', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '48');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('505', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '49');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('506', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '50');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('507', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '51');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('508', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '52');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('509', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '53');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('510', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '54');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('511', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('5', '55');

/*6º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('601', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '56');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('602', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '57');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('603', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '58');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('604', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '59');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('605', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '60');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('606', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '61');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('607', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '62');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('608', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '63');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('609', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '64');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('610', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '65');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('611', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('6', '66');

/*7º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('701', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '67');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('702', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '68');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('703', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '69');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('704', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '70');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('705', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '71');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('706', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '72');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('707', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '73');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('708', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '74');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('709', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '75');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('710', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '76');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('711', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('7', '77');

/*8º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('801', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '78');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('802', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '79');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('803', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '80');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('804', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '81');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('805', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '82');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('806', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '83');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('807', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '84');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('808', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '85');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('809', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '86');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('810', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '87');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('811', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('8', '88');


/*9º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('901', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '89');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('902', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '90');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('903', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '91');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('904', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '92');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('905', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '93');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('906', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '94');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('907', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '95');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('908', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '96');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('909', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '97');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('910', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '98');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('911', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('9', '99');

/*10º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1001', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '100');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1002', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '101');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1003', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '102');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1004', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '103');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1005', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '104');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1006', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '105');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1007', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '106');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1008', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '107');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1009', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '108');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1010', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '109');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1011', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('10', '110');

/*11º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1101', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '111');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1102', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '112');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1103', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '113');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1104', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '114');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1105', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '115');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1106', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '116');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1107', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '117');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1108', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '118');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1109', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '119');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1110', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '120');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1111', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('11', '121');

/*12º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1201', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '122');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1102', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '123');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1203', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '124');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1204', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '125');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1205', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '126');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1206', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '127');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1207', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '128');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1208', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '129');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1209', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '130');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1210', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '131');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1211', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('12', '132');


/*13º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1301', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '133');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1102', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '134');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1303', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '135');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1304', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '136');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1305', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '137');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1306', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '138');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1307', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '139');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1308', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '140');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1309', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '141');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1310', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '142');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1311', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('13', '143');

/*14º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1401', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '144');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1402', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '145');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1403', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '146');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1404', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '147');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1405', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '148');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1406', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '149');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1407', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '150');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1408', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '151');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1409', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '152');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1410', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '153');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1411', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('14', '154');

/*15º ANDAR */

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1501', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('15', '155');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1502', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('15', '156');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1503', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('15', '157');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1504', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('15', '158');

INSERT INTO Rooms (NumberRoom, NameImage ) VALUES ('1505', 'logo-beco-castelo.png');
INSERT INTO Floors (NumberFloor, RoomsID) VALUES ('15', '159');
