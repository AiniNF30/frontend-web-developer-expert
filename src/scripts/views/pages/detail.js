/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/postreview-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-idb';

const Detail = {
  async render() {
    return `
      <div class="main">
        <h2 tabindex="0" class="explore-restaurant__label">Detail Restaurant</h2>
          <section id="detail-restaurant"></section>
          <div class="like" id="likeButtonContainer"></div>

          <div class="form-review">
            <form>
              <div class="mb-3">
                <label for="inputName" class="form-label">Name</label>
                <input name="inputName" type="text" class="form-control" id="inputName">
              </div>
              <div class="mb-3">
                <label for="inputReview" class="form-label">Review</label>
                <input name="inputReview" type="text" class="form-control" id="inputReview">
              </div>
              <button id="submit-review" type="submit" class="btn">Submit</button>
            </form>
          </div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // favorite
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
    // post review
    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  },
};

export default Detail;
