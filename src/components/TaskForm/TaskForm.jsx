import { useDispatch } from "react-redux";
import css from "./TaskForm.module.css";
import { addTask } from "../../redux/tasksOps";
// import { nanoid } from "nanoid";

const TaskForm = () => {
  const dispatch = useDispatch();

  const onAddTask = (taskName) => {
    const newTask = {
      tasks: taskName,
      //   id: nanoid(),
    };
    const action = addTask(newTask);
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskName = event.currentTarget.taskName.value;
    if (taskName) {
      onAddTask(taskName);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.taskForm}>
      <input
        type="text"
        placeholder="Enter a new task"
        name="taskName"
        className={css.taskInput}
      />
      <button type="submit" className={css.addTaskBtn}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
