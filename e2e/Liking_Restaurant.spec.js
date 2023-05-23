/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert').strict;

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

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item__content');
  I.click('.restaurant-item__content');
  I.waitForClickable('#likeButton');
  I.click('#likeButton');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__not__found');

  I.amOnPage('/#');
  I.waitForElement('h2 a');
  I.click(locate('h2 a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('h2 a');
  I.click(locate('h2 a').first());
  I.waitForElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__not__found');
});

Scenario('Customer review', async ({ I }) => {
  I.waitForElement('h2 a');
  I.click(locate('h2 a').first());

  const reviewText = 'Uenakk';
  I.waitForElement('.form-review form');
  I.fillField('inputName', 'test review');
  I.fillField('inputReview', reviewText);
  I.click('#submit-review');

  const lastReview = locate('.desc_review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
