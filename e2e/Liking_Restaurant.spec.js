/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { strictEqual } from 'assert';

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
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('h2 a');
  I.click(locate('h2 a').first());
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.waitForElement('h2 a');
  I.click(locate('h2 a').first());
  I.waitForElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');
  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-item__not__found');
});

Scenario('Customer review', async ({ I }) => {
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
