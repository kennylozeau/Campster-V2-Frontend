import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DiscoverIndex from './discover_index';
import DiscoverMap from './discover_map';
import { updateBounds } from '../../actions/filter_actions';

/**
 * The Discover component fetchs campsites data and renders a
 * DiscoverIndex component alongside a DiscoverMap component with location functionality.
 * @returns The Discover component 
 * 
 */
const Discover = ({location}) => {
  const dispatch = useDispatch();
  const campsites = useSelector(state => Object.values(state.entities.campsites));

  useEffect(() => {
    // this is a temp useEffect, just to make sure we check it when we have data
    console.warn('NO-DATA CHECKED - Discover was converted to hooks without data to check it!')
  }, []);

  const updateBoundsToPass = (bounds) => {
    dispatch(updateBounds(bounds))
  };

  return (
    <div className="discover-container">
      <DiscoverIndex campsites={campsites} />
      <div className="discover-map-container">
        <DiscoverMap
          campsites={campsites}
          location={location}
          updateBounds={updateBoundsToPass} /> 
          {/* I left it as it was just in case, but updateBounds is being prop drilled a bit */}
      </div>
    </div>
  )
};

export default Discover;