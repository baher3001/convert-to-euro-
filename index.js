var number1 = document.getElementById('number')
var convert = document.getElementById('convert');
var result = document.getElementById('result');

convert.onclick = function()
{
    result.innerHTML = number1.value* 18.77+"  " + "L.E" ;
}