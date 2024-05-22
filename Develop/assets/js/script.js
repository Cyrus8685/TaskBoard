// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
var openTask = document.getElementById("addTask");
var closeTask = document.getElementById("closeButton");
var cardTask = document.getElementById("newTask");
var dateTask = document.getElementById("dateInput");
var newDuedate= document.getElementById('datepicker-1').value;
var newTitle= document.getElementById('titleInput').value;
var newDescription= document.getElementById('descriptionInput').value;
let submitBtn = document.getElementById("submit-btn");

// Todo: create a function to generate a unique task id
function generateTaskId() {
     let id = ""
     for (let i =0; i<10; i++) {
        id += Math.floor(Math.random() * 10)
     }
     return id
}

// Todo: create a function to create a task card
function createTaskCard() {

  const Title = [];
  let currentTitles = JSON.parse(localStorage.getItem('Title'));
  
  if (currentTitles == null) {
    currentTitles = [];
  };
  
  if (currentTitles.length >= 5) {
    currentTitles.length = 0;
  };
  
  var newTitle= document.getElementById('titleInput').value;
  if (newTitle == "") {
    submitBtn.preventDefault();
    alert("Please enter your Task Title");}
  
    else {
  if (currentTitles === null) {
    Title.push(newTitle);
    var finalTitle = `${Title}`;
  
  } else {
  currentTitles.push(newTitle);
  var finalTitle = `${currentTitles}`;
  }
    };

  const Duedate = [];
  let currentDuedates = JSON.parse(localStorage.getItem('Duedate'));
  
  if (currentDuedates == null) {
       currentDuedates = [];
  };
  
  if (currentDuedates.length >= 5) {
       currentDuedates.length = 0;
  };
  
  var newDuedate= document.getElementById('datepicker-1').value;
  if (newDuedate == "") {
    submitBtn.preventDefault();
    alert("Please enter your Task Due Date");}
  
    else {
  
  if (currentDuedates === null) {
      Duedate.push(newDuedate);
      var finalDuedate = `${Duedate}`;
  } else {
  currentDuedates.push(newDuedate);
  var finalDuedate = `${currentDuedates}`;
  }
    };

  const Description = [];
  let currentDescription = JSON.parse(localStorage.getItem('Description'));
  if (currentDescription == null) {
    currentDescription = [];
  }
  
  if (currentDescription.length >= 5) {
    currentDescription.length = 0;
  };
  
  var newDescription= document.getElementById('descriptionInput').value;
  if (newDescription == "") {
    submitBtn.preventDefault();
    alert("Please enter your Task Description");} 
  
    else {
  if (currentDescription === null) {
      Description.push(newDescription);
      var finalDescription = `${Description}`;
  } 
  else {
    currentDescription.push(newDescription);
    var finalDescription = `${currentDescription}`;
  }}
  
    var taskId = generateTaskId();

  const newTask = {
            TaskId: `${taskId}`,
            Title: `${finalTitle}`,
            Duedate: `${finalDuedate}`,
            Description: `${finalDescription}`,
  }
   
  localStorage.setItem(`NewTask`, JSON.stringify(newTask));

document.getElementById('datepicker-1').value = "";
document.getElementById('titleInput').value = "";
document.getElementById('descriptionInput').value = "";
}

 // Todo: create a function to render the task list and make cards draggable
 submitBtn.addEventListener("click",  async function renderTaskList() {
// assign value of taskid id as Javascript id for each element created to can be trageted to delete element
// use insertBefore on id=todo-cards
const randomColor = function(){
  const hex = '0123456789ABCDEF'; //hex colors range
  let color = '#';
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
  var taskId = generateTaskId();
  let taskList = JSON.parse(localStorage.getItem('NewTask'));
  let toDocard = document.getElementById("todo-cards");

  var taskCardparentDiv = document.createElement("div");
  taskCardparentDiv.itemid = `${taskId}`;
  taskCardparentDiv.draggable = "true";
  taskCardparentDiv.class = "modal";
  taskCardparentDiv.style = "width: 18rem;";
  taskCardparentDiv.style.backgroundColor = randomColor();
  toDocard.insertAdjacentElement("beforeend", taskCardparentDiv);

  taskCarddialogDiv = document.createElement("div");
  taskCarddialogDiv.itemid = `${taskId}`;
  taskCarddialogDiv.class = "modal-dialog";
  taskCardparentDiv.insertAdjacentElement("beforeend", taskCarddialogDiv);

  taskCardcontentDiv = document.createElement("div");
  taskCardcontentDiv.itemid = `${taskId}`;
  taskCardcontentDiv.class = "modal-content";
  taskCarddialogDiv.insertAdjacentElement("beforeend", taskCardcontentDiv);


  taskCardheaderDiv = document.createElement("div");
  taskCardheaderDiv.itemid = `${taskId}`;
  taskCardheaderDiv.class = "modal-header";
  taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardheaderDiv);

  var taskCardtitle = document.createElement("h6");
  taskCardtitle.itemid = `${taskId}`;
  taskCardtitle.class = "taskCard";
  taskCardtitle.class = "modal-title";
  const cardTitle = document.createTextNode(`${taskList.Title}`);
  taskCardtitle.appendChild(cardTitle);
  taskCardheaderDiv.insertAdjacentElement("beforeend", taskCardtitle);

  taskCardbodyDiv = document.createElement("div");
  taskCardbodyDiv.itemid = `${taskId}`;
  taskCardbodyDiv.class = "modal-body";
  taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardbodyDiv);

  taskCardbodyForm = document.createElement("form");
  taskCardbodyForm.itemid = `${taskId}`;
  taskCardbodyDiv.insertAdjacentElement("beforeend", taskCardbodyForm);

  taskCardformDiv1 = document.createElement("div");
  taskCardformDiv1.itemid = `${taskId}`;
  taskCardbodyForm.insertAdjacentElement("beforeend", taskCardformDiv1);

  var taskCardDescription = document.createElement("label");
  taskCardDescription.itemid = `${taskId}`;
  taskCardDescription.class = "taskCardDescription";
  taskCardDescription.class = "modal-title";
  const cardDescription = document.createTextNode(`${taskList.Description}`);
  taskCardDescription.appendChild(cardDescription);
  taskCardformDiv1.insertAdjacentElement("beforeend", taskCardDescription);

  taskCardformDiv2 = document.createElement("div");
  taskCardformDiv2.itemid = `${taskId}`;
  taskCardbodyForm.insertAdjacentElement("beforeend", taskCardformDiv2);

  var taskCarddueDate = document.createElement("p2");
  taskCarddueDate.itemid = `${taskId}`;
  taskCarddueDate.class = "taskCarddueDate";
  const cardDuedate = document.createTextNode(`${taskList.Duedate}`);
  taskCarddueDate.appendChild(cardDuedate);
  taskCardformDiv2.insertAdjacentElement("beforeend", taskCarddueDate);

  taskCardbuttonDiv = document.createElement("div");
  taskCardbuttonDiv.itemid = `${taskId}`;
  taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardbuttonDiv);

  var taskCarddeleteButton = document.createElement("button");
  taskCarddeleteButton.itemid = `${taskId}`;
  taskCarddeleteButton.class = "taskCarddeleteButton";
  taskCarddeleteButton.class = "btn btn-primary";
  taskCarddeleteButton.type = "button";
  taskCarddeleteButton.toggle = "modal";
  taskCardbuttonDiv.insertAdjacentElement("beforeend", taskCarddeleteButton);

});
// Todo: create a function to handle adding a new task
function handleAddTask(event){
// create array of object for user input
// I included this functionality in the renderTaskList ()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
// delete task. used the uuid to target the specific task
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
//    use jqueru ui
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$( document ).ready(function () {
  $(function() {
    $( "#datepicker-1" ).datepicker();
 })
});