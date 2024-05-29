// Retrieve tasks and nextId from localStorage
// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("Title"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
var newDuedate= document.getElementById('datepicker-1').value;
var newTitle= document.getElementById('titleInput').value;
var newDescription= document.getElementById('descriptionInput').value;
const submitBtn = document.getElementById("submit-btn");
var present_date = JSON.parse(localStorage.getItem('Duedate'));
var taskListArray = [];
taskListArray.push(taskList);
let index = 0;
var color = '';


  function cardPostion() {

  $('td').click(function(){
    alert( $(this).attr('id') );
 });

  var li = $( "div" ).last();
  var offset = li.offset();
  localStorage.setItem('LeftOffset', `${offset.left}`);
  localStorage.setItem('TopOffset', `${offset.top}`);
}


// Todo: create a function to generate a unique task id
function generateTaskId() {
     let id = ""
     for (let i =0; i<10; i++) {
        id += Math.floor(Math.random() * 10)
     }
     return id
}

// Todo: create a function to create a task card
submitBtn.addEventListener("click",  async function createTaskCard() {

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
    submitBtn.preventDefault;
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
  
  const newDuedate= document.getElementById('datepicker-1').value;
  if (newDuedate == "") {
    submitBtn.preventDefault;
    alert("Please enter your Task Due Date");}
  
    else {
  
  if (currentDuedates === null) {
      Duedate.push(newDuedate);
    localStorage.setItem('Duedate', JSON.stringify(Duedate));
  
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
    submitBtn.preventDefault;
    alert("Please enter your Task Description");} 
  
    else {
  if (currentDescription === null) {
      Description.push(newDescription);
    localStorage.setItem('Description', JSON.stringify(Description));
  } 
  else {
    currentDescription.push(newDescription);
  localStorage.setItem('Description', JSON.stringify(currentDescription));
  }} 

  renderTaskList();
});


 // Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    let Title = JSON.parse(localStorage.getItem('Title'));

    if (index < Title.length) {

// assign value of taskid id as Javascript id for each element created to can be trageted to delete element
// use insertBefore on id=todo-cards

let Title = JSON.parse(localStorage.getItem('Title'));
let Description = JSON.parse(localStorage.getItem('Description'));
let DueDate = JSON.parse(localStorage.getItem('Duedate'));
var taskId = generateTaskId();
let toDocard = document.getElementById("Steve");


const dateColor = function(){

  // Date object
const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

// we will display the date as DD-MM-YYYY 

let date1 = new Date(`${currentMonth}/${currentDay}/${currentYear}`);

let date2 = new Date(`${DueDate[index]}`);

  
  // Calculating the time difference
  // of two dates
  let Difference_In_Time =
      date2.getTime() - date1.getTime();
  
  // Calculating the no. of days between
  // two dates
  let Difference_In_Days =
      Math.round
          (Difference_In_Time / (1000 * 3600 * 24));
  

// To display the final_result value

   if ((Difference_In_Days) < 0) {
    color = "#FF0000";
   }

   else if ((Difference_In_Days) <= 3) {
    color = "#FFFF00";
   }

   else {
    color = "#FFFFFF";
   }
   console.log(color)
   return color;  

}
let LeftOffset = localStorage.getItem('LeftOffset');
let TopOffset = localStorage.getItem('TopOffset');  
var taskCardparentDiv = document.createElement("div");
    
    if (LeftOffset !== null) {
    taskCardparentDiv.left = `${LeftOffset[index]}`;
    taskCardparentDiv.top = `${TopOffset[index]}`;};
    taskCardparentDiv.id = `${taskId}`;
    taskCardparentDiv.setAttribute("class", `${taskId}`);
    taskCardparentDiv.style = "width: 18rem;";
    toDocard.insertAdjacentElement("beforeend", taskCardparentDiv);

    var taskCarddialogDiv = document.createElement("div");
    taskCarddialogDiv.id = `${taskId}`;
    taskCarddialogDiv.setAttribute("class", "modal-dialog");
    taskCardparentDiv.insertAdjacentElement("beforeend", taskCarddialogDiv);
  
    var taskCardcontentDiv = document.createElement("div");
    taskCardcontentDiv.id = `${taskId}`;
    taskCardcontentDiv.setAttribute("class", "modal-content");
    taskCardcontentDiv.style.backgroundColor = dateColor();
    taskCarddialogDiv.insertAdjacentElement("beforeend", taskCardcontentDiv);
  
  
    var taskCardheaderDiv = document.createElement("div");
    taskCardheaderDiv.id = `${taskId}`;
    taskCardheaderDiv.setAttribute("class", "modal-header");
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardheaderDiv);
  
    var taskCardtitle = document.createElement("h6");
    taskCardtitle.id = `${taskId}`;
    taskCardtitle.setAttribute("class", "taskCardtitle");
    taskCardtitle.setAttribute("class", "modal-title");
    cardTitle = document.createTextNode(`${Title[index]}`);
    taskCardtitle.appendChild(cardTitle);
    taskCardheaderDiv.insertAdjacentElement("beforeend", taskCardtitle);
  
    var taskCardbodyDiv = document.createElement("div");
    taskCardbodyDiv.id = `${taskId}`;
    taskCardbodyDiv.setAttribute("class", "modal-body");
    taskCardbodyDiv.style.borderTopColor = "#000000" ;
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardbodyDiv);
  
    var taskCardbodyForm = document.createElement("form");
    taskCardbodyForm.itemid = `${taskId}`;
    taskCardbodyDiv.insertAdjacentElement("beforeend", taskCardbodyForm);
  
    var taskCardformDiv1 = document.createElement("div");
    taskCardformDiv1.itemid = `${taskId}`;
    taskCardbodyForm.insertAdjacentElement("beforeend", taskCardformDiv1);
  
    var taskCardDescription = document.createElement("label");
    taskCardDescription.id = `${taskId}`;
    taskCardDescription.setAttribute("class", "modal-title");
    cardDescription = document.createTextNode(`${Description[index]}`);
    taskCardDescription.appendChild(cardDescription);
    taskCardformDiv1.insertAdjacentElement("beforeend", taskCardDescription);
  
    var taskCardformDiv2 = document.createElement("div");
    taskCardformDiv2.itemid = `${taskId}`;
    taskCardbodyForm.insertAdjacentElement("beforeend", taskCardformDiv2);
  
    var taskCarddueDate = document.createElement("p2");
    taskCarddueDate.itemid = `${taskId}`;
    taskCarddueDate.setAttribute("class", "taskCarddueDate");
    cardDuedate = document.createTextNode(`${DueDate[index]}`);
    taskCarddueDate.appendChild(cardDuedate);
    taskCardformDiv2.insertAdjacentElement("beforeend", taskCarddueDate);
  
    var taskCardbuttonDiv = document.createElement("div");
    taskCardbuttonDiv.itemid = `${taskId}`;
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardbuttonDiv);
  
    var taskCarddeleteButton = document.createElement("button");
    taskCarddeleteButton.itemid = `${taskId}`;
    taskCarddeleteButton.setAttribute("class", "btn-close");
    taskCardbuttonDiv.insertAdjacentElement("beforeend", taskCarddeleteButton);

}
index++;
};
// Todo: create a function to handle adding a new task
function handleAddTask(event){
// create array of object for user input

// I included this functionality in the renderTasklist()

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
// delete task. used the uuid to target the specific task
}

