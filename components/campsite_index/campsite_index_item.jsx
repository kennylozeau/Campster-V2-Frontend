import React, {useEffect} from 'react';

import { useHistory } from 'react-router-dom';

/**
 * The CampsiteIndexItem component renders a campsite entry with details and a clickable link to view
 * more information.
 * @returns The `CampsiteIndexItem` component is returning JSX elements that represent a campsite
 * entry. It includes an article element with a click event handler, an image element, and a summary
 * element containing the campsite name, description, and price per night.
 */
const CampsiteIndexItem = ({key, campsite}) => {
  const history = useHistory();
  const price = campsite.price.toFixed(0);

  // this useEffect is to be removed!
  useEffect(() => {
    console.warn('NO-DATA CHECK!\nCampsiteIndexItem was converted to hook without data to check it!\nThus you should double check it when we have data!')
  }, [])

  const handleClick = (e) => {
    e.stoppropagation();
    history.push(`/campsites/${campsite.id}`);
  }

  return (
    <article className="campsite-entry" onClick={handleClick}>
      <div className="index-photo-container">
        <img src={window[sitePhoto]} className="index-photo" />
      </div>
      <summary className="campsite-details">
        <div>
          <h1>{campsite.name}</h1>
          <h3>{campsite.description}</h3>
        </div>
        <h2>${price}/night</h2>
      </summary>
    </article>
  )
}

export default CampsiteIndexItem;