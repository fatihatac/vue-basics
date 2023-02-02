var ulEl = document.querySelector("ul");
var inEl = document.querySelector("input");
var btnEl = document.querySelector("button");

function addGoal(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inEl.value));
    ulEl.appendChild(li);
    inEl.value = "";
}

btnEl.addEventListener("click",addGoal);

