const imagenes = document.querySelectorAll(".img-galeria")
const imagenesLight = document.querySelector(".agregar-imagen")
const contenedorLight = document.querySelector(".imagen-light")
const hamburguer1 = document.querySelector(".hamburguer")
 

imagenes.forEach(imagen=>{
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute("src"));
    });
});


contenedorLight.addEventListener("click", (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle("show1");
        imagenesLight.classList.toggle("showImage1");
        hamburguer1.style.opacity = "1";
    };
});


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show1");
    imagenesLight.classList.toggle("showImage1");
    hamburguer1.style.opacity = "0";
};