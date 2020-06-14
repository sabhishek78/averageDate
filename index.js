function averageDate(dateArray){
  if(dateArray.length===0){
    return null;
  }
let unixTimeStampArray=dateArray.map((e)=>e.getTime());
return timeConverter(average(unixTimeStampArray));
}
function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
function timeConverter(UNIX_timestamp){
  return new Date(UNIX_timestamp).toISOString();
}
console.log(averageDate([
  new Date(Date.UTC(1970, 0, 1)),
  new Date(Date.UTC(1971, 0, 1))
]));
console.log(averageDate([]));
// Create a function that given an array of dates returns the average date in string form.

// Examples
// averageDate([]) ➞ null

// averageDate([
//   new Date(Date.UTC(1970, 0, 1))
// ]) ➞ "1970-01-01T00:00:00.000Z"

// averageDate([
//   new Date(Date.UTC(1970, 0, 1)),
//   new Date(Date.UTC(1971, 0, 1))
// ]) ➞ "1970-07-02T12:00:00.000Z"
// Notes
// For the return value you can use the .toISOString() method.
// If dates is an empty array return null.