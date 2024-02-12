// function calculateParallelogramArea(){
//   // const baseInput = document.getElementById('parallelogram-base');
//   // const baseText = baseInput.ariaValueMax;
//   // const base = parseFloat(baseText);
//   // console.log(base);

//   const base = getParallelogramBase();
//   console.log(base);
// }

// // function getParallelogramBase(){
// //    const baseInput = document.getElementById('parallelogram-base');
// //   const baseText = baseInput.ariaValueMax;
// //   const base = parseFloat(baseText);
// //   return base;
// }


function calculateParallelogramArea(){
 const base = getInputById('parallelogram-base');
//  console.log('base value', base);

 const height = getElementById('parallelogram-height')
//  console.log('height value', height);

const area = base * height;
console.log('area of the parallelogram is', area);
setInnerTextById('parallelogram-area',area);
}

function getInputById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.ariaValueMax;
  const inputValue = parseFloat(inputValueText);
  // console.log(inputValue);
  return inputValue;
}

function setInnerTextById(elementId, area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}

