//davaleba 1
let numArray = [1,2,3,4,];
function getSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum+=array[i];
    }
    return sum;
}
console.log(getSum(numArray))

//davaleba 2
function innerFunction() {
    console.log("This is the inner function");
}
function outerFunction() {
    console.log("This is the outer function");
    innerFunction();
}
outerFunction();

//davaleba 3
let number = 4;
function getSqrt(num){
    return Math.pow(num, 2)
}
console.log(getSqrt(number))

//davaleba 4
function addObject(inputObject) {
    const newObject = { ...inputObject };
  
    newObject.status = 'New';
    newObject.point = 40;
  
    return newObject;
  }
  
  const person = {
    name: 'John',
    age: 25,
  };
  
  const updatedPerson = addObject(person);
  
  console.log(updatedPerson);