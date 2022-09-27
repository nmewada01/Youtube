let showed = JSON.parse(localStorage.getItem("videos"))
//console.log(showed)

let dib = document.createElement("div")
let frame = document.createElement("iframe")
frame.src = `https://www.youtube.com/embed/${showed.videoId}`
frame.width = "95%"
frame.height = "70%"
frame.allow = "fullscreen"

let down_title = document.createElement("h3")
down_title.innerText = showed.title;

dib.append(frame,down_title);

document.querySelector("#box").append(dib);
