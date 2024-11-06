import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/tasksSlice";
import css from "./TaskList.module.css";
import Task from "../Task/Task";
const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <ul className={css.list}>
      {Array.isArray(tasks) &&
        tasks.map((taskItem) => (
          <li className={css.listItem} key={taskItem.id}>
            <Task taskItem={taskItem} />
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
