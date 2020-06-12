
exports.seed = function (knex) {
  return knex('Floors').del()
    .then(function () {
      return knex('Floors').insert([
        { FloorID: 1,  NumberFloor: 1  },
        { FloorID: 2,  NumberFloor: 2  },
        { FloorID: 3,  NumberFloor: 3  },
        { FloorID: 4,  NumberFloor: 4  },
        { FloorID: 5,  NumberFloor: 5  },
        { FloorID: 6,  NumberFloor: 6  },
        { FloorID: 7,  NumberFloor: 7  },
        { FloorID: 8,  NumberFloor: 8  },
        { FloorID: 9,  NumberFloor: 9  },
        { FloorID: 10, NumberFloor: 10 },
        { FloorID: 11, NumberFloor: 11 },
        { FloorID: 12, NumberFloor: 12 }
      ]);
    });
};

// Example { FloorID: 1, NumberFloor: 1 },