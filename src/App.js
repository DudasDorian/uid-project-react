import logo from './logo.svg';
import './App.css';
import useStorage from "./hooks/useStorage";
import LoginPage from "./components/LoginPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Button} from "@mui/material";

function App() {
  const { username, saveLogin } = useStorage()

  if(!username) {
    return <LoginPage setLogin={saveLogin} />
  }

  return (
    <BrowserRouter>
      <Button onClick={() => {
        window.location.replace('http://localhost:3000/');
        sessionStorage.clear();
      }}>Back to login page</Button>

      <Switch>
        <Route path={'/nearby-'}>
          <div />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
