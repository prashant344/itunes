import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
