import axios from 'axios';
import config from '../../config.js';
import { getRandomRestaurant } from '../../utils/food'

/**
 * Health check endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const getRoot = (_req, res) => {
    const restaurant = getRandomRestaurant()

    axios.post(`https://hooks.slack.com/services/${process.env.WEBHOOK}`, {
        text: `How about ${restaurant.name}? They serve ${restaurant.type} food and are only ${restaurant.distance} away. ${restaurant.links ? `<https://goo.gl/maps/${restaurant.links.google}|More info here>` : ''}`,
        username: 'lunchbot',
        icon_emoji: ":gravyboatboatjeff:"
    })

    res.status(200).send('I have send a recommendation to #pints-or-lunch')
}

export default getRoot