const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const sustitucion = ['ai', 'b', 'c', 'd', 'enter', 'f', 'g', 'h', 'imes', 'j', 'k', 'l', 'm', 'n', 'ober', 'p', 'q', 'r', 's', 't', 'ufat', 'v', 'w', 'x', 'y', 'z'];
var selectOne = document.getElementById("texto-resultado");
var selectTwo = document.getElementById("image-resultado");
function encriptar() {
    let palabra = document.getElementById("input1").value;
    let palabraMinuscula = palabra.toLowerCase();
    let letrasPalabra = palabraMinuscula.split('');
    console.log(palabra);
    if (palabra !== null && palabra !== "" && palabra !== undefined) {
        
        selectOne.style.display = "block";
        selectTwo.style.display = "none";
    }
    for (let i = 0; i < letrasPalabra.length; i++) {
        let letra = letrasPalabra[i];
        // console.log(letra);
        let indice = letras.indexOf(letra);
        //   console.log(indice);
        if (indice >= 0) {
            letrasPalabra[i] = sustitucion[indice];
            // console.log(letrasPalabra[i]);
        }
    }
    let palabraEncriptada = letrasPalabra.join('');
    // console.log(palabraEncriptada);

    document.getElementById("valueInput").innerHTML = palabraEncriptada;
}

// let texto2 = "gaitober";
var sustituciones = {
    "ai": "a",
    "ober": "o",
    "enter": "e",
    "imes": "i",
    "ufat": "u"
};
let resultText = "";
function desencriptar() {
    let valorInput = document.getElementById("input1").value;
    if (valorInput !== null && valorInput !== "" && valorInput !== undefined) {
        
        selectOne.style.display = "block";
        selectTwo.style.display = "none";
    }
    var resultText = valorInput;
    console.log(resultText);
    for (var palabra in sustituciones) {
        if (resultText.toLowerCase().includes(palabra)) {
            resultText = resultText.replaceAll(palabra, sustituciones[palabra]);
            // console.log("palabra reemplazada " + resultText);
        }
    }
    // console.log(resultText);

    // if (valorInput.toLowerCase().includes("ai")) {
    //     resultText = resultText + texto2.replaceAll("ai", "a");
    //     console.log("aaaaa: " + resultText);
    // }
    // console.log(resultText);
    // var textt = resultText;
    // if (textt.toLowerCase().includes("ober")) {
    //     console.log("oooo: " + textt);
    //     resultText = textt.replaceAll("ober", "o");
    //     console.log("oooo resp: " + resultText);
    // }
    // textt = resultText;
    // if (textt.toLowerCase().includes("enter")) {
    //     console.log("eee: " + textt);
    //     resultText = textt.replaceAll("enter", "e");
    //     console.log("eeee resp: " + resultText);
    // }
    // textt = resultText;
    // if (textt.toLowerCase().includes("imes")) {
    //     console.log("iiii: " + textt);
    //     resultText = textt.replaceAll("imes", "i");
    //     console.log("iiii resp: " + resultText);
    // }
    // textt = resultText;
    // if (textt.toLowerCase().includes("ufat")) {
    //     console.log("uuuuu: " + textt);
    //     resultText = textt.replaceAll("ufat", "u");
    //     console.log("uuuuu resp: " + resultText);
    // }


    document.getElementById("valueInput").innerHTML = resultText;
}

function copiarTexto() {
    var copiarTexto = document.getElementById("valueInput").innerHTML;
    selectOne.style.display = "none";
    selectTwo.style.display = "block";
    // var copiarTexto = document.getElementById("valueInput").value;
    console.log(copiarTexto);
    /* Crear un elemento temporal para copiar el texto */
    var tempElement = document.createElement("textarea");
    console.log(" temp elemet : " + tempElement);
    tempElement.value = copiarTexto;
    console.log(tempElement.value);
    // es un atributo booleano que indica si el usuario puede o no editar el contenido
    tempElement.setAttribute("readonly", "");
    // le permite colocarse en cualquier lugar de la página
    tempElement.style.position = "absolute";
    // se utiliza para ocultar un elemento
    tempElement.style.left = "-9999px";
    // el elemento se agrega visualmente a la página web y se vuelve accesible
    document.body.appendChild(tempElement);

    /* Seleccionar y copiar el texto */
    tempElement.select();
    document.execCommand("copy");

    /* Eliminar el elemento temporal */
    document.body.removeChild(tempElement);

    /* Mostrar un mensaje de éxito */
    // alert("Texto copiado al portapapeles: " + copiarTexto);
    document.getElementById("input1").focus();
    document.getElementById("input1").value = copiarTexto;
}




var button = document.getElementById("resultado-button")
//asignamos a nuestro botton la función
button.onclick = copiarTexto;
var button = document.getElementById("encriptar")
//asignamos a nuestro botton la función
button.onclick = encriptar;
var button = document.getElementById("desencriptar")
//asignamos a nuestro botton la función
button.onclick = desencriptar;