
var arr = { "one": 1, "two": 2, "three": 3 }; 

//to get values
for (let value of Object.values(arr)) {
    console.log(value);
}
//Output: 1, 2, 3

//to get keys
for (let value of Object.keys(arr)) {
    console.log(value);
}
//Output: one, two, three