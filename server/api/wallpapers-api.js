import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const RAPID_API_KEY = process.env.RAPID_API_KEY

/**
 * 
 * Primarily accepts a searchText for finding the specific anime wallpaper
 * @param {*} searchText 
 * @param {*} req 
 * @param {*} res 
 */
const connect_to_api = (searchText, req, res) => {
  let data = null
  const options = {
    method: 'GET',
    url: 'https://premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com/rapidHandler/search',
    params: {
      page: '2',
      sensitivity: '1',
      searchText: searchText,
      exact: '0',
      quality: '0',
    },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host':
        'premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com',
    },
  }
  axios
    .request(options)
    .then(response => {
      data = response.data
      res.status(200).json(data)
    })
    .catch(error => {
      console.error(error)
      res.status(404).end('We are unable to get your wallpaper at this time')
    })
}

export default connect_to_api
