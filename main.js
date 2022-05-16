// var numbers = [5, 3, 7, 8, 11];
// var sum = 0;
// for (var i = 0; i < 5; i++) {
//   sum += numbers[i];
// }
// document.write(sum / i + "<br>");
// document.write(sum + "<br>");

// var names = ["nati", "shimon", "lior", "daniel", "dalia"];
// for (var i = 0; i < 5; i++) {
//   sum = names;
// }

// var numArray = [5, 4, 3, 2, 1];
// function numbersArray(x) {
//   for (var i = 0; i < numArray.length; i++) {
//     if (numArray[i] == x) {
//       console.log(true);
//     }
//     else if (numAA){
//       console.log(false)
//     }
//   }
// }
// numbersArray(7);
//  var numArray = [8,11,23,88,90]

//   function numArray1 (){
//    for (var i = 0; i<numArray.length;i++){
//   if (numArray[i]%2==0){
//     console.log(numArray[i])
//   }
//  }}
//  numArray1()
//  var num1 =[1,2,3]
//  var num2 = [4,5,6]
//  function numArray(){
//  if (num1.length == num2.length){
//    num1.push(...num2)
//    console.log(num1,true)
//  }
//  else{
//    console.log(false)
//  }
// }
// numArray()
// var numbers = [10, 60, 40, 60, 90,100];
// function MaxNumArray (){
// console.log(Math.max(...numbers));
// }
// MaxNumArray()

// function NumArray(array = []) {

//     console.log(array.sort());

// }
// NumArray([8,9,4,6,1-]);
// var i = 0;
// var max = 0;
// while(i<5){
//   var numbers =+prompt("enter num")
//   if(sum<numbers){
//     sum =numbers
//     console.l
//   }

//   i++
// }
// var x = "********"
// function rectangle() {


// for(var i =0 ; i<16;i++){
//   document.write(x+"<br>")
// }
// }
// rectangle()
// var array =[]
// function numbers (array,number){
//   for (var i = 0; i < array.length; i++) {
//     if (number==array[i]){
//       array.splice([])
//     }
//     else{
//       array.push(number)
//     }
//   }
  
// }
// numbers([7,9,8,5,4,3,2,1],2)

function numMax (array){
  var max= array[0]
  for (var i= 0; i< array.length; i++){
    if (max<array[i]){
      max = array[i]
    }
  }

  console.log(max)
}
numMax([7,4,2,9])