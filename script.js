
function spawn(){
  window.location.href = "https://CoderDragon53.github.io/ProgressTracker.com/add.html"
}

function display2(){
let trackers =  JSON.parse(localStorage.getItem("trackers")) || []
trackers.forEach(tracker => {
  let title = document.createElement("p")
  let description = document.createElement("p")
  let div = document.createElement("p")
  let status = document.createElement("p")
  let veryLow = document.createElement("button")
  status.innerHTML = "Priority: Unspecifed"
  status.style.color = "grey"
  div.style.borderStyle = "solid"
  div.style.borderColor = "black"
  div.style.borderRadius = "5px"
  div.style.borderWidth = "5px"
  veryLow.style.backgroundColor = "darkgreen"
  veryLow.style.borderRadius = "50px"
  veryLow.onclick = () => {
    tracker.priority = "Very Low"
    status.innerHTML = "Priority: Very Low"
    status.style.color = "darkgreen"
    localStorage.setItem("trackers", JSON.stringify(trackers))
  }
  div.style.padding = "10px"
  div.style.width  = "100px"
  div.style.margin = "10px auto"
  div.style.textAlign = "center"
  title.innerHTML = tracker.title
  description.innerHTML = tracker.description
  title.id = "title2"
  description.id = "desc"
  document.body.appendChild(div)
  div.appendChild(title)
  div.appendChild(description)
  div.appendChild(status)
  div.appendChild(veryLow)
  
  console.log("Tracker:", tracker.title, tracker.description, tracker.priority);
  console.log("Div created:", div);
})
}

window.onload = display2;


