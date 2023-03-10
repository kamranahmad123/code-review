export default function checkDelete(checkEntry, tasksData) {
  tasksData.forEach((toDoElement) => {
    if (toDoElement.index === checkEntry.index && checkEntry.completed === true) {
      toDoElement.completed = false;
      localStorage.setItem('task', JSON.stringify(tasksData));
    } else if (toDoElement.index === checkEntry.index && checkEntry.completed === false) {
      toDoElement.completed = true;
      localStorage.setItem('task', JSON.stringify(tasksData));
    }
  });
  window.location.reload();
}