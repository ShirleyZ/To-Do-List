// Javascript file for the To Do List website

// Initialise variable to keep count of how many
//  total to do lists there are. This also serves to
//  give each list an ID
var listCnt = 0;
var listArray = new Array();

// Declaring the classes
var List = function(name) {
  this.name = name;
  this.count = 0;
  this.id = listCnt;
  listCnt++;
  this.tasks = new Array();
}

var Task = function(task, due) {
  this.task = task;
  this.due = due;
  this.status = false;
}

// Functions
// * Page interaction
var hide = function() {
  var tmp = this.parentNode.parentNode;
  tmp.style.height = "28px";
  console.log("hidden");
}

var show = function() {
  var tmp = this.parentNode.parentNode;
  tmp.style.height = "auto";
  console.log("shown");
}

var addNewList = function() {
  console.log("***New List***");
  var name = document.getElementById("newListName").value;
  if (name == '') {
    errorMsg('You cannot leave the name blank');
  } else {
    newList(name);
  
    // Clearing the input field
    document.getElementById("newListName").value = "";
    
    // Appending list to site
    var listSpace = document.getElementById("listSpace");
    
    // * Creating ul to hold new list
    var ul = document.createElement('ul');
    ul.className = "list";
    ul.id = listCnt-1;
    
    // * Creating li entry for task name
    var liName = document.createElement('li');
    var listName = document.createTextNode(name + " ");
    var bShow = document.createElement('button');
    var btShow = document.createTextNode("Show");
    bShow.appendChild(btShow);
    bShow.onclick = show;
    var bHide = document.createElement('button');
    var btHide = document.createTextNode("Hide");
    bHide.appendChild(btHide);
    bHide.onclick = hide;
    
    liName.appendChild(listName);
    liName.appendChild(bShow);
    liName.appendChild(bHide);
    liName.className = "title";
    
    ul.appendChild(liName);
    listSpace.appendChild(ul);
    
    // * Creating li entry for 'add new task' field
    var liAdd = document.createElement('li');
    liAdd.className = "title";
    var inAdd = document.createElement('input');
    inAdd.className = "newTask";
    inAdd.type = "text";
    var bAdd = document.createElement('button');
    bAdd.onclick = addNewTask;
    var btAdd = document.createTextNode("Add");
    
    bAdd.appendChild(btAdd);
    liAdd.appendChild(inAdd);
    liAdd.appendChild(bAdd);
    ul.appendChild(liAdd);
  }
}

var addNewTask = function() {
  var tmp = this.parentNode.getElementsByClassName('newTask')[0];
  if (tmp.value.length == 0) {
    errorMsg('You cannot add a blank task');
  } else {
    var task = tmp.value;
    console.log(task);
    var thisList = this.parentNode.parentNode;
    console.log(thisList);
    
    var li = document.createElement('li');
    var liT = document.createTextNode(task);
    var liC = document.createElement('input');
    liC.type = 'checkbox';
    
    li.appendChild(liC);
    li.appendChild(liT);
    thisList.appendChild(li);
    tmp.value = '';
  }
}

// * Change Lists
var newList = function(name) {
  listArray[listCnt] = new List(name);
}

var newTask = function(name, due, listID) {
  var tmpList = listArray[listID];
  tmpList.tasks[tmpList.count] = new Task(name, due);
  tmpList.count++;
}

var checkTask = function(listID, taskID) {
  listArray[listID].tasks[taskID].status = true;
}

var uncheckTask = function(listID, taskID) {
  listArray[listID].tasks[taskID].status = false;
}

// * Helper/View Lists
var errorMsg = function(msg) {
  var msgBox = document.getElementById('errorMsg');
  msgBox.innerHTML = msg;
}
var error = function(msg) {
  console.log("Error: " + msg);
}

var printList = function(id) {
  console.log("***Printing Lists...");
  if (listArray[id] != null) {
    var currList = listArray[id];
    console.log("List: " + currList.name);
    for (var key in currList.tasks) {
      var taskName = currList.tasks[key].task; 
      var taskStat;
      if (currList.tasks[key].status == true) {
        taskStat = "[x] ";
      } else {
        taskStat = "[ ] ";
      }
      console.log(taskStat + taskName);
    }
  } else {
    error("No such list");
  }
  console.log("***Finished Printing");
}

var printStats = function() {
  console.log("# of lists: " + listCnt);
  var tmp = document.getElementById('newListName');
  console.log(tmp);
  console.log(tmp.value);
}

// Settings functions
var setListsPerLine = function() {
  var numLists = document.getElementById('listPerLine').value;
  console.log("Setting to " + numLists + " lists per line");
  var listSpace = document.getElementById('listSpace');
  
  if (numLists == '') {
    listSpace.style.width = 'auto';
  } else {
    listSpace.style.width = 455 * numLists;
  }
}
