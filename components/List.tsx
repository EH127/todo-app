import { View, Text } from "react-native";
import { Styles } from "./Styles";
import { useNavigate } from "react-router-native";

const List = () => {
  const navigate = useNavigate();
  return (
    <View style={Styles().center}>
      <Text style={Styles().title}>TODO APP</Text>
      <View style={Styles().row}>
        <Text onPress={() => navigate("/")} style={Styles().text}>
          Home
        </Text>
        <Text onPress={() => navigate("/add")} style={Styles().text}>
          Add
        </Text>
      </View>
    </View>
  );
};

export default List;
