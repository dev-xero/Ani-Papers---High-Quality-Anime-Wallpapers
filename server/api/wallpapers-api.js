import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const RAPID_API_KEY = process.env.RAPID_API_KEY

/**
 * 
 * Primarily accepts a searchText for finding the specific anime wallpaper, uses wallhaven api
 * @param {*} searchText 
 * @param {*} req 
 * @param {*} res 
 */
const connect_to_api = (searchText, req, res) => {
  console.log(searchText)
  axios.get(`https://wallhaven.cc/api/v1/search?q=${searchText}`)
    .then(response => {
      console.log(response.data.data)
      res.status(200).json(response.data.data)
    })
    .catch(error => {
      console.error(error)
      res.status(404).end('We are unable to get your wallpaper at this time')
    })
}

export default connect_to_api
