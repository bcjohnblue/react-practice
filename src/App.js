import React from 'react';
import { Suspense, lazy } from 'react';
import { HashRouter, Route } from 'react-router-dom';

// import TomatoClock from './projects/TomatoClock/pages/Main/Main';
// import Solitaire from './projects/Solitaire/pages/Main/Main';
// import OnlinePay from './projects/OnlinePay/pages/Main/Main';
// import Game from './projects/Game/pages/Main/Main';
// import Hotel from './projects/Hotel/pages/Main/Main';
// import HotelRoomDetail from './projects/Hotel/pages/RoomDetail/RoomDetail';
// import HotelReservation from './projects/Hotel/pages/Reservation/Reservation';
// import Chatroom from './projects/Chatroom/pages/Main/Main';

const TomatoClock = lazy(() =>
  import('./projects/TomatoClock/pages/Main/Main')
);
const Solitaire = lazy(() => import('./projects/Solitaire/pages/Main/Main'));
const OnlinePay = lazy(() => import('./projects/OnlinePay/pages/Main/Main'));
const Game = lazy(() => import('./projects/Game/pages/Main/Main'));
const Hotel = lazy(() => import('./projects/Hotel/pages/Main/Main'));
const HotelRoomDetail = lazy(() =>
  import('./projects/Hotel/pages/RoomDetail/RoomDetail')
);
const HotelReservation = lazy(() =>
  import('./projects/Hotel/pages/Reservation/Reservation')
);
const Chatroom = lazy(() => import('./projects/Chatroom/pages/Main/Main'));

const app = props => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Suspense fallback={<div></div>}>
          {/* <Route path="/test" render={() => comp} /> */}
          <Route path="/tomato-clock" component={TomatoClock} />
          <Route path="/solitaire" component={Solitaire} />
          <Route path="/online-pay" component={OnlinePay} />
          <Route path="/game" component={Game} />
          <Route exact path="/hotel" component={Hotel} />
          <Route
            exact
            path="/hotel/room-detail/:id"
            component={HotelRoomDetail}
          />
          <Route exact path="/hotel/reservation" component={HotelReservation} />
          <Route exact path="/chatroom" component={Chatroom} />
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default app;
