let formw = document.getElementById('form-wrapper');
let newInput;
let enlaces = [
  {
    enlaceUrl: 'https://youtu.be/n1a1Y',
    imagenUrl: 'https://phantom-marca-mx.unidadeditorial.es/844170f88e5e5d27ed3a2348a7ea513d/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/07/19/16897227137275.jpg'
  }
]; // Array para almacenar los enlaces de las películas

function cargarEnlaces() {
  const listElementMovie = document.getElementById("listaPeliculas");
  enlaces.forEach((enlaceInfo) => {
    let imagen = document.createElement('img');
    imagen.classList.add('img-movie');
    imagen.src = enlaceInfo.imagenUrl;
    let enlace = document.createElement('div'); // Usaremos un div para contener la imagen y el botón
    enlace.className = 'enlaceDiv'
    enlace.appendChild(imagen);

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
    

    // Agregar un manejador de eventos para eliminar la película
    deleteBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar redirección
      // Encontrar el índice del objeto en el array
      const index = enlaces.indexOf(enlaceInfo);
      if (index !== -1) {
        listElementMovie.removeChild(enlace);
        enlaces.splice(index, 1); // Eliminar el objeto del array
      }
    });
    console.log(enlace)
    enlace.appendChild(deleteBtn);
    listElementMovie.appendChild(enlace);
  });
  
}

function agregarPelicula() {
  const favoriteMovie = document.getElementById('pelicula').value;
  const listElementMovie = document.getElementById("listaPeliculas");

  if (favoriteMovie.trim() === "" || newInput.value === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (/(\.jpg|\.jpeg|\.png)$/i.test(favoriteMovie)) {
    let imagen = document.createElement('img');
    imagen.classList.add('img-movie');
    imagen.src = favoriteMovie;

    let enlace = document.createElement('div'); // Usaremos un div para contener la imagen y el botón
    enlace.className = 'enlaceDiv'
    enlace.appendChild(imagen);

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')

    // Crear un objeto para almacenar las URLs
    let enlaceInfo = {
      imagenUrl: favoriteMovie,
      enlaceUrl: newInput.value,
    };

    // Agregar un manejador de eventos para eliminar la película
    deleteBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar redirección
      // Encontrar el índice del objeto en el array
      const index = enlaces.indexOf(enlaceInfo);
      if (index !== -1) {
        listElementMovie.removeChild(enlace);
        enlaces.splice(index, 1); // Eliminar el objeto del array
      }
    });

    enlace.appendChild(deleteBtn);
    listElementMovie.appendChild(enlace);
    enlaces.push(enlaceInfo); // Agregar el objeto al array

    document.getElementById('pelicula').value = "";
    newInput.value = ""; // Limpia el campo de entrada de la URL
  } else {
    alert("Formato de imagen no válido, utiliza .jpg o .png.");
  }
}

function newElements() {
  newInput = document.createElement('input');
  newInput.classList.add('miurl');
  newInput.type = 'text';
  newInput.id = 'miurl';
  newInput.placeholder = "Añadir URL de la Película";
  formw.appendChild(newInput);

  let newButton = document.createElement('button');
  newButton.innerHTML = 'Añadir Película';
  formw.appendChild(newButton);


  newInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
      agregarPelicula();
    }
  });  
  newButton.addEventListener('click', agregarPelicula);

  cargarEnlaces(); // Cargar enlaces al abrir la página
}

newElements();
