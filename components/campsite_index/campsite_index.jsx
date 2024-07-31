import CampsiteIndexItem from './campsite_index_item';
import React from 'react';
import { useSelector } from 'react-redux';

/**
 * The `CampsiteIndex` component renders a list of campsite items based on the campsites stored in the
 * Redux state.
 * @returns The CampsiteIndex component is returning a list of CampsiteIndexItem components, each
 * representing a campsite from the campsites state in the Redux store. 
 * 
 */
const CampsiteIndex = () => {
  const campsites = useSelector(state => state.entities.campsites);

  const campsiteList = Object.values(campsites).map(campsite => {
    return <CampsiteIndexItem key={campsite.id} campsite={campsite} />
  });

  return (
    <div className="campsite-list">
      {campsiteList}
    </div>
  )
}

export default CampsiteIndex;