// eslint-disable-next-line no-unused-vars
import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div>
          <h2 tabindex="0" class="explore-restaurant__label">Favorite</h2>
          <h2 class="restaurant-item__not__found"></h2>
          <article id="explore-restaurant-list"></article>
      </div>
            `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById(
      'explore-restaurant-list',
    );
    const empty = document.querySelector('.restaurant-item__not__found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h2>There are no favorite restaurants displayed</h2>
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
