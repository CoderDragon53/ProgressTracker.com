
function spawn(){
  window.location.href = "https://CoderDragon53.github.io/ProgressTracker.com/add.html"
}

function display2(){
let trackers =  JSON.parse(localStorage.getItem("trackers")) || []
trackers.forEach(tracker => {
  let title = document.createElement("p")
  let description = document.createElement("p")
  let div = document.createElement("div")
  div.style.borderStyle = "solid"
  div.style.borderColor = "black"
  div.style.borderRadius = "5px"
  div.style.borderWidth = "5px"
  div.style.padding = "50px"
  div.style.backgroundColor = "blue"
  title.innerHTML = tracker.title
  description.innerHTML = tracker.description
  title.id = "title2"
  description.id = "desc"
  document.body.appendChild(div)
  div.appendChild(title)
  div.appendChild(description)
})
}

window.onload = display2;
