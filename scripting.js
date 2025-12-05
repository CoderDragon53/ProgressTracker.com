function display(){
  let inputValue = document.getElementById("title").value;
  let inputValue2 = document.getElementById("des").value;
  let trackers = JSON.parse(localStorage.getItem("trackers")) || [];
  trackers.push({ title: inputValue, description: inputValue2})
  localStorage.setItem("trackers", JSON.stringify(trackers))
  window.location.href = "/index.html"
}
