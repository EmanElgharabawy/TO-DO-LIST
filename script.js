
const  inputBox=document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");


function addtask() {
    if(inputBox.value ==='')
    {
        alert("Please Enter Your Task ")
    }
    else {
        let li = document.createElement("Li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDate();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")

    {
        e.target.classList.toggle("checked"); 
        saveDate(); 
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
    },false);

  function saveDate(){
   localStorage.setItem("data" ,listcontainer.innerHTML);
  }
  
  function ShowTasks(){
         listcontainer.innerHTML = localStorage.getItem("data"); 
         
  }
    ShowTasks();




    let arr = ['ahmed','karim','eslam',];

  console.log(typeof arr);
