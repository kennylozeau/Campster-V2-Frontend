import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CampsiteIndexItem from './campsite_index_item';
import { fetchCampsites } from '../../util/campsite_api_util';

/**
 * The `CampsiteIndex` component renders a list of campsite items based on the campsites stored in the
 * Redux state.
 * @returns The CampsiteIndex component is returning a list of CampsiteIndexItem components, each
 * representing a campsite from the campsites state in the Redux store. 
 * 
 */
const CampsiteIndex = () => {
  const campsites = useSelector(state => state.entities.campsites);
  const dispatch = useDispatch()

  useEffect(() => {
    console.warn('NO-DATA CHECK!\nCampsiteIndex was converted to hook without data to check it!\nThus you should double check it when we have data!')
    const dispatchFetch = async () => {
      dispatch(await fetchCampsites())
    }

    dispatchFetch();
  }, [])

  // creates the array list for index
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