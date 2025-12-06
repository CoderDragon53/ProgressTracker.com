
function spawn(){
  window.location.href = "https://CoderDragon53.github.io/ProgressTracker.com/add.html"
}

function display2(){
let trackers =  JSON.parse(localStorage.getItem("trackers")) || []
trackers.forEach(tracker => {
  let title = document.createElement("p")
  let description = document.createElement("p")
  title.innerHTML = tracker.title
  description.innerHTML = tracker.description
  title.id = "title2"
  description.id = "desc"
  document.body.appendChild(title)
  document.body.appendChild(description)
})
}

window.onload = display2;
