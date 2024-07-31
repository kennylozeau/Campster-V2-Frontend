import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link, Route } from 'react-router-dom';

import CampsiteIndex from './campsite_index/campsite_index';
import CampsiteMap from './campsite_show/campsite_map';
import CampsiteShowContainer from './campsite_show/campsite_show_container';
import DiscoverContainer from './discover/discover_container';
import Footer from './footer/footer';
import LoginFormContainer from './auth/login_form_container';
import Modal from './modal';
import NavBarContainer from './navbar/navbar_container';
import React from 'react';
import SearchBarContainer from './search/search_bar_container';
import UserProfileContainer from './user_profile/user_profile_container';

const App = (props) => {
  return(
    <>
      <Modal />
      <div className="navbar-container"><NavBarContainer /></div>

      {/* <Route path="/login" component={LoginFormContainer} /> */}
      {/* <Route path="/discover" component={CampsiteIndexContainer} /> */}
      <Route exact path="/" component={SearchBarContainer} />
      <Route exact path="/" component={CampsiteIndex} />
      <Route exact path="/campsites/:campsiteId" component={CampsiteShowContainer} />
      <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
      <Route path="/discover/" component={DiscoverContainer} />
      {/* <CampsiteMap /> */}
      <div className="footer-container"><Footer /></div>
    </>
  );
};

export default App;