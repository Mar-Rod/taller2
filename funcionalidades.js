
function enlazar() {
    var endpoint = document.getElementById("endpoint").value;
    fetch(endpoint)
    //promesa
        .then(function(respuesta) {
            return respuesta.json();
        })
        //recibiendo datos JSON
        .then(function(datos) {
            console.log(datos);
            var height=[];
            var weight=[];
            var base_experience=[];
            for (var i = 0; i < datos.length; i++) {
            if((datos[i].altura) && (datos[i].peso)(datos[i].experiencia)){
                    altura.push(datos[i].altura);
                    peso.push(datos[i].peso);
                    experiencia.push(datos[i].base_experience);
                    
    
            }
            }
            
            console.log(datos.height);
            console.log(datos.weight);
            console.log(datos.base_experience);
        });
}


