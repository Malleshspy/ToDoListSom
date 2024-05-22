// const add=document.querySelector(".add")
const task=document.querySelector(".task");
const listItems=document.querySelector(".list");
function addTask(){
    if(task.value===''){
        alert("you must write your task to add");
    }else{
        let item=document.createElement("li");
        item.innerHTML=task.value;
        listItems.appendChild(item);
        let cross=document.createElement("span");
        cross.innerHTML="\u00d7";
        item.appendChild(cross);
    }
    task.value='';
    saveData();
}
listItems.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
    localStorage.setItem("data",listItems.innerHTML);
}
function showData(){
    listItems.innerHTML=localStorage.getItem("data");
}
showData();
// add.addEventListener("click",addTask());