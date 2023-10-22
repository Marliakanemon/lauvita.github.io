const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnMaquillaje = document.querySelector('.maquillaje');
const btnFacial = document.querySelector('.facial');
const btnCapilar = document.querySelector('.capilar');
const contenedormenu_productos = document.querySelector('.menu_productos');
document.addEventListener('DOMContentLoaded',()=>{
    menu_productos();
});

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{   
    observer.observe(imagen);
});

const menu_productos = () =>{
    let menu_productosArreglo = [];
    const menu_productos = document.querySelectorAll('.menu_producto');

    menu_productos.forEach(menu_producto=> menu_productosArreglo = [...menu_productosArreglo,menu_producto]);

    const maquillaje = menu_productosArreglo.filter(maquillaje=> maquillaje.getAttribute('data-producto') === 'maquillaje');
    const facial = menu_productosArreglo.filter(facial => facial.getAttribute('data-producto') === 'facial');
    const capilar = menu_productosArreglo.filter(capilar => capilar.getAttribute('data-producto') === 'capilar');

    mostrarProductos(maquillaje, facial, capilar, menu_productosArreglo);

}

const mostrarProductos = (maquillaje, facial, capilar, todos) =>{
    btnMaquillaje.addEventListener('click', ()=>{
        limpiarHtml(contenedormenu_productos);
        maquillaje.forEach(maquillaje=> contenedormenu_productos.appendChild(maquillaje));
    });

    btnFacial.addEventListener('click', ()=>{
        limpiarHtml(contenedormenu_productos);
        facial.forEach(facial=> contenedormenu_productos.appendChild(facial));
    });

    btnCapilar.addEventListener('click', ()=>{
        limpiarHtml(contenedormenu_productos);
        capilar.forEach(capilar=> contenedormenu_productos.appendChild(capilar));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedormenu_productos);
        todos.forEach(todo=> contenedormenu_productos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}


