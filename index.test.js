const convertToStringFromListObjs = require("./index");

test("default example", () => {
  const listObjs = [
    {
      name: "A",
      x: 1,
    },
    {
      name: "G",
      x: 2,
    },
    {
      name: "H",
      x: 3,
    },
    {
      name: "K",
      x: 2,
    },
    {
      name: "F",
      x: 3,
    },
    {
      name: "D",
      x: 2,
    },
    {
      name: "B",
      x: 1,
    },
    {
      name: "E",
      x: 2,
    },
    {
      name: "C",
      x: 1,
    },
  ];
  expect(convertToStringFromListObjs(listObjs)).toEqual([
    "AGH",
    "AKF",
    "AD",
    "BE",
    "C",
  ]);
});

test("undefined input", () => {
  const listObjs = undefined;
  expect(convertToStringFromListObjs(listObjs)).toEqual([]);
});

test("random nodes input", () => {
  const listObjs = [
    {
      name: "A",
      x: 1,
    },
    {
      name: "G",
      x: 2,
    },
    {
      name: "H",
      x: 3,
    },
    {
      name: "K",
      x: 2,
    },
    {
      name: "F",
      x: 4,
    },
    {
      name: "D",
      x: 2,
    },
    {
      name: "B",
      x: 1,
    },
    {
      name: "E",
      x: 2,
    },
    {
      name: "C",
      x: 1,
    },
  ];
  expect(convertToStringFromListObjs(listObjs)).toEqual([
    "AGH",
    "AK",
    "F",
    "D",
    "BE",
    "C",
  ]);
});
