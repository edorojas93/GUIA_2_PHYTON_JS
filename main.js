addEventListener("DOMContentLoaded", (e) => {

    //Ciclo de WHILE//
    let amarilla = 0
    let rosa = 0
    let roja = 0
    let verde = 0
    let azul = 0
    let cont = 1;

    while (cont <= cant) {
        let nPlaca = prompt('vehiculo #' + cont + ' \n ingrese el ultimo dijito de su placa: ')

        if (nPlaca == 1 || nPlaca == 2) {
            amarilla++;
        }
        else if (nPlaca == 3 || nPlaca == 4) {
            rosa++;
 else if (nPlaca == 5 || nPlaca == 6) {
                roja++;

else if (nPlaca == 8 || nPlaca == 9) {
                    verde++;
                }
                else {
                    azul++;
                }
                cont++;

                alert('# de placas color amarillo: ' + amarilla + '\n# de placas color rosa: ' + rosa + '\n# de placas color rojo: ' + roja + '\n# de placas color averde: ' + verde + '\n# de placas color azul: ' + azul);
            }  

    