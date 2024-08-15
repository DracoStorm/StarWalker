
function addElemento(texto) {

    var capa = document.getElementById("capa");
    var div = document.createElement("div")
    var lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio quidem consequuntur, expedita quiassumenda veritatis consequatur unde asperiores totam beatae enim hic culpa aliquid inventore deserunt sunt dolor.Enim!";
    div.className = "cuadro-chido";
    div.innerHTML = "<h2>" + texto + "</h2><p>" + lorem + "</p>";
    capa.appendChild(div);
}