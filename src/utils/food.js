import { restaurants } from '../data/food.js'

export const getRandomRestaurant = (restaurantsToReturn = restaurants) => {
  const index = Math.floor(Math.random() * restaurantsToReturn.length)

  return restaurantsToReturn[index]
}

export const getRestaurantFromSearch = (search) => {
  const filteredRestaurants = restaurants.filter((restaurant) =>
    JSON.stringify(restaurant).match(new RegExp(search, 'i'))
  )

  return getRandomRestaurant(filteredRestaurants)
}

export const getRestaurantNames = () => {
  return restaurants.map(({ name }) => name)
}
