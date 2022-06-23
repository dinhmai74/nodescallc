const nodeDistance = 1;

const convertToStringFromListObjs = (listObjs) => {
  if (!listObjs || !listObjs.length) return [];
  const result = [];

  let current = listObjs[0];
  let dicLevel = {
    [current.x]: current.name,
  };

  for (let i = 1; i < listObjs.length; i++) {
    const ele = listObjs[i];

    if (ele.x - current.x === nodeDistance) {
      dicLevel[ele.x] = `${dicLevel[ele.x - 1]}${ele.name}`;
      current = ele;
    } else if (dicLevel[ele.x]) {
      result.push(dicLevel[current.x]);
      if (i === listObjs.length - 1) {
        result.push(ele.name);
      }
      dicLevel[ele.x] = (dicLevel[ele.x - 1] || "") + ele.name;
      current = ele;
    } else {
      if (dicLevel[current.x]) result.push(dicLevel[current.x]);
      dicLevel = {
        [ele.x]: ele.name,
      };
      current = ele;
    }
  }

  return result;
};

module.exports = convertToStringFromListObjs;
