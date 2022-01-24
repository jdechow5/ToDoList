function ToDoList {
  this.tasks = {};
  this.taskId = 0;
}

function Task (name, date, time, location) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.location = location;
}

