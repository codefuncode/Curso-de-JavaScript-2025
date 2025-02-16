window.onload = (event) => {
    console.log("page is fully loaded");
    // --------------------------------------------------------------------
    //  Estas instrucciones seleccionan los elementos que vamos a usar. 
    // Seleccionamos  los elemento y los guardamos en variables 
    // Mas adelante te explicare el ámbito de variables 
    // let 
    // const 
    // var 
    let print = document.querySelector(".print");
    let nueva_ventana = document.querySelector(".nueva_ventana");
    let alerta = document.querySelector(".alerta");
    let escribe_documento = document.querySelector(".escribe_documento");
    let btngetdatainput = document.querySelector(".btngetdatainput");
    // --------------------------------------------------------------------

    // Seleccionamos el botón  "print"
    //  se agrega un evento clic al botón 
    print.addEventListener("click", function(argument) {

        window.print();
    });

    nueva_ventana.addEventListener("click", function(argument) {
        fun_nueva_ventana();
    });

    alerta.addEventListener("click", function(argument) {
        //  Esta es una alerta 
        window.alert("Esto es una alerta");
    });

    escribe_documento.addEventListener("click", function(argument) {
        // lo que acabo de hacer es un domcuement write 
        alert("En desuso");
        // document.write("Escribiendo  en el documento");
    });
    btngetdatainput.addEventListener("click", function(argument) {
        // lo que acabo de hacer es un domcuement write 
        const getdatainput = window.prompt("Escribe un número", "valor Predeterminado");

        let salidaTxt = document.querySelector(".prompt_salida");
        console.log(salidaTxt);
        salidaTxt.textContent = getdatainput;
        console.log(getdatainput);
    });

    // console.log(5 + 6);
    // window.print()

    function fun_nueva_ventana() {
        //  Esta funciona se llama mediante el botón nueva ventana 

        let myWindow = window.open("", "MsgWindow", "width=100,height=100");
        // myWindow.document.write("<p> Escribimos un parafo dentro de una ventana nueva </p>");

        console.log("hola");

        console.log(myWindow);
        let btninput = document.createElement("input");
        let btnbutton = document.createElement("button");
        let atttype = document.createAttribute("type");

        atttype.value = "button";
        btninput.setAttributeNode(atttype);
        btninput.value = "input creado";
        btnbutton.innerHTML = "Boton creado";

        myWindow.document.body.appendChild(btnbutton);
        myWindow.document.body.appendChild(btninput);

        btnbutton.addEventListener("click", function(argument) {
            console.log('click en el botón');
        });

    }
}