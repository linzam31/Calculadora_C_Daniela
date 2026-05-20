//Crear las propiedades del objeto

let p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantisignos: 0,
    cantdecimal: false,
    resultado: false
}

//Crear los métodos del objeto

let m = {
    inicio : function(){
        for(let i = 0; i < p.teclas.length; i++){
            p.teclas[i].addEventListener("click", m.oprimirtecla);
        }
       
    },

    oprimirtecla : function(tecla){
        p.accion = tecla.target.getAttribute("class");
        m.calculadora(p.accion);

    },

    calculadora : function(accion){

        switch(accion)
        {

            case "numero":
                console.log("numero");
                break;

                case "simbolo":
                console.log("simbolo");
                break;

                case "decimal":
                console.log("decimal");
                break;

                case "igual":
                console.log("igual");
                break;
        
        }

}

}

m.inicio();