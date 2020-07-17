//  Start brickCalculato function task;
function brickCalculator(floor) {
  var brick;
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
function tinyFriend(array){
  var result=[]; // array for saving result;
  var c=0;  //counter for the result array;
  var smallest=array[0].length; //set smallest to the first name length; 
  for(var i=1;i<array.length;i++) //loop to find the smallest name length 
  {    if(array[i].length<smallest)  //comparing the current name length with smallest and update samllest if needed; 
       {
           smallest=array[i].length;
       }
  }
  for(var i=0;i<array.length;i++) //loop to find the names with the samllest length
  {
      if(array[i].length==smallest)//if it finds a names with smallest length then it saves the name in result array and increases the counter of result array 
        { 
            result[c]=array[i];
            c++; 
        }          
  }
  return result; //returns result array which contains the names with smallest length
}
var names=['Ovi','Arif','Po','Raihan','Ra'];
var res4 = tinyFriend(names);
console.log(res4);