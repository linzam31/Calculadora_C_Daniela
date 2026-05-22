//Crear las propiedades del objeto

let p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones")
}

//Crear los métodos del objeto

let m = {

    inicio: function () {

        for(let i = 0; i < p.teclas.length; i++){

            p.teclas[i].addEventListener("click", m.oprimirtecla);

        }

        document.addEventListener("keydown", m.oprimirteclateclado);

    },

    oprimirtecla: function(tecla){

        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;

        m.calculadora(p.accion);

    },

    oprimirteclateclado: function(evento){

        let tecla = evento.key;

        if(!isNaN(tecla) && tecla !== ' '){

            p.accion = "numero";
            p.digito = tecla;

            m.calculadora(p.accion);

        }

        else if(['+', '-', '*', '/', '^'].includes(tecla)){

            p.accion = "simbolo";
            p.digito = tecla;

            m.calculadora(p.accion);

        }

        else if(tecla == '.'){

            p.accion = "decimal";
            p.digito = ".";

            m.calculadora(p.accion);

        }

        else if(tecla == 'Enter' || tecla == '='){

            evento.preventDefault();

            p.accion = "igual";

            m.calculadora(p.accion);

        }

        else if(tecla == 'Backspace' || tecla == 'Escape'){

            m.borrarcalculadora();

        }

    },

    calculadora: function(accion){

        switch(accion){

            case "numero":

                if(p.operaciones.innerHTML == 0){

                    p.operaciones.innerHTML = p.digito;

                }else{

                    p.operaciones.innerHTML += p.digito;

                }

            break;

            case "simbolo":

                // RAIZ
                if(p.digito == "√"){

                    let numero =
                    parseFloat(p.operaciones.innerHTML);

                    p.operaciones.innerHTML =
                    Math.sqrt(numero);

                    break;

                }

                // SENO
                if(p.digito == "sin"){

                    let numero =
                    parseFloat(p.operaciones.innerHTML);

                    p.operaciones.innerHTML =
                    Math.sin(numero * Math.PI / 180);

                    break;

                }

                // COSENO
                if(p.digito == "cos"){

                    let numero =
                    parseFloat(p.operaciones.innerHTML);

                    p.operaciones.innerHTML =
                    Math.cos(numero * Math.PI / 180);

                    break;

                }

                // OPERADORES
                let ultimoCaracter =
                p.operaciones.innerHTML.slice(-1);

                let operadores =
                ['+', '-', '*', '/', '^'];

                if(operadores.includes(ultimoCaracter)){

                    p.operaciones.innerHTML =
                    p.operaciones.innerHTML.slice(0, -1)
                    + p.digito;

                }else{

                    p.operaciones.innerHTML += p.digito;

                }

            break;

            case "decimal":

                p.operaciones.innerHTML += p.digito;

            break;

            case "igual":

                try{

                    let operacion =
                    p.operaciones.innerHTML
                    .replace("^", "**");

                    p.operaciones.innerHTML =
                    eval(operacion);

                }catch(error){

                    p.operaciones.innerHTML = "Error";

                }

            break;

        }

    },

    borrarcalculadora: function(){

        p.operaciones.innerHTML = 0;

    }

}

m.inicio();