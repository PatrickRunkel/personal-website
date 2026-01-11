const text = "Hi, ich bin\nPatrick Runkel";
let index = 0;

function typeWriter() {
  const element = document.getElementById("typewriter");

  if (index < text.length) {
    if (text.charAt(index) === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += text.charAt(index);
    }
    index++;
    setTimeout(typeWriter, 250);
  }
}

window.onload = typeWriter;

