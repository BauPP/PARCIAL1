// Función para cambiar el contenido del div
function cambiarContenido() {
    var contenido = document.getElementById("contenido");
    contenido.innerHTML = "<p>¡Contenido cambiado!</p>";
  }
  
// Función para cambiar el color de la página
function cambiarColorPagina() {
    var body = document.body;
    // Obtiene un color aleatorio
    var nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Establece el color de fondo y el color del texto
    body.style.backgroundColor = nuevoColor;
    // Establece el color del texto dependiendo de si el color de fondo es claro u oscuro
    body.style.color = esColorClaro(nuevoColor) ? '#333' : '#fff';
  }
  
  // Función para verificar si un color es claro u oscuro
  function esColorClaro(color) {
    // Convierte el color a un valor RGB
    var rgb = hexArgb(color);
    // Calcula la luminosidad del color
    var luminosidad = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    // Retorna verdadero si la luminosidad es mayor a 0.5 (es claro), de lo contrario retorna falso (es oscuro)
    return luminosidad > 0.5;
  }
  
  // Función para convertir un color hexadecimal a un arreglo RGB
  function hexArgb(hex) {
    // Remueve el símbolo '#' del inicio del color
    hex = hex.replace(/^#/, '');
    // Convierte el color a valores RGB y los retorna como un arreglo
    return [
      parseInt(hex.substring(0, 2), 16),
      parseInt(hex.substring(2, 4), 16),
      parseInt(hex.substring(4, 6), 16)
    ];
  }
  
  
  // Agregamos eventos de clic a los botones
  document.getElementById("cambiarContenidoBtn").addEventListener("click", cambiarContenido);
  document.getElementById("cambiarColorBtn").addEventListener("click", cambiarColorPagina);
  

