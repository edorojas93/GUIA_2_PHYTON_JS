addEventListener("DOMContentLoaded", (e) => {
    let opcion = document.querySelector("#opcion");
    opcion.addEventListener("change", (e) => {
        let seleccion = opcion.value;
        let calcular = document.querySelector("#guia2");
        calcular.addEventListener("submit", (e) =>{
            e.preventDefault();
            let cantidad = document.querySelector("#cantidad").value;
            const precio = 2000;
            let total;
            if(seleccion == "TipoA"){
                total = ((precio * cantidad) - ((precio * cantidad) * 0.3));
            } else  if(seleccion == "TipoB"){
                total = ((precio * cantidad) - ((precio * cantidad) * 0.2));
            } else if(seleccion == "TipoC"){
                total = ((precio * cantidad) - ((precio * cantidad) * 0.1));
            } else {
                document.querySelector("#resultado").innerHTML = "Seleccione un tipo de membresia";
            }
            document.querySelector("#resultado").innerHTML = `Total a pagar: $${total} pesos`;
        })
    })
})

function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
    document.querySelector("#subtotal").innerHTML="";
    document.querySelector("#iva").innerHTML="";
}

addEventListener('reset', limpiar);


            

    