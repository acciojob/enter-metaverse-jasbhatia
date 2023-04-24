//your Jlet btn= document.getElement.id;
//your JS code here. If required.

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.getElementById("para").innerText = "Entered Metaverse";
  document.getElementById("para").style.fontSize = "3em";
	 document.getElementById("para").style.fontWeight = "bolder";
});
