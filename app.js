var range = document.getElementById('passRange')
var num = document.getElementById('passLength')
range.addEventListener('input', function (sync){
    num.value = sync.target.value
})

num.addEventListener('input' , function(sync){
    range.value = sync.target.value

})
function Ucase(){
    var randomNum = Math.floor(Math.random() * (26)) + 65;
    var Uchar = String.fromCharCode(randomNum);; 
    return Uchar
}
function Lcase(){
    var randomNum = Math.floor(Math.random() * (26)) + 97;
    var Lchar = String.fromCharCode(randomNum);; 
    return Lchar
}
function Numbers(){
    var randomNum = Math.floor(Math.random() * (9)) + 48;
    var Schar = String.fromCharCode(randomNum);; 
    return Schar
}
function Symbols(){
    var randomNum = Math.floor(Math.random() * (14)) + 33;
    var Nchar = String.fromCharCode(randomNum);; 
    return Nchar
}

var upper = document.getElementById('upperC')
var lower = document.getElementById('lowerC')
var numbers = document.getElementById('numbersC')
var symbols = document.getElementById('symbolsC')
var ETR = document.getElementById('ETR')
var allC = document.getElementById('allC')
var pass = ''
function genPass(){
  var length = +range.value
    for( i = 0 ; i <= length ; i++){
   if (upper.checked && pass.length < length) pass += Ucase()
  if (lower.checked && pass.length < length) pass += Lcase()
  if (numbers.checked && pass.length < length) pass += Numbers()
  if (symbols.checked && pass.length < length) pass += Symbols()
}
document.getElementById('output').value = pass;
console.log(pass)
}

var ETS = document.getElementById('ETS');
var symbols = document.getElementById('symbolsC');

ETS.addEventListener('change', function () {
  if (ETS.checked) {
    symbols.disabled = true;
    numbers.disabled = true;
    upper.checked = true;
    lower.checked = true;
  } 
});

ETR.addEventListener('change' , function (){
  if(ETR.checked){
    upper.checked = true
    lower.checked = true
    symbols.disabled = false;
    numbers.disabled = false;
  }
})

allC.addEventListener('change' , function(){
  if(allC.checked){
    upper.checked = true
    lower.checked = true
    symbols.checked = true
    numbers.checked = true
        symbols.disabled = false;
    numbers.disabled = false;
  }
})

function CopyPass(){
var output = document.getElementById('output').value
navigator.clipboard.writeText(output)
}