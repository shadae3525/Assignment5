document.getElementById'radius-input')
let radius = document.getElementById('radius-input')

function calculateArea() {
  let area = 0;
  let radius = document.getElementById('radius-input').value;
  area = Math.PI * radius * radius;
}

document.getElementById('id-output').innerHTML = 'Area = ' + area;