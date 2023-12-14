# Platzi-Curso-practico-JavaScript-Es-tu-turno-crea-un-tutorial-
A small project. A upload button with drag and drop and styles.
Hola, en este pequeño tutorial te enseñaré a hacer un botón de upload con drag and drop; que solo admite videos y audios en formato mp3 y mp4; que cambia de color on hover; que cambia de color a azul cuando el archivo es correcto y cambia un texto de "Ningún archivo a sido subido." a el nombre del archivo subido; que cambia de color a rojo por 3 segundos y muestra una alerta cuando el archivo.
Primero hacemos un HTML.
Es importante que el "for" de la etiqueta label tenga el mismo nombre que el id del "input-file" por cuestiones de accesibilidad y usabilidad, además de ser una buena práctica.
La imagen pueden descargarla de internet.
En la etiqueta "input" es importante poner el tipo de archivos que se desean subir para que el navegador sepa qué tipo de archivos buscar.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boton de upload.</title>
    <link rel="stylesheet" href="/style.css">
<body>
<main>

    <h2>Suba un video mp4 o un audio mp3. Haga click en el icono o arrastre un archivo.</h2>
    <label for="input-file" id="upload_button" class="upload">
        <input type="file" accept="video/mp4, audio/mp3" id="input-file">
        <img src="/assets/508-icon.png" alt="Upload file icon" width="90px">
        </label>

    
        
        <span id="upload_text">Ningún archivo a sido subido.</span>
<script src="/script.js"></script>
  </main>  
</body>
</html>

```
Ahora un CSS para que se vea bonito, porque a nadie le importa que tan buena gente sea o que tan bonitos sentimientos tenga el botón si este es feo 😢


```
html{
    font-size: 62.5%;
    background: rgb(178,13,200);
    background: radial-gradient(circle, rgba(178,13,200,1) 0%, rgba(59,3,77,1) 60%);
}
main{
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 750px;
  left: 50%;
  translate: -50%;
  background-color: rgba(59,3,77,1);
  font-size: 1.4rem;
  flex-direction: column;
  text-align: center;
  color: rgb(11, 186, 186);

}


.upload {
  width: 95px;
  min-height: 95px;
  align-items: center;
  background-color: rgb(110, 9, 123);
  border-radius: 50%;
  border-color: black;
  font-size: 1.6rem;
  transition: 0.5s;
  cursor:pointer;
  
}
.upload img{
  cursor:pointer;
}
.upload:hover{
  background-color: rgba(178,13,200,1);

}
.upload:active{
  cursor: progress;
  background-color:rgb(77, 8, 86);
}


#input-file {
  display: none; 

}
.invalid{
  background-color: rgb(252, 79, 79);

}
.invalid:hover{
  background-color:rgb(252, 79, 79) ;
  opacity: 0.7;
}

.valid{background-color: rgb(11, 186, 186);

}
.valid:hover{
  background-color: rgb(7, 112, 112);
  opacity: 0.7;
}![](![](url))
```
Ahora lo divertido. El JavaScript
```JS
      // Primero vamos a declarar las 3 variables que vamos a utilizar. Para ello vamos a utilizar el método  "document.getElementById" Para vincular los elementos de nuestro HTML con el JS.
const uploadButton = document.getElementById("upload_button");
const uploadText = document.getElementById("upload_text");
const inputFile = document.getElementById("input-file");
          //*Ahora vamos a hacer una función para validar el tipo de archivo y tomar acciones según si el archivo es correcto o incorrecto.*//
function handleFileSelection(file) {
  const type = file.type;

  if (type.includes("video/") || type.includes("audio/") || fileName.endsWith(".mp3") || fileName.endsWith(".mp4")) { //*En caso de que el archivo sea mp3 o mp4, le da la clase de "valid" a la etiquetta "label" de nuestro botón, además  de que cambie el texto de debajo del botón de "Ningún archivo a sido subido" a "El nombre del archivo subido" *//
   
    uploadButton.classList.remove("invalid");
    uploadButton.classList.add("valid");
    uploadText.textContent = file.name;
  } else { //En caso de que el archivo no sea mp3 o mp4 manda una alerta de error y le da la clase de "invalid" a la etiquetta "label" de nuestro botón.
    
    uploadButton.classList.remove("valid");
    uploadButton.classList.add("invalid");
    alert("Uploaded file isn't valid.");
    setTimeout(() => {
      uploadButton.classList.remove("invalid");
    }, 3000); // Esto quita el "invalid" después de 3 segundos.
  }
}

uploadButton.addEventListener("dragover", (e) => {//*quita el comportamiento predeterminado del dragover*//
    e.preventDefault();
  
  });
  uploadButton.addEventListener("drop", (e) => {//*Aqui es donde se hace el "drag and drop",quita el comportamiento predeterminado del drop que es abrir el archivo en otra pestaña y usando la constante "e.dataTransfer.files[0]" se le cambia el comportamiento para que cuando se arrastre y dropee un archivo, este lo agarre. El [0] es para que solo agarre el primer archivo en caso de que dropeen muchos al mismo tiempo.*//
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileSelection(file);
  });

  inputFile.addEventListener("change", (e) => {//*const file = e.target.files[0]: Es tipicamente usado para un event listener de un <input type="file">. Cuando un archivo es seleccionado a traves del dialogo file picker, el evento `change` es disparado y el `e.target.files[0]` se encarga de agarrar el primer archivo en caso de que se suban varios.
    const file = e.target.files[0];
    handleFileSelection(file);
  });

```
