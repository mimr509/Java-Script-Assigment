// Start feetToMile function task;
      var feet = 20000;
      function feetToMile(feet){
      var mile = feet  / 5280;
        return mile ;
      }
      var result = feetToMile(20000);
      console.log(result.toFixed(2));
 
// End first task

// start woodCalculator function task;
  var chair = 14;
  var table = 5;
  var bed  = 12;
function woodCalculator(chair, table, bed){
  var woodCount = (chair*1) + (table*3) + (bed*5); 
  //Expert already told us need 1Cubic Feet wood for 1 chair, 3 Cubic Feet for 1 table and 5 Cubic Feet wood for 1 bed thats why multiple 1 with chair 3 with table and 5 with bed;
  return woodCount;
}
// Calculation for 1 chair 1 table and 1 bed using woodCalculator() function
var woodRequired = woodCalculator(1, 1, 1);
console.log(woodRequired); 

var woodRequired = woodCalculator(14, 5, 12);
console.log(woodRequired);



