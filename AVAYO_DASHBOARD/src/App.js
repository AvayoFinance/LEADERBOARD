import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Provider } from "react-redux";

import { useAuthContext } from "./components/account/AuthProvider";
function App() {
    return (
        
            <div className="App">
                <ReactNotifications />
                <Main />
            </div>
      
    );
}

export default App;
