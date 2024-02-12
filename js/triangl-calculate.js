function calculateTriangleArea(){
  const triangleBase = document.getElementById('triangle-base');
  const triangleBaseText = triangleBase.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  const trianglHeight = document.getElementById('triangl-height');
  const trianglHeightText = trianglHeight.value;
  const height = parseFloat(trianglHeightText)
  console.log(height);

  const area = 0.5 * base * height;
  console.log('area triangle', area);


  // display triangle area
  const trianglAreaSpn = document.getElementById('triangl-area');
  trianglAreaSpn.innerText = area;
}