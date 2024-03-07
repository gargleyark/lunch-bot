import axios from 'axios'
import {
  getRandomRestaurant,
  getRestaurantNames,
  getRestaurantFromSearch,
} from '../../utils/food'

/**
 * Echo endpoint
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const postRoot = (req, res) => {
  const reqBody = req.body
  const isPrivate = reqBody.text.match(/private/)
  const showAll = reqBody.text.match(/all/)
  const search = reqBody.text.match(/search=\w+/)
  const searchTerms = search ? search[0].split('=')[1] : ''

  const restaurant = searchTerms
    ? getRestaurantFromSearch(searchTerms)
    : getRandomRestaurant()

  const data = {
    text: `:wave: ${reqBody.user_name} is hungry${
      searchTerms ? ` and searched for ${searchTerms}` : ''
    }. How about *${restaurant.name}*? They serve ${
      restaurant.type
    } and are only ${restaurant.distance} away. ${
      restaurant.links
        ? `<https://goo.gl/maps/${restaurant.links.google}|More info here>`
        : ''
    }`,
  }

  if (showAll) {
    data.text = `:wave: ${
      reqBody.user_name
    } has asked for all the restaurants! Here are the options:\n${getRestaurantNames().join(
      '\n'
    )}`
  }

  if (!isPrivate) {
    axios.post(`https://hooks.slack.com/services/${process.env.WEBHOOK}`, {
      ...data,
      username: 'lunchbot',
      icon_emoji: ':gravyboatboatjeff:',
    })
  }

  res
    .status(200)
    .send(
      isPrivate
        ? data.text
        : `I have sent a ${
            showAll ? 'list' : 'recommendation'
          } to #pints-or-lunch`
    )
}

export default postRoot
