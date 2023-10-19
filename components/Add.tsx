import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { Button } from "react-native-elements";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import axios from "axios";
import { Styles } from "./Styles";

const Add = (props: IAddTask) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const onChange = (_event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
    setText(
      currentDate.getDate() +
        "/" +
        (currentDate.getMonth() + 1) +
        "/" +
        currentDate.getFullYear()
    );
  };

  const onPress = () => {
    setShow(true);
  };

  const onAddTask = () => {
    axios
      .post("http://eladstorj.asuscomm.com:8000/addtask", { name: name, deadline: text })
      .then((req) => {
        props.setTasks(req.data.tasks);
      });
  };

  return (
    <View>
      <TextInput placeholder={"Task name"} onChangeText={setName} />
      <View style={Styles().addTask}>
        <Button title="Deadline date" onPress={onPress} />
        <Text> {text}</Text>
        {show && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <Button title="Add task" onPress={onAddTask} />
    </View>
  );
};

export default Add;
