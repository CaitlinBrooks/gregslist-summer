import CarController from "./app/components/cars/CarController.js";
import HouseController from "./app/components/houses/HouseController.js";
import JobController from "./app/components/jobs/JobController.js";

export default class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController()
    }
  }
}

//@ts-ignore
window.app = new App()