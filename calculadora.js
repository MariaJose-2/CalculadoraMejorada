// Funcion principal que se ejecuta cuando se hace clic en el boton "calculadora"
function mostrar(){
    // obtiene los valores ingresados por el usuario desde los elementos de entrada en el HTML
    //let: es una palabra clave en JavaScript que se utiliza para declarar variables. En este caso, se utiliza para declarar las variables n1, n2, y opc en la funcion mostrar
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let opc=parseInt(document.getElementById("opc").value)

//switch: es una estructura de control de flujo en JavaScript que permite evaluar una expresion contra multiples casos aqui se utiliza para determinar que operacion realizar en funcion del valor de opc. Cada case representa una opcion diferente, y si opc coincide con uno de estos casos, se ejecutara el bloque de codigo correspondiente.
    // Utiliza una estructura switch para realizar la operacion correspondiente
    switch(opc){
        case 1:
            sumar(n1,n2) //llama la funcion
            break; //termina

        case 2:
            restar(n1,n2)
            break;

        case 3:
            multiplicar(n1,n2)
            break;

        case 4:
            dividir(n1,n2)
            break;

        case 5:
            potencia(n1,n2)
            break;

    //En un bloque switch, default se ejecuta si ninguno de los case coincide con el valor de la expresion evaluada. Eneste caso, si el valor de opc no coincide con ninguno de los casos (1 a 5), se ejecuta default y muestra una alerta con el mensaje "La opcion no es valida".
        default:
            alert("la opcion no es valida")

    }
}

// Funcion para sumar dos numeros y mostrar el resultado
    function sumar(n1,n2){
        var resultado=n1+n2;
        var res=document.getElementById("resultado")
        // muestra el resultado y ajusta el estilo del texto según ciertas condiciones
        if(n1!=0 && n2!=0){

        //Esto cambia el estilo CSS del elemento con el ID "respuesta" para hacer que se muestre como un bloque
            respuesta.style.display="block";

        //Cambia el contenido HTML del elemento referenciado por "res" para mostrar el resultado de la operacion realizada, se utiliza una plantilla de cadena para incrustar el valor de resultado en el texto.
            res.innerHTML = `total: ${resultado}`;

        //Cambian el color del texto dentro del elemento referenciado por "res" a verde o rojo, dependiendo de las condiciones en la estructura condicional. En verde se muestra cuando la operación es valida y en rojo cuando se pide al usuario que verifique sus datos
            res.style.color="green";
        
        }else{
            respuesta.style.display="block";
            res.innerHTML = `verifique sus datos`;
            res.style.color="red";
        }
    }
// Las funciones restar, multiplicar, dividir y potencia son similares a la funcion sumar, con las operaciones correspondientes.

// Funcion para restar dos numeros y mostrar el resultado
    function restar(n1,n2){
        var resultado=n1-n2;
        var res=document.getElementById("resultado")
        if(n1!=0 && n2!=0){
            respuesta.style.display="block";
            res.innerHTML = `total: ${resultado}`;
            res.style.color="green";
        
        }else{
            respuesta.style.display="block";
            res.innerHTML = `verifique sus datos`;
            res.style.color="red";
        }
    }
// Funcion para multiplicar dos numeros y mostrar el resultado
    function multiplicar(n1,n2){
        var resultado=n1*n2;
        var res=document.getElementById("resultado")
        if(n1!=0 && n2!=0){
            respuesta.style.display="block";
            res.innerHTML = `total: ${resultado}`;
            res.style.color="green";
        
        }else{
            respuesta.style.display="block";
            res.innerHTML = `verifique sus datos`;
            res.style.color="red";
        }
    }
// Funcion para dividir dos numeros y mostrar el resultado
    function dividir(n1,n2){
        var resultado=n1/n2;
        var res=document.getElementById("resultado")
        if(n1!=0 && n2!=0){
            respuesta.style.display="block";
            res.innerHTML = `total: ${resultado}`;
            res.style.color="green";
        
        }else{
            respuesta.style.display="block";
            res.innerHTML = `verifique sus datos`;
            res.style.color="red";
        }
    }
// Funcion para elevar n1 a la potencia n2 y mostrar el resultado
    function potencia(n1,n2){
        var resultado=n1**n2;
        var res=document.getElementById("resultado")
        if(n1!=0 && n2!=0){
            respuesta.style.display="block";
            res.innerHTML = `total: ${resultado}`;
            res.style.color="green";
        
        }else{
            respuesta.style.display="block";
            res.innerHTML = `verifique sus datos`;
            res.style.color="red";
        }
    }
