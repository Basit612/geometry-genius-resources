function calculatePentagonArea(){
  const perimeter = getInputById('pentagon-perimeter');
  const apothem = getInputById('pentagon-apothem');
  console.log(perimeter, apothem);

  const area = 0.5 * perimeter * apothem;
     setInnerTextById('pentagon-area',area);

}


function getInputById(inputField){
  const inputField = document.getElementById(inputField);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

function setInnerTextById(element, area){
  const element = document.getElementById(element);
    element.innerText = area;
}