import CONFIG from '../../globals/config';
import {
  createRestaurantCategoriesTemplate,
  createRestaurantMenusTemplate,
  createRestaurantReviewsTemplate,
} from './restaurant-detail';

const createRestaurantDetailTemplate = (restaurant) => `
      <div class="card">
        <div class="restaurant__image__detail">
        <img class="restaurant__image" alt="${restaurant.name}" src="${
  restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}" crossorigin="anonymous">   
          <div class="restaurant__detail">
          <h2 class="restaurant__name">${restaurant.name}</h2> 
            <h3>Information : </h3>
              <h4>City : ${restaurant.city}</h4>
              <h4>Rating : ${restaurant.rating}</h4>
              <h4>Category : ${createRestaurantCategoriesTemplate(
    restaurant.categories,
  )}</h4>
              <h4>Address : ${restaurant.address}</h4>
              <h3>Description : </h3>
              <p>${restaurant.description}</p>
        </div>
    </div>
    </div>
    <div class="menu">
      <div class="restaurant__overall"></div>
        <h3 class="menu">Menu</h3>
      <div>
          <div class="restaurant__overall card ">
            <h3>Foods</h3>
            <div class="restaurant__menus">
              <p>${createRestaurantMenusTemplate(restaurant.menus.foods)}</p>
          </div>
      </div>
          <div class="restaurant__overall card">
           <h3>Drinks</h3>
           <div class="restaurant__menus">
             <p>${createRestaurantMenusTemplate(restaurant.menus.drinks)}</p>
         </div>
         </div> 
        </div>
      </div>
      <div class="detail-review">
        <div class="restaurant__review">
        <h3>Review</h3>
        <div class="customer__review">${createRestaurantReviewsTemplate(
    restaurant.customerReviews,
  )}</div>
      </div>
      </div>
    
  `;

const createRestaurantItemTemplate = (restaurant) => `
        <article tabindex="0" class="restaurant-item">
            <div class="restaurant-item__header"> 
            <img class="lazyload" data-src="${
  restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}" alt="Suasana di ${
  restaurant.name
}" crossorigin="anonymous">            
            <h2><a class="restaurant-item__content" href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h2>    
                <div class="detail__item">
                <h3 class="city">Kota ${restaurant.city}</h3>
                <h3 class="rating">⭐️<span>${restaurant.rating}</span></h3>
                <p class="desc">${restaurant.description}</p>
            </div>
            </article>            
`;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
