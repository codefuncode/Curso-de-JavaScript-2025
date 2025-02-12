function ejempplo1(argument) {

    let btn = document.getElementById('btn1');

    btn.onclick = function() {

        let parr = document.getElementById('parr1');
        parr.innerHTML = "Párrafo modificado 1";
        console.log('ejempplo1');

    };

}
// Ejemplo 1

function ejempplo2(argument) {

    let btn = document.getElementById('btn2');

    btn.addEventListener("click", miFuncion);

}
// Ejemplo 2

function miFuncion(argument) {

    let parr = document.getElementById('parr2');
    parr.innerHTML = "Párrafo modificado 2";
    console.log('ejempplo2');
}

ejempplo1(); // llamada a ala función
ejempplo2();
ejempplo3();