import { Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Styles } from "./Styles";

const Card = (props: ICard) => {

  const {deleteTask, task, changeTask} = props;
  const {iscompleted,deadline,_id,name } = task

  const click = () => {
    changeTask(_id);
  };

  return (
    <View style={[Styles().card, Styles().row]}>
      <View style={Styles(iscompleted ? "red" : "black").status} />
      <View>
        <Text>Task: {name}</Text>
        <Text>Untill: {deadline ? deadline : "No time set"}</Text>
        <View style={Styles().row}>
          <CheckBox
            checked={iscompleted}
            onPress={click}
            title={"Done?"}
            iconRight
          />
          <TouchableOpacity onPress={() => deleteTask(_id)} style={Styles().center}>
            <Text>delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
