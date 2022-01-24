// TO DO LIST OBJECT/METHODS

function ToDoList() {
  this.tasks = {};
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

//  TASK OBJECT/METHODS

function Task (name, date, time, location) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.location = location;
}

let myList = new ToDoList;
let dishes = new Task("dishes", "January 24", "6pm", "kitchen");
let laundry = new Task("laundry", "January 25", "8pm", "laundry room");
let groceries = new Task("groceries", "January 27", "4pm", "Fred Meyer");


