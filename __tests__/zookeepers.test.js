const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/animals.js");
const { zookeepers } = require("../data/zookeepers");


jest.mock("fs");

test("creates zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Darlene", id:"noway"},
        zookeepers
    );

    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("noway");
});

test("filters by query", () => {
    const startingZookeepers = [
      {
        id: "2",
        name: "Isabella",
        age: 67,
        favoriteAnimal: "bear",
      },
      {
        id: "3",
        name: "Linda",
        age: 48,
        favoriteAnimal: "otter",
      },
    ];
  
    const updatedZookeepers = filterByQuery({ age: 67}, startingZookeepers);
  
    expect(updatedZookeepers.length).toEqual(1);
  });

  test("finds by id", () => {
    const startingZookeepers = [
    {
        id: "2",
        name: "Isabella",
        age: 67,
        favoriteAnimal: "bear",
    },
    {
        id: "3",
        name: "Linda",
        age: 48,
        favoriteAnimal: "otter",
    },
    ];
  
    const result = findById("3", startingZookeepers);
  
    expect(result.name).toBe("Linda");
  });

  test("validates age", () => {
  const zookeeper = {
    id: "2",
    name: "Raksha",
    age: 31,
    favoriteAnimal: "penguin",
  };

  const invalidZookeeper = {
    id: "3",
    name: "Isabella",
    age: "67",
    favoriteAnimal: "bear",
  };

  const result = validateZookeeper(zookeeper);
  const result2 = validateZookeeper(invalidZookeeper);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
  
