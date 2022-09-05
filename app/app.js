var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola mi nombre es " + this.nombre + ", mi apellido " + this.apellido + " y tengo " + this.edad + " años de edad.");
    };
    return Persona;
}());
var yo = new Persona("Jose", "Gil", 34);
var ella = new Persona("Leidys", "Lugo", 33);
console.log(yo);
console.log(ella);
