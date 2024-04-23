// Se crea una simulación de un televisor con funcionalidades básicas como encender y apagar, cambiar de canal, mostrar información sobre el canal actual y mostrar la fecha y hora. 


// 1- Se realiza la declaración de variables para los elementos del DOM que se utilizara

let onOff = document.getElementById("btnOnOff");
let sizeTv = document.getElementById("sizeTv");
let infoDate = document.getElementById("dateHour");
let infoChannel = document.getElementById("channelName");
let tvStatus = false;   //Estado del televisor es false para indicar que esta apagado inicialmente.


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
