import logo from './logo.svg';
import './App.css';
import useStorage from "./hooks/useStorage";
import LoginPage from "./components/LoginPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Button} from "@mui/material";
import ReviewUsers from "./components/ReviewUsers";
import HotelDetails from "./components/HotelDetails";
import PastReservations from "./components/PastReservations";
import UserDetails from "./components/UserDetails";
import FutureReservations from "./components/FutureReservations";
import RoomsList from "./components/RoomsList";
import RoomEdit from "./components/RoomEdit";
import HotelList from "./components/HotelList";
import HotelReservation from "./components/HotelReservation";
import ReviewHotel from "./components/ReviewHotel";

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
          <Route path={'/review-users'}>
              <ReviewUsers />
          </Route>
          <Route path={'/hotel-details'}>
              <HotelDetails hotel={{name: 'Grand Hotel', address: '123 Main St'}} />
          </Route>
          <Route path="/past-reservations" component={PastReservations} />
          <Route path="/future-reservations" component={FutureReservations} />
          <Route path="/rooms" component={RoomsList} />
          <Route path="/reserve-hotel" component={HotelReservation} />
          <Route path="/review-hotel" component={ReviewHotel} />
          <Route path="/hotels" component={HotelList} />
          <Route path="/user-details/:userId" >
              <UserDetails userId={1}/>
          </Route>
          <Route path="/edit-room/:roomId" >
              <RoomEdit roomId={1}/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
