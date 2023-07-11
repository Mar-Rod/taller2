function enlazar(){
    var endpoint= document.getElementById("enpoint") .value;
    fetch(endpoint)
    .then(function(respuesta){
        return respuesta.json();
    })

    .then(function(datos){
        console.log(datos);
        var nombre=[];
        var habilidad=[];
        var fuerza=[];
        for(var i = 0; i < datos.length; i++){
            if((datos[i].category!= undefined) && (datos[i]name!=undefined)){
                nombre.push(datos[i].name);
                habilidad.push(datos[i].hability);
                fuerza.push(datos[i].fuerza);

    }
        }
        alert(name);
    )}
    }
