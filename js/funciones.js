function laHoraEs () {
    var fecha = new Date();

    var horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();
        
        
    var semana = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ];

  var meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    if (dia < 10) {
      dia = "0" + dia;
    } 

    if (horas < 10) {
        horas = "0" + horas;
    }
      
    
    if (minutos < 10) {
      minutos = "0" + minutos
    }

    if (segundos < 10) {
      segundos = "0" + segundos
    }
    
    var cFecha = document.getElementById('fechaCompleta');
    cFecha.textContent = semana[diaSemana].concat(", ", dia," de ", meses[mes], " de ", year);
    
    var cHora = document.getElementById('horaCompleta');
    cHora.textContent = horas.toString().concat(":",minutos,":",segundos);
  
}

setInterval(laHoraEs,1000)