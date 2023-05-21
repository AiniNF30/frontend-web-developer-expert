import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h1 id="restaurant-label">Explore Restaurants that Offer Everything You Need</h1>
        <div id="explore-restaurant-list" class="restaurant"></div>
      </div>
    `;
  },

  async afterRender() {
    const listRestaurant = await RestaurantSource.getRestaurants();
    const restaurantContainer = document.getElementById(
      'explore-restaurant-list',
    );
    restaurantContainer.innerHTML = '';
    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
