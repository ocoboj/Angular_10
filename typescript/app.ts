(() => {

    const sumar = (a: number, b:number): number => a + b;

    const nombre = (): string => 'Hola Olga';

    const obtenerSalario = (): Promise<string> => {

        return new Promise(( resolve, reject) => {
            resolve('Olga');
        })
    }

    obtenerSalario().then( a => console.log (a.toUpperCase()))

})();


