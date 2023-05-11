import axios from 'axios';
import { getRandomRestaurant } from '../../utils/food'

/**
 * Echo endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const postRoot = (req, res) => {
    const restaurant = getRandomRestaurant()

    const reqBody = req.body

    const directMessage = reqBody.channel === 'directmessage'

    const channel = directMessage ? `@${reqBody.user_name}` : `#${reqBody.channel}`

    axios.post(`https://hooks.slack.com/services/${process.env.WEBHOOK}`, {
        text: `${reqBody.user_name} is hungry. How about ${restaurant.name}? They serve ${restaurant.type} food and are only ${restaurant.distance} away. ${restaurant.links ? `<https://goo.gl/maps/${restaurant.links.google}|More info here>` : ''}${JSON.stringify(reqBody)}`,
        username: 'lunchbot',
        icon_emoji: ":gravyboatboatjeff:",
        channel,
    })

    res.status(200).send('I have send a recommendation to #pints-or-lunch')
}

export default postRoot