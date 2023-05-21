const createRestaurantCategoryDetail = (category) => `<span>${category.name}</span>`;

const createRestaurantCategoriesTemplate = (categories) => {
  let htmlTemplate = '';
  categories.forEach((category) => {
    htmlTemplate += createRestaurantCategoryDetail(category);
  });
  return htmlTemplate;
};

const createRestaurantMenuTemplate = (menu) => `
  <li>${menu.name}</li>
`;

const createRestaurantMenusTemplate = (menus) => {
  let htmlTemplate = '<ul>';
  menus.forEach((menu) => {
    htmlTemplate += createRestaurantMenuTemplate(menu);
  });
  htmlTemplate += '</ul>';
  return htmlTemplate;
};

const createRestaurantReviewTemplate = (review) => `
<div class="restaurant__desc__review">
  <h4 class="customer__name">${review.name}</h4>
  <p class="date_review">${review.date}</p>
  <p class="desc_review">${review.review}</p>
</div>  
`;

const createRestaurantReviewsTemplate = (reviews) => {
  let htmlTemplate = '<div class="restaurant__review">';
  reviews.forEach((review) => {
    htmlTemplate += createRestaurantReviewTemplate(review);
  });
  htmlTemplate += '</div>';
  return htmlTemplate;
};

export {
  createRestaurantCategoriesTemplate,
  createRestaurantMenusTemplate,
  createRestaurantReviewsTemplate,
};
