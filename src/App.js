import React from 'react';
import { Suspense, lazy } from 'react';
import { HashRouter, Route } from 'react-router-dom';

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
const HardDrive = lazy(() => import('./projects/HardDrive/pages/Main/Main'));

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
          <Route path="/hard-drive" component={HardDrive} />
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default app;
