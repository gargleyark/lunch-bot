import axios from 'axios';
import config from '../../config.js';
import { getRandomRestaurant } from '../../utils/food'

/**
 * Health check endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const getRoot = (_req, res) => {
    res.status(200).send('good')
}

export default getRoot