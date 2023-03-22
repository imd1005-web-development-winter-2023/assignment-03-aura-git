let addTaskButton = document.getElementById('addTask');
let taskContainer = document.getElementById('taskContainer');
let input = document.getElementById('input');

addTaskButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = input.value;
    taskContainer.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        taskContainer.removeChild(paragraph);
    })
});

function displayDate() {
    document.getElementById("showDate").innerHTML = Date();
    setInterval(displayDate,1000);
}
