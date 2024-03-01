
const captura = document.querySelector(".textArea").value;
const captura1 = document.querySelector(".mostrarTexto").value;

/* 
    Decidi dejar mi codigo de encriptar original y no el del video,
    por que me costo un poco razonarlo y me sentia a gusto viendo lo
    que logre con mis pocos conocimientos de metodos y manipulacion de 
    arrays.
*/
function encriptar(){
    let listConversion = ["enter","imes","ai","ober","ufat"];
    let letras = ["e","i","a","o","u"];
    let textArea = document.querySelector(".textArea").value;
    let mensajeMostrar = textArea.split('');
    for (let i = 0; i < caracter.length; i++) {
        if(mensajeMostrar[i]){
            for(let j = 0; j<listConversion.length; j++){
                if(mensajeMostrar[i] ===  letras[j]){
                    mensajeMostrar[i] = listConversion[j]
                }
            }
        }
    }
    return document.querySelector(".mostrarTexto").value = caracter.join('');
}

function descifrar(){
    let textArea = document.querySelector(".textArea").value;
    let matrizCodigo = [["e","enter"],["u","imes"],["a","ai"],["o","ober"],["u","ufat"]] 
}
