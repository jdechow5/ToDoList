// TO DO LIST OBJECT/METHODS

function ToDoList() {
  this.tasks = {};
  this.completedTasks = {};
  this.taskId = 0;
}

ToDoList.prototype.addId = function() {
  this.taskId +=1;
  return this.taskId;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.addId();
  this.tasks[task.id] = task;
}

ToDoList.prototype.markDone = function(task) {
  // if (this.tasks[task.completed] === false) {
  task.completed = true;
  this.completedTasks[task.id] = task;
  delete this.tasks[task.id];
  
  // }
}

ToDoList.prototype.notDone = function(task) {
  task.completed = false;
  this.tasks[task.id] = task;
  delete this.completedTasks[task.id];
}

// psuedo-code task.completed(true);

//  TASK OBJECT/METHODS

function Task (name, date, time, location, completed) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.location = location;
  this.completed = completed;
}

let myList = new ToDoList;
let dishes = new Task("dishes", "January 24", "6pm", "kitchen", false);
let laundry = new Task("laundry", "January 25", "8pm", "laundry room", false);
let groceries = new Task("groceries", "January 27", "4pm", "Fred Meyer", false);

myList.addTask(dishes);
myList.addTask(laundry);
myList.addTask(groceries);