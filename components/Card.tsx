import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements"; 
import { Styles } from "./Styles";

const Card = (props: ICard) => {
  const [reading, isReading] = useState(false);
  const [color, setColor] = useState("black");

  const click = () => {
    isReading(!reading);
    setColor(reading ? "black" : "red");
  };

  return (
    <View style={[Styles().card, Styles().row]}>
      <View style={Styles(color).status} />
      <View>
        <Text>Task: {props.name}</Text>
        <Text>Untill: {props.date ? props.date : "No time set"}</Text>
        <View style={[Styles().row, Styles().center]}>
          <CheckBox
            checked={reading}
            onPress={click}
            title={"Done?"}
            iconRight
          />
          <TouchableOpacity onPress={() => props.deleteTask(props.id)}>
            <Text>delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
