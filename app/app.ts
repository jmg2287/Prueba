class Persona {
    nombre: string;
    apellido: string;
    edad: number;

    constructor (nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    public saludar(): any {
        console.log("Hola mi nombre es " + this.nombre + ", mi apellido " + this.apellido + " y tengo " + this.edad + " años de edad.")
    }
}

var yo = new Persona("Jose", "Gil", 34); 
var ella = new Persona("Leidys", "Lugo", 33);

console.log(yo);
console.log(ella);

