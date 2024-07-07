// Retrieve tasks and nextId from localStorage
// Retrieve tasks and nextId from localStorage
let nextId = JSON.parse(localStorage.getItem("nextId"));
var newDuedate= document.getElementById('datepicker-1').value;
var newTitle= document.getElementById('titleInput').value;
var newDescription= document.getElementById('descriptionInput').value;
const submitBtn = document.getElementById("submit-btn");
const addTask = document.getElementById("addTask");
let Index = 0;
var color = '';

// Todo: create a function to generate a unique task id
function generateTaskId(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
  // Loop to generate characters for the specified length
  for (let i = 0; i < 10; i++) {
      const randomInd = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomInd);
  }
  return result;
}

var taskId = generateTaskId();

// Todo: create a function to create a task card
function createTaskCard() {

    
    if (localStorage.length >= 15) {
      localStorage.clear();
    };
    
    var newTitle= document.getElementById('titleInput').value;
    if (newTitle == "") {
      submitBtn.preventDefault();
      alert("Please enter your Task Title");}
    
    var newDuedate= document.getElementById('datepicker-1').value;
    if (newDuedate == "") {
      submitBtn.preventDefault();
      alert("Please enter your Task Due Date");}
    
    var newDescription= document.getElementById('descriptionInput').value;
    if (newDescription == "") {
      submitBtn.preventDefault();
      alert("Please enter your Task Description");} 

  const newTask = {
            TaskId: `${taskId}`,
            Title: `${newTitle}`,
            Duedate: `${newDuedate}`,
            Description: `${newDescription}`,
            Columns: "columnOne"
  }
  console.log(newTask);
  localStorage.setItem(newTask.TaskId, JSON.stringify(newTask));

  handleAddTask();

}


 // Todo: create a function to render the task list and make cards draggable

// Todo: create a function to handle adding a new task
function handleAddTask(){

  let taskList = JSON.parse(localStorage.getItem(`${taskId}`));
  let toDocard = document.getElementById("to-do-cards");

  const dateColor = function(){
  
    // Date object
  const date = new Date();
  
  let currentDay= String(date.getDate()).padStart(2, '0');
  
  let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  
  let currentYear = date.getFullYear();
  
  // we will display the date as DD-MM-YYYY 
  
  let date1 = new Date(`${currentMonth}/${currentDay}/${currentYear}`);
  
  let date2 = new Date(taskList.Duedate);
  
    
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
  
    var taskCardparentDiv = document.createElement("div");
    taskCardparentDiv.id = `${taskId}`;
    taskCardparentDiv.setAttribute("data-bs-backdrop", "static");
    taskCardparentDiv.draggable = "true";
    taskCardparentDiv.className = "card taskCardparentDiv";
    taskCardparentDiv.style = "width: 18rem;";
    taskCardparentDiv.style.backgroundColor = dateColor();
    toDocard.insertAdjacentElement("beforeend", taskCardparentDiv);
  
    taskCarddialogDiv = document.createElement("div");
    taskCarddialogDiv.id = `${taskId}`;
    taskCarddialogDiv.className = "card-dialog";
    taskCardparentDiv.insertAdjacentElement("beforeend", taskCarddialogDiv);
  
    taskCardcontentDiv = document.createElement("div");
    taskCardcontentDiv.id = `${taskId}`;
    taskCardcontentDiv.className = "card-content";
    taskCarddialogDiv.insertAdjacentElement("beforeend", taskCardcontentDiv);
  
  
    taskCardheaderDiv = document.createElement("div");
    taskCardheaderDiv.id = `${taskId}`;
    taskCardheaderDiv.className = "card-header";
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardheaderDiv);
  
    var taskCardtitle = document.createElement("h6");
    taskCardtitle.id = `${taskId}`;
    taskCardtitle.className = "card-title taskCard";
    const cardTitle = document.createTextNode(`${taskList.Title}`);
    taskCardtitle.appendChild(cardTitle);
    taskCardheaderDiv.insertAdjacentElement("beforeend", taskCardtitle);
  
    taskCardbodyDiv = document.createElement("div");
    taskCardbodyDiv.id = `${taskId}`;
    taskCardbodyDiv.className = "card-body";
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardbodyDiv);
  
    taskCardbodyForm = document.createElement("form");
    taskCardbodyForm.id = `${taskId}`;
    taskCardbodyDiv.insertAdjacentElement("beforeend", taskCardbodyForm);
  
    taskCardformDiv1 = document.createElement("div");
    taskCardformDiv1.id = `${taskId}`;
    taskCardbodyForm.insertAdjacentElement("beforeend", taskCardformDiv1);
  
    var taskCardDescription = document.createElement("label");
    taskCardDescription.id = `${taskId}`;
    taskCardDescription.className = "card-title taskCardDescription";
    const cardDescription = document.createTextNode(`${taskList.Description}`);
    taskCardDescription.appendChild(cardDescription);
    taskCardformDiv1.insertAdjacentElement("beforeend", taskCardDescription);
  
    taskCardformDiv2 = document.createElement("div");
    taskCardformDiv2.id = `${taskId}`;
    taskCardbodyForm.insertAdjacentElement("beforeend", taskCardformDiv2);
  
    var taskCarddueDate = document.createElement("p2");
    taskCarddueDate.id = `${taskId}`;
    taskCarddueDate.className = "taskCarddueDate";
    const cardDuedate = document.createTextNode(`${taskList.Duedate}`);
    taskCarddueDate.appendChild(cardDuedate);
    taskCardformDiv2.insertAdjacentElement("beforeend", taskCarddueDate);
  
    taskCardbuttonDiv = document.createElement("div");
    taskCardbuttonDiv.id = `${taskId}`;
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardbuttonDiv);
  
    var taskCarddeleteButton = document.createElement("button");
    taskCarddeleteButton.id =  `${taskId}`;
    taskCarddeleteButton.onclick = function handleDeleteTask(event){

      dragElementId = (event.target.id),
      console.log(dragElementId),
      deleteCard = document.getElementById(dragElementId),
      deleteCard.remove(),
      localStorage.removeItem(dragElementId),
      Index--,
      console.log("deletion complete"),
      console.log(Index)
    // delete task. used the uuid to target the specific task
    };
    taskCarddeleteButton.className = "btn btn-primary taskCarddeleteButton";
    taskCarddeleteButton.type  = "button";
    taskCarddeleteButton.innerHTML = "X";
    taskCardbuttonDiv.insertAdjacentElement("beforeend", taskCarddeleteButton);
    console.log("TaskAdded");
    sortFunction();
}

