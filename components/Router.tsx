import { useState } from "react";
import { View } from "react-native";
import { Route, Routes, NativeRouter } from "react-router-native";
import Add from "./Add";
import List from "./List";
import Main from "./Main";
import { Styles } from "./Styles";

const Router = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    const updateTasks = tasks.filter((task, _index) => task.id !== id);
    setTasks(updateTasks);
  };
  return (
    <View style={Styles().androidSafeArea}>
      <NativeRouter>
        <List />
        <Routes>
          <Route path="/" element={<Main tasks={tasks} deleteTask={deleteTask}/>} />
          <Route path="/add" element={<Add setTasks={setTasks} />} />
        </Routes>
      </NativeRouter>
    </View>
  );
};

export default Router;
