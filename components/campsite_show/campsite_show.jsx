import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CampsiteMap from './campsite_map';
import ReservationFormContainer from '../reservations/reservation_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import Carousel from './carousel';
import { fetchCampsite } from '../../actions/campsite_actions';
import { fetchReservations } from '../../actions/reservation_actions';

function CampsiteShow () {
  const { campsiteId } = useParams()
  const campsite = useSelector(state => state.entities.campsites[campsiteId])
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCampsite(campsiteId))
      .then(dispatch(fetchReservations()))
  }, [])

  if (campsite) {
    const price = campsite.price.toFixed(0);

    // TEMPORARY CODE FOR DEMONSTRATION
    let sitePhotoId1 = campsite.id % 27;
    let sitePhotoId2 = (campsite.id + 12) % 27;
    let sitePhotoId3 = (campsite.id + 24) % 27;
    if (sitePhotoId1 === 0) { sitePhotoId1 = 17 };
    if (sitePhotoId2 === 0) { sitePhotoId2 = 17 };
    if (sitePhotoId3 === 0) { sitePhotoId3 = 17 };

    const sitePhotos = [
      window[`camp${sitePhotoId1}URL`],
      window[`camp${sitePhotoId2}URL`],
      window[`camp${sitePhotoId3}URL`]
    ];

    return (
      <>
        <div className="campsite-show-container">
          <div className="photo-comp-placeholder">
            <Carousel imageUrls={sitePhotos}/>
          </div>
          <div className="campsite-details-container">
            <div className="campsite-detail-header">
              <h1>{campsite.name}</h1>
              <h3>{campsite.location}</h3>
            </div>
            <div className="campsite-detail-body">
              <div className="host-placeholder"></div>
              <div>
                <p>{campsite.description}</p>
                <p>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corrupti quia itaque corporis
              animi. Voluptatem ipsum quo aperiam porro quasi sed
              consequuntur. Nam provident expedita aliquam eius, soluta
              perferendis earum sed! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti quia itaque corporis animi.
              Voluptatem ipsum quo aperiam porro quasi sed consequuntur.
              Nam provident expedita aliquam eius, soluta perferendis
              earum sed!</p>
              <p>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corrupti quia itaque corporis
              animi. Voluptatem ipsum quo aperiam porro quasi sed
              consequuntur. Nam provident expedita aliquam eius, soluta
              perferendis earum sed! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti quia itaque corporis animi.
              Voluptatem ipsum quo aperiam porro quasi sed consequuntur.
              Nam provident expedita aliquam eius, soluta perferendis
              earum sed!
              </p>
              </div>
            </div>
          </div>
          <ReservationFormContainer price={price}/>
        </div>
        <div className="campsite-show-container">
          <div className="show-page-map-container">
            <aside className="map-campsite-details">
              <div className="map-campsite-subdetails">
                <h1>Property</h1>
                <h2>{campsite.name}</h2>
              </div>
              <div className="map-campsite-subdetails">
                <h1>Location</h1>
                <h2>{campsite.location}</h2>
              </div>
              <div className="map-campsite-details-price">
                <h1>${price}/night</h1>
              </div>
            </aside>
            <CampsiteMap mapType={"show-page-map"} campsite={campsite} />
          </div>
          <div className="campsite-reviews">
            <h1>Camper reviews for {campsite.name}</h1>
            <ReviewIndexContainer showId={campsite.id}/>
          </div>
        </div>
      </>
    )
  } else {
    return (
      null
    )
  }
}

export default CampsiteShow;