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

