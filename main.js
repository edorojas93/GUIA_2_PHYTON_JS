addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let nota1 = document.querySelector("#nota1").value;
        let nota2 = document.querySelector("#nota2").value;
        let nota3 = document.querySelector("#nota3").value;
        let nota4 = document.querySelector("#nota4").value;
        let nota5 = document.querySelector("#nota5").value;
        let promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5)) / 5;
        document.querySelector("#resultado").innerHTML = `Nota promedio: ${promedio}`;
    })
})

function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
    document.querySelector("#subtotal").innerHTML="";
    document.querySelector("#iva").innerHTML="";
}

addEventListener('reset', limpiar);



            

    