function sortFunction() {
// Todo: create a function to handle dropping a task into a new status lane

var el = document.getElementById('Steve');
var el2 = document.getElementById('James');
var el3 = document.getElementById('Walter');

  var sortable1 = Sortable.create(el);
  var sortable2= Sortable.create(el2);
  var sortable3= Sortable.create(el3);

  var sortable1 =  new Sortable(el, el2, el3, {
    multiDrag: true, // Enable the plugin
    selectedClass: "sortable-selected", // Class name for selected item
    multiDragKey: null, // Key that must be down for items to be selected
    avoidImplicitDeselect: false, // true - if you don't want to deselect items on outside click
    fallbackTolerance: 3, // So that we can select items on mobile
    animation: 150,
    
    // Called when an item is selected
    onSelect: function(evt) {},
    // The selected item
    // Called when an item is deselected
    onDeselect: function(evt) {
      evt.item.forEach(element => {
        cardPostion(element);
      })}})
    console.log("Sortted");
    };
// The deselected item
/*function handleDrop(this) {

    function handleDragStart(this) {
      this.style.opacity = '0.4';
    }
  
    function handleDragEnd(this) {
      this.style.opacity = '1';
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(this) {
      this.preventDefault();
      return false;
    }
  
    function handleDragEnter(this) {
      this.classList.add('over');
    }
  
    function handleDragLeave(this) {
      this.classList.remove('over');
    }
  
    let items = document.querySelectorAll(`[id*="target-container"]`);
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });
  };*/
  

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$( document ).ready(function () {
  $(function() {
    $( "#datepicker-1" ).datepicker();
    sortFunction();
})

 if (taskList !== null) {
  taskList.forEach(element => {
  renderTaskList(element);
  index+1;
  })
 }
});

