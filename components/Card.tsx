import { useState } from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
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
      <View style={[Styles(color).status]}></View>
      <View>
        <Text>Task: {props.name}</Text>
        <Text>Untill: {props.date ? props.date : "No time set"}</Text>
        <View>
          <CheckBox
            checked={reading}
            onPress={click}
            title={"Done?"}
            iconRight
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
