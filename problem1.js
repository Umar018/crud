const toDoList = {
  map: new Map(),

  addTask: function (task) {
    const id = this.map.size + 1;

    this.map.set(id, task.title);
  },

  removeTask: function (id) {
    this.map.delete(id);
  },

  printTasks: function () {
    console.log(toDoList.map);
  },
};

let task = {
  title: "Uy ishlari",
};

toDoList.addTask(task);
toDoList.addTask(task);
toDoList.printTasks();
toDoList.removeTask(1);
toDoList.printTasks();
