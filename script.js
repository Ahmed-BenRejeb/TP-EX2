function change(){
    color = document.getElementById("color").value;
    fontFamily = document.getElementById("fontFamily").value;
    fontSize = document.getElementById("size").value.toString() + "px";

    document.getElementById("text").style.color = color;
    document.getElementById("text").style.fontFamily = fontFamily;
    document.getElementById("text").style.fontSize = fontSize;
    
}