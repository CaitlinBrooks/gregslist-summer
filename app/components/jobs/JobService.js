import Job from '../../models/Job.js'

//Creates a new HTTP Request object
// @ts-ignore
const jobsApi = axios.create({
  //base connection url
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs/',
  //only wait 3 seconds for response
  timeout: 3000
})


export default class JobService {
  constructor() {

  }

  getJobs(draw) {
    jobsApi.get()
      .then(res => {
        //converts each raw car data into Car class objects
        let jobs = res.data.data.map(rawJob => {
          return new Job(rawJob)
        })
        //callback function to draw cars
        draw(jobs)
      })
  }

  addJob(formData, draw) {
    let newJob = new Job({
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value,
    })
    //first parameter is any addition to base url
    //second parameter is object to pass to server
    jobsApi.post('', newJob)
      .then(res => {
        this.getJobs(draw)
      })
  }

  deleteJob(jobId, draw) {
    jobsApi.delete(jobId)
      .then(res => {
        this.getJobs(draw)
      })
  }
}
