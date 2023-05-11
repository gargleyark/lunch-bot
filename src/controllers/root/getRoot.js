import config from '../../config.js';
import { getRandomRestaurant } from '../../utils/food'

/**
 * Health check endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const getRoot = (req, res) => {
    const restaurant = getRandomRestaurant()

    res.status(200).send(`How about ${restaurant.name}? They serve ${restaurant.type} food and are only ${restaurant.distance} away. ${restaurant.links ? `More info here: https://goo.gl/maps/${restaurant.links.google}` : ''}`)
}

export default getRoot