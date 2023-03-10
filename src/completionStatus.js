import { storage } from "./newFunctionalities";

export default function checkDelete(checkEntry, tasksData) {
  tasksData.forEach((toDoElements) => {
    if (toDoElements.index === checkEntry.index && checkEntry.completed === true) {
      toDoElements.completed = false;
      storage(tasksData);
    } else if (toDoElements.index === checkEntry.index && checkEntry.completed === false) {
      toDoElements.completed = true;
      storage(tasksData);
    }
  });
  window.location.reload();
}