import { useState, useEffect } from "react";
import { View } from "react-native";
import { Route, Routes, NativeRouter } from "react-router-native";
import Add from "./Add";
import List from "./List";
import Main from "./Main";
import { Styles } from "./Styles";
import axios from "axios";

const Router = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    axios
      .get("/getalltasks")
      .then((req) => setTasks(req.data.tasks));
  }, []);

  return (
    <View style={Styles().androidSafeArea}>
      <NativeRouter>
        <List />
        <Routes>
          <Route
            path="/"
            element={<Main tasks={tasks} setTasks={setTasks} />}
          />
          <Route path="/add" element={<Add setTasks={setTasks} />} />
        </Routes>
      </NativeRouter>
    </View>
  );
};

export default Router;
