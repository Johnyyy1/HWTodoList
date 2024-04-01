var todo = []

function add() {
    var list = document.getElementById("input").value;
    if (list == "") {
        document.getElementById("task-list").innerHTML = "Please enter a task";
    }else{
        todo.push(list);
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = todo[todo.length - 1]; 
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "check";
        checkbox.style.height = "25px";
        checkbox.style.width = "25px";
        checkbox.value = "off";
        document.getElementById("task-list").appendChild(ul).appendChild(checkbox);  
            checkbox.addEventListener("click", function () {
                checkbox.style.display = "none";
                li.style.display = "none";
            }) 
    }
}

function randomColor(){
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    li.style.backGroundColor = color;
}

// function createCheckbox() {
//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.id = "check";
//     checkbox.style.height = "20px";
//     checkbox.style.width = "20px";
//     document.getElementById("task-list").appendChild(checkbox);
// }