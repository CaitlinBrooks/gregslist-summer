import Car from '../../models/Car.js'

//Creates a new HTTP Request object
// @ts-ignore
const carsApi = axios.create({
  //base connection url
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars/',
  //only wait 3 seconds for response
  timeout: 3000
})



export default class CarService {
  constructor() {

  }

  getCars(draw) {
    carsApi.get()
      .then(res => {
        //converts each raw car data into Car class objects
        let cars = res.data.data.map(rawCar => {
          return new Car(rawCar)
        })
        //callback function to draw cars
        draw(cars)
      })
  }

  addCar(formData, draw) {
    let newCar = new Car({
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    })
    //first parameter is any addition to base url
    //second parameter is object to pass to server
    carsApi.post('', newCar)
      .then(res => {
        this.getCars(draw)
      })
  }

  deleteCar(carId, draw) {
    carsApi.delete(carId)
      .then(res => {
        this.getCars(draw)
      })
  }

  bid(carId, update, draw) {
    carsApi.put(carId, update)
      .then(res => {
        console.log(res)
        this.getCars(draw)
      })
  }
}