// Función principal que se ejecuta cuando se hace clic en el botón "calculadora"
function mostrar(){
    // Obtiene los valores ingresados por el usuario desde los elementos de entrada en el HTML
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let opc=parseInt(document.getElementById("opc").value)

    // Utiliza una estructura switch para realizar la operación correspondiente
    switch(opc){
        case 1:
            sumar(n1,n2) //llama la funcion
            break;

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

        default:
            alert("la opcon no es valida")

    }
}

// Función para sumar dos números y mostrar el resultado
    function sumar(n1,n2){
        var resultado=n1+n2;
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
