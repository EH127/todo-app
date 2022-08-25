import { ScrollView, View } from "react-native";
import Card from "./Card";

const Main = (props:ITask) => {
  return (
    <ScrollView>
      {props.tasks.map((task, key) => {
        return <Card name={task.name} date={task.date} key={key} />;
      })}
    </ScrollView>
  );
};

export default Main;
