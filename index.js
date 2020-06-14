function averageDate(dateArray){
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
]))