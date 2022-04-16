window.onresize = screen;
window.onload = screen;



function screen(){
    myWidth = window.innerWidth;

    // getting the id element
    document.querySelector("#size").innerHTML = "Width: " + myWidth + "px";
}