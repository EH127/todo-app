import { ScrollView, View } from "react-native";
import Card from "./Card";

const Main = (props: ITasks) => {
  return (
    <ScrollView>
      {props.tasks.map((task, key) => {
        return (
          <Card
            name={task.name}
            date={task.date}
            id={task.id}
            deleteTask={props.deleteTask}
            key={key}
          />
        );
      })}
    </ScrollView>
  );
};

export default Main;
