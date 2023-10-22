let img = document.getElementsByClassName("image")
let idImage = document.querySelector("#image")
let boxImagenes = document.querySelector(".box-imagenes")
let contentImagenes = document.querySelector(".content-imagenes")
let boxLargeImagen = document.querySelector(".box-large-imagen")
let boxImagen = document.getElementById("box-imagen")
let body = document.querySelector(".body")
let close = document.querySelector(".close")

for(const idimagen of idImage){
    idimagen.addEventListener("click",(eveny)=>{
        boxImagenes.classList.add('resize-box-imagenes')
        contentImagenes.classList.add('content-image-resize')
        boxLargeImagen.classList.add('block-imagen')
        body.classList.add('body')
    })
}

let n = 0;
function seleccionar(n){
    let obj = img.item(n);
    boxImagen.src = obj.src
}

