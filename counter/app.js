var increaseBtn = document.getElementById("btn-increase");
var resetBtn = document.getElementById("btn-reset");
var decreaseBtn = document.getElementById("btn-decrease");

var numbrtDiv = document.getElementById("number");
// console.log(typeof numbrtDiv.innerHTML);
console.log(Number(numbrtDiv.innerHTML) );
//increase function
function increase(){
    numbrtDiv.innerHTML = Number(numbrtDiv.innerHTML)+1;
}
//increase function
function decrease(){
    numbrtDiv.innerHTML = Number(numbrtDiv.innerHTML)-1;
}
//increase function
function reset(){
    numbrtDiv.innerHTML = 0;
}
// increaseBtn.onclick = function(){
//     increase();
// }
increaseBtn.addEventListener("click" , increase);//event,functionname
decreaseBtn.addEventListener("click" , decrease);
resetBtn.addEventListener("click" , reset);