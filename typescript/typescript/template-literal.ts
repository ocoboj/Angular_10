(function () {

    function getEdad(){
        return 100 + 100 + 300;
    }

    const nombre = 'Olga';
    const apellido = 'Conesa';
    const edad = 39

    //Olga Conesa (Edad: 39)

    /*  const salida = nombre + " " + apellido + " (" + edad +  ") "; */
    const salida = ` ${ nombre } ${ apellido } (${getEdad()})`;

    console.log(salida);


})();


