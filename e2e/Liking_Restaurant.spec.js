/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing empty favorite restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__not__found');
  I.see(
    'There are no favorite restaurants displayed',
    '.restaurant-item__not__found',
  );
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('No restaurant', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('h2 a');
  I.click(locate('h2 a').first());
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.wait(5);
  I.seeElement('h2 a');
  I.click(locate('h2 a').first());
  I.wait(5);
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');
  I.amOnPage('/#/like');
  I.wait(5);
  I.see('No restaurant', '.restaurant-item__not__found');
});

Scenario('go to page about us', ({ I }) => {
  I.seeElement('.nav__list');
  I.wait(5);
  I.see('ABOUT US', '.nav__item');
  I.click(locate('.nav__item').last());
  I.wait(5);
  I.amOnPage('https://www.linkedin.com/in/aini-nurpadilah/');
});

Scenario('Customer review', async (I) => {
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item__content').first());

  I.seeElement('.form-review form');
  I.fillField('inputName', 'test review');
  I.fillField('inputReview', reviewText);
  I.click('#submit-review');

  I.waitForResponse('https://restaurant-api.dicoding.dev/review');
  const lastReview = locate('.customer__review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);

  assert.strictEqual(reviewText, lastReviewText.trim());
});
