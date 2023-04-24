//your Jlet btn= document.getElement.id;
//your JS code here. If required.

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.getElementById("heading").innerHTML = "Entered Metaverse";
  document.getElementById("para").style.display = "none";
});
