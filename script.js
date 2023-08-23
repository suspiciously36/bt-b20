// Bai 1:

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var newArr = arrA.reduce(function (pre, current) {
  if (arrB.includes(current)) {
    pre.push(current);
  }
  return pre;
}, []);

console.log(newArr);

// Bai 2:

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flattenArray(arr) {
  return arr.reduce(function (flat, current) {
    if (Array.isArray(current)) {
      return flat.concat(flattenArray(current));
    } else {
      return flat.concat(current);
    }
  }, []);
}

console.log(flattenArray(arr));

// Bai 3:

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

function groupingElements(arr) {
  var result = [];

  for (var i = 0; i < arr[0].length; i++) {
    var newArr = [];
    for (var j = 0; j < arr.length; j++) {
      newArr.push(arr[j][i]);
    }
    result.push(newArr);
  }

  return result;
}

var result = groupingElements(arr);
console.log(result);

// Bai 4:

// Huhu chua bit lam :<
