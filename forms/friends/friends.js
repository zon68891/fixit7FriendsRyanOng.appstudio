//variables undefine for the prompts
//Prompt should be prompt
var firstFriend = prompt("Enter the name of your first of three friends.");
var secondFriend = prompt("Enter the name of your second of three friends.");
var thirdFriend = prompt("Enter the name of your third of three friends.");
//alert should be changed to a number prompt with variable "best"
var best = Number(prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third"))

// should be an array, hence []
var friendNames = [];

//array position should be reset
friendNames[0] = firstFriend
friendNames[1] = secondFriend
friendNames[2] = thirdFriend
let bestFriend = friendNames[best - 1]

//lacking {}
// lack another equal sign on else if statement
if (bestFriend.charAt(0) == "A") {
   alert("Your best friends' name starts with A.")
}else if (bestFriend.charAt(0) == "B") {
   alert("Your best friends' name starts with B.")
} else { 
   alert("Your name starts with something other than A or B.")
}

