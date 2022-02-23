//Arrival and departure costs
var ticket = 500 * 10910;

//hotel expenses
var hotel = 250 * 10910; 

//vacation expenses
var rest = 120 * 11800; 

//calculation
var calculation = (ticket + hotel + rest); 

//deposit
var enter = prompt("Alisherda qancha pul bor?");

//Let the White Road Alisher console come out if the funds are sufficient
if (calculation <= enter) {console.log("White road Alisher")} 

//otherwise, you have to be patient, Alisher has to get out  console
else {console.log("You have to be patient Alisher"); 

};
