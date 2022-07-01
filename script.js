/*key feature - fact generator*/ 
var factList = [
  "An embryo doesn't attach to the uterus until day 10", /*0*/
  "The electrical cellular activity(hertbeat) doesn't mean there is  formed heart, just a few cells can conduct energy", /*1*/
  "one in five pregnancies is a spontaneous abortion(miscrriage)", /*2*/
  " Not even  person can be forced to donate an organ even to save a life" ];/*3*/

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton){
 myButton.addEventListener("click",displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
