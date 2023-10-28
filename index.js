let formw = document.getElementById('form-wrapper')
let  newInput;
let deleteBtn;


function agregarPelicula() {
    const favoriteMovie = document.getElementById('pelicula').value;
    const listElementMovie = document.getElementById("listaPeliculas");
    

    if (
        favoriteMovie.trim() === "" ||
        newInput === ""
    ) {
        alert("Please fill out the Fields");
    }

    //***************************************** */
    if (/(\.jpg|\.jpeg|\.png)$/i.test(favoriteMovie)) {
        // Crear una imagen
        let imagen = document.createElement('img')
        imagen.classList.add('img-movie')
        imagen.src= `${favoriteMovie}`

        //crear Enlace
        let enlace = document.createElement('a')
        enlace.href = newInput.value
        enlace.appendChild(imagen)

        // Agregar el enlace a la lista de películas
        listElementMovie.appendChild(enlace);

        //Limpiando input
        document.getElementById('pelicula').value = "";
        document.getElementById('miurl').value = "";
        
        console.log(listElementMovie)

        //funcion para eliminar boton
        function deletMovie() {
            //creando boton eliminar
            deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = 'Delete Movie';
            deleteBtn.className = "btn-delete";
            enlace.appendChild(deleteBtn)

            deleteBtn.addEventListener('click', function() {
            // Eliminar el enlace completo cuando se hace clic en el botón
            imagen.remove();
            })
        }
        
    } else {
        alert("Invalid image format, please use .jpg or .png");
    }
    
    deletMovie()
}



function newElements() {
    //creando nuevo input-url
    newInput = document.createElement('input');
    newInput.classList.add('miurl')
    newInput.type = 'text';
    newInput.id = 'miurl'
    newInput.placeholder = "Add Movie URL"
    formw.appendChild(newInput); // Agregar el input al body


    //crear boton
    let newButton = document.createElement('button');
    newButton.innerHTML = 'Add Movie';
    formw.appendChild(newButton); // Agregar el botón al body


    // Agregar evento click al nuevo botón
    newButton.addEventListener('click', agregarPelicula);
}
//llamando nuevo elemento
newElements();

