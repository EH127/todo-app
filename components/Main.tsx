import { ScrollView } from "react-native";
import Card from "./Card";
import axios from "axios";

const Main = (props: ITasks) => {
  const { setTasks, tasks } = props;
  const deleteTask = (id: string) => {
    axios.delete(`/deletetask/${id}`).then((req) => {
      setTasks(req.data.tasks);
    });
  };

  const changeTask = (id: string) => {
    axios.put(`/completetask/${id}`).then((req) => {
      const updatedTasks = tasks.map((task) => {
        if (task._id === id) {
          return req.data;
        }
        return task;
      });
      setTasks([...updatedTasks]);
    });
  };
  return (
    <ScrollView>
      {props.tasks.map((task, key) => {
        return (
          <Card
            task={task}
            deleteTask={deleteTask}
            changeTask={changeTask}
            key={key}
          />
        );
      })}
    </ScrollView>
  );
};

export default Main;
