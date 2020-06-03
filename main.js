class Miembro {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    getInfo(){
        return `Hola, mi nombre es ${this.nombre} tengo ${this.edad}`
    }

}

const Magdaleno = new Miembro ("Magdaleno", 26, "hombre");
console.log(Magdaleno.getInfo());

class Alumno extends Miembro {
    constructor(nombre, edad, genero, tech) {
            super (nombre, edad, genero);
            this.tech = tech;
    }

    getAlumnoInfo(){
        return `Hola, mi nombre es ${this.nombre} tengo ${this.edad} y soy ${this.tech}`
    }

}

const Adrivette = new Alumno ("Adriana", 27, "mujer", "alumna de Tech 101");
console.log(Adrivette.getAlumnoInfo());

class Sensei extends Alumno {
    constructor(nombre, edad, genero, tech, materia) {
        super (nombre, edad, genero, tech);
        this.materia = materia;
    }
    getSenseiInfo(){
        return `Hola, mi nombre es ${this.nombre} soy ${this.tech} y enseño ${this.materia}`
    }

}

const Mora = new Sensei ("Mora", 29, "hombre", "maestro de Tech 101", "FrontEnd");
console.log(Mora.getSenseiInfo());