import axios from "axios";
import Router from "./components/Router";

export default function App() {
  axios.defaults.baseURL = "http://eladstorj.asuscomm.com:8000";
  return <Router />;
}