function sortFunction() {
// Todo: create a function to handle dropping a task into a new status lane

var el = document.getElementById('to-do-cards');
var el2 = document.getElementById('in-progress-cards');
var el3 = document.getElementById('done-cards');

  Sortable.create(el, {
    group: 'shared',
    selectedClass: "sortable-selected", // Class name for selected item
    fallbackTolerance: 3, // So that we can select items on mobile
    animation: 150,
    ghostClass: "columnOne",
    store: {
      /**
       * Get the order of elements. Called once during initialization.
       * @param   {Sortable}  sortable
       * @returns {Array}
       */
      get: function (sortable) {
        var order = JSON.parse(localStorage.getItem(sortable.options.group.name));
        return order ? order.split('|') : [];
      },
  
      /**
       * Save the order of elements. Called onEnd (when the item is dropped).
       * @param {Sortable}  sortable
       */
      set: function (sortable) {
        var order = sortable.toArray();
        localStorage.setItem(sortable.options.group.name, JSON.stringify(order.join('|')));
      }
    },
    
    onUpdate: function (evt) {
      dragElementId = evt.item.id,
      console.log(dragElementId),
      UpdatedTaskCardString= JSON.parse(localStorage.getItem(dragElementId)),
      console.log(UpdatedTaskCardString),
      UpdatedTaskCardString.Columns = "columnOne",
   console.log(UpdatedTaskCardString),
   localStorage.setItem(dragElementId,  JSON.stringify(UpdatedTaskCardString)) 
},

onAdd: function (evt) {
  dragElementId = evt.item.id,
  console.log(dragElementId),
  UpdatedTaskCardString= JSON.parse(localStorage.getItem(dragElementId)),
  console.log(UpdatedTaskCardString),
  UpdatedTaskCardString.Columns = "columnOne",
console.log(UpdatedTaskCardString),
localStorage.setItem(dragElementId,  JSON.stringify(UpdatedTaskCardString)) 
}

})



      Sortable.create(el2, {
        group: 'shared',
        selectedClass: "sortable-selected", // Class name for selected item
        fallbackTolerance: 3, // So that we can select items on mobile
        animation: 150,
          ghostClass: "columnTwo",
          store: {
            /**
             * Get the order of elements. Called once during initialization.
             * @param   {Sortable}  sortable
             * @returns {Array}
             */
            get: function (sortable) {
              var order = JSON.parse(localStorage.getItem(sortable.options.group.name));
              return order ? order.split('|') : [];
            },
        
            /**
             * Save the order of elements. Called onEnd (when the item is dropped).
             * @param {Sortable}  sortable
             */
            set: function (sortable) {
              var order = sortable.toArray();
              localStorage.setItem(sortable.options.group.name, JSON.stringify(order.join('|')));
            }
          },
          
          onUpdate: function (evt) {
            dragElementId = evt.item.id,
            console.log(dragElementId),
            UpdatedTaskCardString= JSON.parse(localStorage.getItem(dragElementId)),
            console.log(UpdatedTaskCardString),
            UpdatedTaskCardString.Columns = "columnTwo",
         console.log(UpdatedTaskCardString),
         localStorage.setItem(dragElementId,  JSON.stringify(UpdatedTaskCardString)) 
},

onAdd: function (evt) {
  dragElementId = evt.item.id,
  console.log(dragElementId),
  UpdatedTaskCardString= JSON.parse(localStorage.getItem(dragElementId)),
  console.log(UpdatedTaskCardString),
  UpdatedTaskCardString.Columns = "columnTwo",
console.log(UpdatedTaskCardString),
localStorage.setItem(dragElementId,  JSON.stringify(UpdatedTaskCardString)) 
},

})


          

          Sortable.create(el3, {
            group: 'shared',
            selectedClass: "sortable-selected", // Class name for selected item
            fallbackTolerance: 3, // So that we can select items on mobile
            animation: 150,
            ghostClass: "columnThree",
            store: {
              /**
               * Get the order of elements. Called once during initialization.
               * @param   {Sortable}  sortable
               * @returns {Array}
               */
              get: function (sortable) {
                var order = JSON.parse(localStorage.getItem(sortable.options.group.name));
                return order ? order.split('|') : [];
              },
          
              /**
               * Save the order of elements. Called onEnd (when the item is dropped).
               * @param {Sortable}  sortable
               */
              set: function (sortable) {
                var order = sortable.toArray();
                localStorage.setItem(sortable.options.group.name, JSON.stringify(order.join('|')));
              }
            },

            onUpdate: function (evt) {
              dragElementId = evt.item.id,
              console.log(dragElementId),
              UpdatedTaskCardString= JSON.parse(localStorage.getItem(dragElementId)),
              console.log(UpdatedTaskCardString),
              UpdatedTaskCardString.Columns = "columnThree",
           console.log(UpdatedTaskCardString),
           localStorage.setItem(dragElementId,  JSON.stringify(UpdatedTaskCardString)) 
},

onAdd: function (evt) {
  dragElementId = evt.item.id,
  console.log(dragElementId),
  UpdatedTaskCardString= JSON.parse(localStorage.getItem(dragElementId)),
  console.log(UpdatedTaskCardString),
  UpdatedTaskCardString.Columns = "columnThree",
console.log(UpdatedTaskCardString),
localStorage.setItem(dragElementId,  JSON.stringify(UpdatedTaskCardString)) 
},

})


      
    console.log("Sortted")
    };

    
    function renderTaskList() {
console.log(Index);

      keys = localStorage.key(Index);
      console.log(Index);
      console.log(keys);
       if (keys !== undefined && keys!== null) {key = JSON.parse(localStorage.getItem(keys));}

      if (key.Title && key !== undefined) {
  
  // assign value of taskid id as Javascript id for each element created to can be trageted to delete element
  // use insertBefore on id=todo-cards
  let toDocard = document.getElementById("to-do-cards");
  var el2 = document.getElementById('in-progress-cards');
var el3 = document.getElementById('done-cards');
  
  
  const dateColor = function(){
  
    // Date object
  const date = new Date();
  
  let currentDay= String(date.getDate()).padStart(2, '0');
  
  let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  
  let currentYear = date.getFullYear();
  
  // we will display the date as DD-MM-YYYY 
  
  let date1 = new Date(`${currentMonth}/${currentDay}/${currentYear}`);
  
  let date2 = new Date(key.Duedate);
  
    
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

    var taskCardparentDiv = document.createElement("div");
    taskCardparentDiv.id = key.TaskId;
    taskCardparentDiv.draggable = "true";
    taskCardparentDiv.setAttribute("data-bs-backdrop", "static");
    taskCardparentDiv.className = "card taskCardparentDiv";
    taskCardparentDiv.style = "width: 18rem;";
    taskCardparentDiv.style.backgroundColor = dateColor();

    if (key.Index) {taskCardparentDiv.selectedIndex = key.Index};
    if (key.Columns && key.Columns.includes('columnOne')) {toDocard.insertAdjacentElement("beforeend", taskCardparentDiv);
    } else if (key.Columns && key.Columns.includes('columnTwo')) { el2.insertAdjacentElement("beforeend", taskCardparentDiv);
    } else if (key.Columns && key.Columns.includes('columnThree')) { el3.insertAdjacentElement("beforeend", taskCardparentDiv);
    } else {toDocard.insertAdjacentElement("beforeend", taskCardparentDiv);
    }; 
  
    taskCarddialogDiv = document.createElement("div");
    taskCarddialogDiv.id = key.TaskId;
    taskCarddialogDiv.className = "card-dialog";
    taskCardparentDiv.insertAdjacentElement("beforeend", taskCarddialogDiv);
  
    taskCardcontentDiv = document.createElement("div");
    taskCardcontentDiv.id =  key.TaskId;
    taskCardcontentDiv.className = "card-content";
    taskCarddialogDiv.insertAdjacentElement("beforeend", taskCardcontentDiv);
  
  
    taskCardheaderDiv = document.createElement("div");
    taskCardheaderDiv.id =  key.TaskId;
    taskCardheaderDiv.className = "card-header";
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardheaderDiv);
  
    var taskCardtitle = document.createElement("h6");
    taskCardtitle.id =  key.TaskId;
    taskCardtitle.className = "card-title taskCard";
    const cardTitle = document.createTextNode(key.Title);
    taskCardtitle.appendChild(cardTitle);
    taskCardheaderDiv.insertAdjacentElement("beforeend", taskCardtitle);
  
    taskCardbodyDiv = document.createElement("div");
    taskCardbodyDiv.id =  key.TaskId;
    taskCardbodyDiv.className = "card-body";
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardbodyDiv);
  
    taskCardbodyForm = document.createElement("form");
    taskCardbodyForm.id =  key.TaskId;
    taskCardbodyDiv.insertAdjacentElement("beforeend", taskCardbodyForm);
  
    taskCardformDiv1 = document.createElement("div");
    taskCardformDiv1.id =  key.TaskId;
    taskCardbodyForm.insertAdjacentElement("beforeend", taskCardformDiv1);
  
    var taskCardDescription = document.createElement("label");
    taskCardDescription.id =  key.TaskId;
    taskCardDescription.className = "card-title taskCardDescription";
    const cardDescription = document.createTextNode(key.Description);
    taskCardDescription.appendChild(cardDescription);
    taskCardformDiv1.insertAdjacentElement("beforeend", taskCardDescription);
  
    taskCardformDiv2 = document.createElement("div");
    taskCardformDiv2.id =  key.TaskId;
    taskCardbodyForm.insertAdjacentElement("beforeend", taskCardformDiv2);
  
    var taskCarddueDate = document.createElement("p2");
    taskCarddueDate.id =  key.TaskId;
    taskCarddueDate.className = "taskCarddueDate";
    const cardDuedate = document.createTextNode(key.Duedate);
    taskCarddueDate.appendChild(cardDuedate);
    taskCardformDiv2.insertAdjacentElement("beforeend", taskCarddueDate);
  
    taskCardbuttonDiv = document.createElement("div");
    taskCardbuttonDiv.id =  key.TaskId;
    taskCardcontentDiv.insertAdjacentElement("beforeend", taskCardbuttonDiv);
  
    var taskCarddeleteButton = document.createElement("button");
    taskCarddeleteButton.id =  key.TaskId;
    taskCarddeleteButton.onclick = function handleDeleteTask(event){

      dragElementId = (event.target.id),
      console.log(dragElementId),
      deleteCard = document.getElementById(dragElementId),
      deleteCard.remove(),
      localStorage.removeItem(dragElementId),
      Index--,
      console.log("deletion complete"),
      console.log(Index)
    // delete task. used the uuid to target the specific task
    };
    taskCarddeleteButton.className = "btn btn-primary taskCarddeleteButton";
    taskCarddeleteButton.type  = "button";
    taskCarddeleteButton.innerHTML = "X";
    taskCardbuttonDiv.insertAdjacentElement("beforeend", taskCarddeleteButton);
  
  }
  sortFunction();
console.log(Index);
  };

  
// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$( document ).ready(function () {
  $(function() {
    $( "#datepicker-1" ).datepicker();
})


for (let i= 0; i< localStorage.length; i++) {
  renderTaskList(localStorage.key(Index));
  sortFunction();
console.log(Index)
Index++;
}});


// Todo: create a function to handle deleting a task
