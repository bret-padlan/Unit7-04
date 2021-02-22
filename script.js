document.getElementById('click').addEventListener('click', dayAge)

let calculation = 0
let day = ''

function dayAge () {
  calculation = document.getElementById('table').value
  day = document.getElementById('table-two').value
  if ((calculation>12 && calculation<21) || (day=='Monday' || day=='Friday')) {
    document.getElementById('name').innerHTML = ('You do not pay')
  } else {
    document.getElementById('name').innerHTML = ('You must pay')
  }
}
