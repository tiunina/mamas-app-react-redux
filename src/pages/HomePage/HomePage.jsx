import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../../components/TaskForm/TaskForm";
import { selectError, selectLoading } from "../../redux/tasks/tasksSlice";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/tasksOps";
import TaskList from "../../components/TaskList/TaskList";

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      HomePage
      <TaskForm />
      {loading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
};

export default HomePage;
