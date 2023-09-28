const formulario = document.querySelector("#registro");

formulario.addEventListener("submit", (event) => {
    const nombre = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const edad = event.target.edad.value;
    event.preventDefault();
    console.log(nombre, apellido, edad);
    const parrafo = document.querySelector("#parrafoHTML");
    parrafo.innerHTML = `El nombre de la persona es ${nombre}, su apellido es ${apellido} y su edad es ${edad} años.`;
 });


 
