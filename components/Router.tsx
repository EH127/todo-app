import { useState } from "react";
import { View, Text } from "react-native";
import { Route, Routes, NativeRouter } from "react-router-native";
import Add from "./Add";
import List from "./List";
import Main from "./Main";
import { Styles } from "./Styles";

const Router = () => {
  const [tasks, setTasks] = useState<ITask["tasks"]>([]);
  return (
    <View style={Styles().androidSafeArea}>
      <NativeRouter>
        <List />
        <Routes>
          <Route path="/" element={<Main tasks={tasks} />} />
          <Route path="/add" element={<Add setTasks={setTasks}/>} />
        </Routes>
      </NativeRouter>
    </View>
  );
};

export default Router;
