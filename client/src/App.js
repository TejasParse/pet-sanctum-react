import MainApp from "./MainApp";
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux";
import { store } from "./store/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <MainApp/>
        <ToastContainer />
      </Provider>
    </Router>
  );
}

export default App;
