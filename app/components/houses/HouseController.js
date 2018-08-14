import HouseService from "./HouseService.js";

let houseService = new HouseService()

function drawHouses(houses) {
  let template = ''
  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${house.bedrooms}</p>
        <p>${house.bathrooms}</p>
        <img src="${house.imgUrl}" alt="imgUrl">
        <p>${house.levels}</p>
        <p>${house.year}</p>
        <p>${house.price}</p>
        <p>${house.description}</p>
    </div>
    `
  }

  document.getElementById('houses').innerHTML = template


}

export default class HouseController {

  constructor() {
    houseService.getHouses(drawHouses)
  }

  addCar(e) {
    e.preventDefault();
    let formData = e.target
    houseService.addHouse(formData, drawHouses)
    formData.reset()
  }

}