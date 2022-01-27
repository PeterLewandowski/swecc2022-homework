const testArray = [
  true, //0
  false, //1
  false, //2
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

// #1
for (let countTrue of testArray) {
    console.log(countTrue)
}

//#2

console.log("--------------------------")

let count = 0
for(let i = 0; i < testArray.length; i++)
{
  let countTrue = testArray[i]
  if(countTrue === true)
  {
    count++ //count+=1
  }
}

console.log(count)

// eval to true, false