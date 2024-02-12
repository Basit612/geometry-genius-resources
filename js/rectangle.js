function calculateRectangleArea(){
  // get length of the rectangle
  const lengthInput = document.getElementById('rectangle-input');
  const lengthText = lengthInput.value;
  const length = parseFloat(lengthText);
  console.log(length)

  // get width of the rectangle
  const widthInput = document.getElementById('rectangle-width');
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  console.log(width);

  // calculate Rectangle Area
  const area = length * width;
  console.log('area of the pop', area);



   // display triangle area
   const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText = area;
}