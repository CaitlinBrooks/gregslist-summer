export default class House {
  constructor(bedrooms, bathrooms, imgUrl, levels, year, price, description) {
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.imgUrl = imgUrl
    this.levels = levels
    this.year = year
    this.price = price
    this.description = description
  }
}

console.log('hello from house.js')