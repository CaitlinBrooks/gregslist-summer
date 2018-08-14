import House from '../../models/House.js'

//Creates a new HTTP Request object
// @ts-ignore
const housesApi = axios.create({
  //base connection url
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses',
  //only wait 3 seconds for response
  timeout: 3000
})



export default class HouseService {
  constructor() {

  }

  getHouses(draw) {
    housesApi.get()
      .then(res => {
        //converts each raw car data into Car class objects
        let houses = res.data.data.map(rawHouse => {
          return new House(rawHouse)
        })
        //callback function to draw cars
        draw(houses)
      })
  }

  addHouse(formData, draw) {
    let newHouse = new House({
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      imgUrl: formData.imgUrl.value,
      levels: formData.levels.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
    })
    //first parameter is any addition to base url
    //second parameter is object to pass to server
    housesApi.post('', newHouse)
      .then(res => {
        this.getHouses(draw)
      })
  }
}