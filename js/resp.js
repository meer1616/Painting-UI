function toogle() {
  let horiznavbar = document.getElementById("horiznavbar");
  let ham = document.getElementById("ham");
  let close = document.getElementById("close");
  if (horiznavbar.style.display == "block") {
    horiznavbar.style.display = "none";
    close.style.display = "none";
    ham.style.display = "block";
  } else {
    horiznavbar.style.display = "block";
    ham.style.display = "none";
    close.style.display = "block";
  }
}
