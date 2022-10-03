addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero1 = document.querySelector("#numero1").value;
        let numero2 = document.querySelector("#numero2").value;
        if (numero1 > numero2){
            let resultado = numero1 - numero2;
            document.querySelector("#resultado").innerHTML = `Resultado de la resta: ${resultado}`;
        } else {
            document.querySelector("#resultado").innerHTML = "La operación no se puede realizar";
        }
    })
})

function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
    document.querySelector("#subtotal").innerHTML="";
    document.querySelector("#iva").innerHTML="";
}

addEventListener('reset', limpiar);


            

    