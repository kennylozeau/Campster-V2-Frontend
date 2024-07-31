import React, { useEffect } from 'react';

import CampsiteIndexItem from '../campsite_index/campsite_index_item';

/**
 * The DiscoverIndex component scrolls to the top of the page on load and renders a
 * list of campsites based on the provided data.
 * 
 */
const DiscoverIndex = ({campsites}) => {
  
  // when the componet is loaded, scroll to the top of the page
  useEffect(() => {
    // temp warning to ensure the hook is check when data is ready
    console.warn('NO-DATA CHECK!\nDiscoverIndex was converted to a hook without data to ensure it was working!')
    window.scrollTo(0, 0);
  }, []);

  // create our array of items for rendering
  const campsiteList = campsites.map(campsite => {
    return <CampsiteIndexItem key={campsite.id} campsite={campsite} />
  });

  
  return (
    <div className="discover-list">
      {campsiteList}
    </div>
  )
  
};

export default DiscoverIndex;