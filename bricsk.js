//  Start brickCalculato function task;
function brickCalculator(floor) {
  var bricks;
  if(floor<=10)
   bricks = 1000*15*floor; //  1-10 floors are 15feet and For 1 floor 1000 brick needed,
  else if(floor>=11&&floor<=20)
   bricks = 1000*12*floor; //  11-20 floors are 12feet and For 1 floor 1000 brick needed,
  else
   bricks = 1000*10*floor; // For 1 floor 1000 brick needed, more than 20 floors are 10feet
  return bricks //returns total brick needed;
}
var result = brickCalculator(7);
console.log(result);
var result = brickCalculator(19);
console.log(result);

//**answer to question no 4*/
// start tinyFriend function task 
/**answer to question no 4*/
function tinyFriend(array){
  var result=[]; 
  var count = 0;  
  var smallest = array[0].length;
  for(var i=1;i<array.length;i++)  
  {    if(array[i].length<smallest)   
       {
           smallest=array[i].length;  
       }
  }
      for(var i=0;i<array.length;i++) 
        {
      if(array[i].length==smallest) 
        { 
            result[count]=array[i];
            count++; 
        }          
  }
  return result; 
}
var names=['mim','kuddus','salam','rana','jim'];
var result = tinyFriend(names);
console.log(result);