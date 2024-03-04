
const COPY = document.getElementById("copy");
let mostrarTexto = document.querySelector(".mostrarTexto");

/* 
    Decidi dejar mi codigo de encriptar original y no el del video, por que me costo un poco razonarlo y me sentia a gusto viendo lo que logre con mis pocos conocimientos de metodos y manipulacion de 
    arrays.
*/


function encriptar(){
    let listConversion = ["enter","imes","ai","ober","ufat"];
    let letras = ["e","i","a","o","u"];
    let textArea = document.querySelector(".textArea").value;
    textArea = textArea.toLowerCase();
    let mensajeMostrar = textArea.split('');
    if(textArea == ""){
        return document.querySelector(".mostrarTexto").value = "No se han ingresado caracteres";
    }
    else if (textArea = (/[0-9!@#$%^&*()_+,.:;¿?¡'´`"{}<>@|\\/-]/.test(textArea) || /[A-Z]/.test(textArea))) {
        return mostrarTexto.value =("El contenido no debe contener números, caracteres especiales ni mayúsculas.");
    }else{
        for (let i = 0; i < mensajeMostrar.length; i++) {
            if(mensajeMostrar[i]){
                for(let j = 0; j<listConversion.length; j++){
                    if(mensajeMostrar[i] ===  letras[j]){
                        mensajeMostrar[i] = listConversion[j]
                    }
                }
                document.querySelector(".mostrarTexto").style.backgroundImage = "none"; 
                document.getElementById("copy").removeAttribute("disabled");
            }
        }
        return document.querySelector(".mostrarTexto").value = mensajeMostrar.join('');
    }
    
}
function limpiar(){
    document.querySelector(".textArea").value = "";
}
function descifrar(){
    let textArea = document.querySelector(".textArea").value;
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    if(textArea == ""){
        return document.querySelector(".mostrarTexto").value = "No se han ingresado caracteres";
    }else if (/[0-9!@#$%^&*()_+,.:;¿?¡'´`"{}<>@|\\/-]/.test(textArea) || /[A-Z]/.test(textArea)) {
        return mostrarTexto.value =("El contenido no debe contener números, caracteres especiales ni mayúsculas.");
    }else{
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (textArea.includes(matrizCodigo[i][1])) {
                textArea = textArea.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        document.querySelector(".mostrarTexto").style.backgroundImage = "none"; 
        document.getElementById("copy").removeAttribute("disabled");
        document.querySelector(".mostrarTexto").value = textArea;
    }
}

//Para copiar texto
COPY.addEventListener('click', async () => {
    navigator.clipboard.writeText(mostrarTexto.value);
    mostrarTexto.value = "";
})

































// function reemplazarPalabras(cadena, matrizCodigo) {
//     // Convertir la cadena en un array de caracteres
//     const arr = [...cadena];
//     // Recorrer cada carácter del array
//     for (let i = 0; i < arr.length; i++) {
//         // Buscar coincidencias en la matriz
//         for (const [volca, palabra] of matrizCodigo) {
//             if (arr.slice(i, i + palabra.length).join("") === palabra) {
//                 // Reemplazar la palabra por la volca
//                 arr.splice(i, palabra.length, volca);
//                 break; // Salir del bucle interno
//             }
//         }
//     }
//     // Unir los caracteres modificados en una cadena
//     return arr.join("");
// }
// // Ejemplo de uso
// const cadenaOriginal = "hoberlai mufatndober";
// const matrizCodigo = [
//     ["e", "enter"],
//     ["i", "imes"],
//     ["a", "ai"],
//     ["o", "ober"],
//     ["u", "ufat"]
// ];
// const resultado = reemplazarPalabras(cadenaOriginal, matrizCodigo);
// console.log(resultado); // Salida: "elaimer"
