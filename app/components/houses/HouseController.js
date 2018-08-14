import HouseService from "./HouseService.js";
//PRIVATE
const hs = new HouseService()


//Public
class HouseController {
  constructor() {

  }
  getHouse(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    // HouseService.addHouse(formData)
    // formData.reset()
    // drawHouse()
  }
}
console.log("hello from HouseController.js")
// draw only on controller
export default HouseController