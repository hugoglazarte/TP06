// El array de peliculas tendra que ser privado del modulo *
// El modulo tendra que poder agregar una pelicula (ID y titulo) *
// Validar que la pelicula ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error *
// El modulo tendra que eliminar una pelicula por ID*
// El modulo tendra que ordernar su array de pelicuas en base a una propiedad enviada por paramentro y mostrarlo en consola
// * El modulo tendra que persistir el array de peliculas en session o local storage para que luego se pueda recuperar y seguir agregando o eliminando

function Pelicula(id, titulo) {

    this.id = id;
    this.titulo = titulo;

}

var Videoteca = (function () {

	var peliculas = [];
	var claveLocalStorage = 'peliculas';

	var cargarPeliculas = function () {

		var datos = localStorage.getItem(claveLocalStorage);

        if (datos !== null && datos !== '') {

            peliculas = JSON.parse(datos);

        }

	}

	var guardarPeliculas = function () {

		var datos = JSON.stringify(peliculas);

        localStorage.setItem(claveLocalStorage, datos);

	}

	// Validando el ID de la pelicula

    var existePelicula = function (pelicula) {

        var posicion = -1; 
        
        for(i = 0; i < peliculas.length && posicion === -1; i++) { 

            if (peliculas[i].id === pelicula.id) { 
                
                posicion = i; 

            }

        }

        return posicion;

    }

    var agregarPelicula = function (pelicula) {

        var dato = existePelicula(pelicula);

        if (dato === -1) {

            peliculas.push(pelicula);

            guardarPeliculas();


        }  else {

            alert('La Pelicula con id: ' + pelicula.id + ' ya existe');

        }

    }


    var eliminarPelicula = function (pelicula) {

        var posicion = existePelicula(pelicula);

        if (posicion > -1) {

            peliculas.splice(posicion, 1);

            guardarPeliculas();

        } else {

            alert('La Pelicula con id: ' + pelicula.id + ' no existe');

        }

    }

    var ordenarPeliculas = function() {

    	var ordenarPor = prompt('Ordenando la Videoteca, ingrese 0 para ordenar por ID - 1 para ordenar por Titulo');
    	ordenarPor = parseInt(ordenarPor);

    	if(ordenarPor === 0) {

    		peliculas.sort(function (a, b) {


			if (a.id > b.id) {

		    	return 1;
		 
		  	}

		  	if (a.id < b.id) {

		    	return -1;

		  	}

		  		return 0;
				
			});

			console.log(peliculas);

    	}else if(ordenarPor === 1) {

    		peliculas.sort(function (a, b) {


			if (a.titulo > b.titulo) {

		    	return 1;
		 
		  	}

		  	if (a.titulo < b.titulo) {

		    	return -1;

		  	}

		  		return 0;
				
			});
			console.log(peliculas);

    	} else{
    		console.log('El orden que elegiste no esta disponible');
    	}


    }

    cargarPeliculas();

    return {

    	agregarPelicula: agregarPelicula,
    	eliminarPelicula: eliminarPelicula,
    	ordenarPeliculas: ordenarPeliculas

    };


})()

var matrix = new Pelicula(02,'Matrix');
var memento = new Pelicula(04,'Memento');
var avatar = new Pelicula(03,'Avatar');



