function encriptar(){
    let texto=document.getElementById("texto").value;
    let tituloMensaje=document.getElementById("ttl-msm");
    let parrafo=document.getElementById("parrafo");
    let icon=document.getElementById("icon");

    let textoCifrado=texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    if(document.getElementById("texto").value.length!=0){
        document.getElementById("texto").value=textoCifrado;
        tituloMensaje.textContent="Texto encriptado con éxito";
        parrafo.textContent="";
        icon.src="./imagenes/eyes2.jpg";
    }else{
        icon.src="./imagenes/fin.jpg";
        tituloMensaje.textContent="Ningun mensaje fue encontrado.";
        parrafo.textContent="Ingrese el texto que deseas encriptar o desencriptar";
        alert="Debes ingresar algun texto.";
    }
}