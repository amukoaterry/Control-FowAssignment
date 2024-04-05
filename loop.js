//1. Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function takesArray(arr){
  const multiply = arr.slice(0,4).map(num => num * num );
  const add = arr.slice(-2).map(num => num + 10);
  const secondArray = multiply.concat(add);
  console.log(secondArray);
   return secondArray
}
takesArray([1,2,3,4,5]);

// 2.  Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

   let num = (arrNum) =>{
    while(num.length<5 ){
      console.log('next');
       arrNum.pop();
      if(arrNum.length ===5){
      console.log('isequal to');
break;
    }
  }
}
 num =( [1,2,3,4,5,6,7,8,9]);


// 3. Write a function that takes in an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

function useContinue(fruits){
 for  (i=0; i<fruits.length; i++){
  if(i == 1){
    continue;
  }
  console.log(fruits[i]);
 }
}
let processedFruits = ['apple','plum','banana','strawberries','kiwi'];
useContinue(processedFruits);

// 4. Write a function that accepts an array of strings and console.logs each element using a for loop.

function acceptArray (verb){
  for(let i =0; i<=verb.length;i++){
  }
  console.log((verb[i]));
}
acceptArray(['walk','move','stand'])

// 5. Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

function takesString (word){
let i=word.length;
while(i--){
  console.log((word[i]))
}
}
takesString("Amukoa")