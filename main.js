function color_button() {
    document.getElementById("text_area").style.color = document.getElementById("text_color").value;
}

function bgColor_button() {
    document.getElementById("text_area").style.backgroundColor = document.getElementById("background_color").value;
}

font_size = 20;

function font_up() {
    font_size = font_size + 5;
    document.getElementById("text_area").style.fontSize = font_size;
}

function font_down() {
    font_size = font_size - 5;
    document.getElementById("text_area").style.fontSize = font_size;
}

function arial() {
    document.getElementById("text_area").style.fontFamily = "Arial";
}

function georgia() {
    document.getElementById("text_area").style.fontFamily = "Georgia";
}

function arial_black() {
    document.getElementById("text_area").style.fontFamily = "Arial Black";
}

function times() {
    document.getElementById("text_area").style.fontFamily = "Times";
}

function courier() {
    document.getElementById("text_area").style.fontFamily = "Courier";
}

function comic() {
    document.getElementById("text_area").style.fontFamily = "Comic";
}

function impact() {
    document.getElementById("text_area").style.fontFamily = "Impact";
}

function verdana() {
    document.getElementById("text_area").style.fontFamily = "Verdana";
}