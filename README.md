## Spec Tests

### Description: ToDoList {}

*Test:* "It should create a constructor for a To Do List, with an object to hold specific tasks, and an id counter."
*Code:* function ToDoList() {
  this.tasks = tasks;
  this.taskId = 0;
}
ToDoList;
*Expected output:* ToDoList() {
  this.task = task;
  this.taskId = 0;
}

### Description: ToDoList.prototype.addId {}

*Test:* "This method will add a unique id to all of our task objects"
*Code:* function ToDoList.prototype.addId(task) {
  this.taskId +=1;
  return this.taskId;
}
*Expected output:* 1 : task

### Description: ToDoList.prototype.addTask {}

*Test:* "This method will add Task objects to our To Do List object"
*Code:* function ToDoList.prototype.addTask(task) {
  task.id = this.addId();
  this.tasks[task.id] = task;
}

*Expected output:* 

### Description: Task {}

*Test:* "It should create a constructor object for a task, with a series of keys and values."
*Code:* function Task (name, date, time, location) {
  this.name = name;
  this.date = date
  this.time = time;
  this.location = location;
}
Task;
*Expected output:* Task (name, date, time, location) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.location = location;
}


<!-- new Date(1990, 12, 1) will return January 1st, 1991 -->