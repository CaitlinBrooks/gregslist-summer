import JobService from "./JobService.js";

let jobService = new JobService()

function drawJobs(jobs) {
  let template = ''
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${job.company}</p>
        <p>${job.jobTitle}</p>
        <p>$${job.hours}</p>
        <button onclick="app.controllers.jobController.bid('${job._id}', ${job.price})">BID</button>
        <p>${job.rate}</p>
        <p>${job.description}</p>
        <button onclick="app.controllers.jobController.deletejob('${job._id}')">DELETE</button>
    </div>
    `
  }

  document.getElementById('jobs').innerHTML = template


}

export default class JobController {

  constructor() {
    jobService.getJobs(drawJobs)
  }

  addJob(e) {
    e.preventDefault();
    let formData = e.target
    jobService.addJob(formData, drawJobs)
    formData.reset()
  }

  deleteJob(jobId) {
    jobService.deleteJob(jobId, drawJobs)
  }

}