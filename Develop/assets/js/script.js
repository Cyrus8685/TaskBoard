// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
var openTask = document.getElementById("addTask");
var closeTask = document.getElementById("closeButton");
var cardTask = document.getElementById("newTask");

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

    openTask.addEventListener("click", () => {
         cardTask.classList.add("open");
     });
     
    closeTask.addEventListener("click", () => {
        cardTask.classList.remove("open");
    });
}

 // Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const Title = [];
    let currentTitles = JSON.parse(localStorage.getItem('Title'));
    
    if (currentTitles == null) {
      currentTitles = [];
    };
    
    if (currentTitles.length >= 5) {
      currentTitles.length = 0;
    };
    
    const newTitle= document.getElementById('titleInput').value;
    
    if (newTitle == "") {
      submit.preventDefault();
      alert("Please enter your Task Title");}
    
      else {
    if (currentTitles === null) {
      Title.push(newTitle);
      localStorage.setItem('Title', JSON.stringify(Title));
    
    } else {
    currentTitles.push(newTitle);
    localStorage.setItem('Title', JSON.stringify(currentTitles));
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
    
    const newDuedate= document.getElementById('dateInput').value;
    if (newDuedate == "") {
      submit.preventDefault();
      alert("Please enter your Task Due Date");}
    
      else {
    
    if (currentDuedates === null) {
        Duedate.push(newDuedate);
      localStorage.setItem('Duedate', JSON.stringify(Users));
    
    } else {
    currentDuedates.push(newDuedate);
    localStorage.setItem('Duedate', JSON.stringify(currentDuedates));
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
    
    const newDescription= document.getElementById('descriptionInput').value;
    if (newDescription == "") {
      submit.preventDefault();
      alert("Please enter your Task Description");} 
    
      else {
    if (currentDescription === null) {
        Description.push(newDescription);
      localStorage.setItem('Content', JSON.stringify(Description));
    } 
    else {
      currentDescription.push(newDescription);
    localStorage.setItem('Description', JSON.stringify(currentDescription));
    }}  
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
// create array of object for user input
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
    $(function () {
        $("#my_date_picker").
        datepicker ();
    });
    // call function requested on page 
})
