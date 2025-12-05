
function spawn(){
  window.location.href = "https://CoderDragon.github.io/ProgressTracker.com/add.html"
}

function display2(){
let trackers =  JSON.parse(localStorage.getItem("trackers")) || []
trackers.forEach(tracker => {
  let title = document.createElement("p")
  let description = document.createElement("p")
  title.innerHTML = tracker.title
  description.innerHTML = tracker.description
  document.body.appendChild(title)
  document.body.appendChild(description)
})
}

window.onload = display2;
