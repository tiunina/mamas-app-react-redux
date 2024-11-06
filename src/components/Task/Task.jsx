import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changeTask, deleteTask } from "../../redux/tasksOps";

const Task = ({ taskItem }) => {
  const dispatch = useDispatch();
  const handleChange = () => dispatch(changeTask(taskItem));
  const handleDelete = () => {
    dispatch(deleteTask(taskItem.id));
    console.log(taskItem.id);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={taskItem.completed}
        onChange={handleChange}
      />
      <p>{taskItem.tasks}</p>
      <button onClick={handleDelete}>
        <RiDeleteBin2Fill size={24} />
      </button>
    </div>
  );
};

export default Task;
