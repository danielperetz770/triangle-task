const form = document.getElementById("pointsForm")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const points = {
    x1: data.get("x1"), y1: data.get("y1"),
    x2: data.get("x2"), y2: data.get("y2"),
    x3: data.get("x3"), y3: data.get("y3"),
  }
  localStorage.setItem("trianglePoints", JSON.stringify(points))
  window.location.href = "display.html"
})
