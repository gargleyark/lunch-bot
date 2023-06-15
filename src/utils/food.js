import { restaurants } from "../data/food.js";

export const getRandomRestaurant = () => {
  const index = Math.floor(Math.random() * restaurants.length);

  return restaurants[index];
};

export const getRestaurantNames = () => {
  return restaurants.map(({ name }) => name);
};
