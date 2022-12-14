import MainApp from "./MainApp";
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux";
import { store } from "./store/index"


function App() {
  return (
    <Router>
      <Provider store={store}>
        <MainApp/>
      </Provider>
    </Router>
  );
}

export default App;
