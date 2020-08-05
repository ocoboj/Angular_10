(() => {

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`)
    }

    const regresarAlCuartel = (xmen: Xmen) => {
        console.log(`Enviando ${xmen.nombre} al cuartel`)
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine)
})();


