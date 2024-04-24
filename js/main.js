// Se crea una simulación de un televisor con funcionalidades básicas como encender y apagar, cambiar de canal, mostrar información sobre el canal actual y mostrar la fecha y hora.

// 1- Se realiza la declaración de variables para los elementos del DOM que se utilizara

let onOff = document.getElementById("btnOnOff");
let sizeTv = document.getElementById("sizeTv");
let infoDate = document.getElementById("dateHour");
let infoChannel = document.getElementById("channelName");
let tvStatus = false; //Estado del televisor es false para indicar que esta apagado inicialmente.

// Encender y apagar el televisor: Se controla el encendido y apagado de la TV, cambia la imagen de fondo del televisor para reflejar su estado y manejar la visualización de la información relacionada con la fecha y el canal dependiendo de si la TV está encendida o apagada.

onOff.addEventListener("click", () => {
  tvStatus = !tvStatus;
  console.log(tvStatus);
  infoDate.style.display = "none";

  if (tvStatus) {
    sizeTv.style.backgroundImage = 'url("../img/pantalla.jpg")';
  } else {
    sizeTv.style.backgroundImage = "none";
    hideInfoChannel();
    hideInfoDate();
  }
});

// Sección de canales:Se seleccionan todos los botones de canal y se agrega un evento de clic a cada uno.
// Al hacer clic en un canal, se muestra su nombre y se cambia la imagen del televisor al canal seleccionado.
// Se programa un temporizador para ocultar la información de fecha y el nombre del canal después de 3 segundos.
const arrayMandoInf = document.querySelectorAll(".mandoInf .chanBtn");
arrayMandoInf.forEach((channel) => {
  channel.addEventListener("click", (e) => {
    const channelName = e.target.id;
    selectedChannel = channelName;
    infoDate.style.display = "inline-block";
    infoChannel.style.display = "inline-block";

    document.getElementById("channelName").innerHTML = channelName;

    setTimeout(hideInfoDate, 3000);
    setTimeout(hideInfoChannel, 3000);

    if (tvStatus) {
      showInfo(Date);
      changeChannelImage(channelName);
    } else {
      infoDate.style.display = "none";
      infoChannel.style.display = "none";
    }
  });
});

// Función para fecha y hora:Se utiliza función showInfo() que va a encarga de mostrar la fecha y la hora actual en un elemento del DOM.
function showInfo() {
  let hour = document.getElementById("dateHour");
  setInterval(function () {
    let data = new Date();
    return (hour.innerHTML =
      data.getDate() +
      "/" +
      (data.getMonth() + 1) + // se usa +1 para obtener el número de mes en formato de 1 a 12 en lugar de 0 a 11.
      "/" +
      data.getFullYear() +
      "  " +
      data.toLocaleTimeString());
  });
}

//   Función para ocultar información

// Función para ocultar la información de fecha y hora después de 3 segundos
function hideInfoDate() {
  infoDate.style.display = "none";
}

// Función para ocultar el nombre del canal después de 3 segundos
function hideInfoChannel() {
  infoChannel.style.display = "none";
}

//Mapeo con los nombres de los canales y las Url de las imagenes
const channelImages = {
  "Noticias24": "../img/noti.gif",
  "Fox Sport": "../img/2.gif",
  "Antena3": "../img/pasa.gif",
  "Cinemax": "../img/peli.gif",
  "Atresplayer": "../img/tele5.gif",
  "LaSexta": "../img/6.gif",
  "Gol t": "../img/7.gif",
  "Divinity": "../img/8.gif",
  "Telemundo": "../img/9.gif",
  "channelInfo": "../img/pgm.png",
  "Sin Signal": "../img/0.gif",
  "netflix": "../img/netflix.gif",
  "disney": "../img/disney.gif",
  "prime": "../img/primeV.gif",
  "Pluto": "../img/movi.gif",
};


// Función para cambiar la imagen del televisor según el nombre del canal: la función se va a encarga de cambiar la imagen de fondo de la pantalla de la televisión según el nombre del canal proporcionado. Si se encuentra una imagen asociada al canal, se muestra en la pantalla; de lo contrario, se elimina cualquier imagen de fondo existente.
function changeChannelImage(channelName) {
    const imageUrl = channelImages[channelName];
    if (imageUrl) {
      sizeTv.style.backgroundImage = `url(${imageUrl})`;
    } else {
      // Si no se encuentra una imagen para el canal, se elimina la imagen de fondo
      sizeTv.style.backgroundImage = "none";
    }
  }

// Manejador de clic para los canales de redes: este código  actualiza la interfaz de usuario en consecuencia y realiza acciones adicionales dependiendo del estado de la televisión.
const arrayRedes = document.querySelectorAll(".redes .chanBtn");
arrayRedes.forEach((channel) => {
  channel.addEventListener("click", (e) => {
    const channelName = e.target.id;
    selectedChannel = channelName; // Almacena el nombre del canal seleccionado
    infoDate.style.display = "inline-block";
    infoChannel.style.display = "inline-block";

    document.getElementById("channelName").innerHTML = channelName; // Muestra el nombre del canal
    setTimeout(hideInfoDate, 3000);
    setTimeout(hideInfoChannel, 3000);

    if (tvStatus) {
      showInfo(Date);
      changeChannelImage(channelName); // Cambia la imagen del televisor al canal seleccionado
    } else {
      infoDate.style.display = "none";
      infoChannel.style.display = "none";
    }
  });
});

// Cambio de canal con los botones + -

// Función para cambiar el canal de televisión
let canalActual = 0;
const cambioCanales = (button) => {
  const screen = document.getElementById("sizeTv");
  // Verificar si el televisor está encendido
  if (!tvStatus) {
    return; // 
  }

  if (button === "btnVolDown") {
    canalActual = (canalActual + 1) % 10; // Incrementar el canal actual y asegurarse de que no exceda el límite
  } else if (button === "btnChDown") {
    canalActual = (canalActual - 1 + 10) % 10; // Decrementar el canal actual y asegurarse de que no sea negativo
  }

  const channelName = Object.keys(channelImages)[canalActual];
  infoChannel.innerText = channelName;
  changeChannelImage(channelName);
};

// cambio de canal hacia arriba
btnVolDown.addEventListener("click", () => cambioCanales("btnVolDown"));

//  cambio de canal hacia abajo
btnChDown.addEventListener("click", () => cambioCanales("btnChDown"));
