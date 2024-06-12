class Animal {

    constructor(nombre,edad,color){
        this.name = nombre;
        this.age = edad;
        this.color = color;
        this.data = `Soy un ${this.name}, de ${this.age} años y de color ${this.color}`;
    }

    saludar(){
        document.write(this.data + "<br>");
    }

}

class Pajaro extends Animal{
    constructor(nombre,edad,color,tamaño){
        super(nombre,edad,color);
        this.size = tamaño;
    }

    vuelaAlto(){
        if(this.size <= 7){
            return true;
        }else{
            return false;
        }
    }

    sobreviveCatastrofe(){
        if(this.vuelaAlto()){
            alert(`Sobrevivo porque mi peso de ${this.size} kg me lo permite`);
        } else {
            alert(`No sobrevivo porque mi peso de ${this.size} kg no me lo permite`);
        }
    }
}

class Perro extends Animal{
    constructor(nombre,edad,color,accion){
        super(nombre,edad,color);
        this.property = accion;
        this.quality = null;
    }

    static ladrar(){
        document.write("GUAU");
    }

    set setNombre(newName){
        this.name = newName;
    }

    set setEdad(newEdad){
        this.age = newEdad;
    }

    set setColor(newColor){
        this.color = newColor;
    }

    set setCalidadDeVida(value){
        this.quality = this.name.length * value;
    }

    get getCalidadDeVida(){
        return this.quality;
    }

    saludar(){
        document.write(this.data + `, además puedo ${this.property}`+ "<br>");
    }
}

const perro = new Perro();
const pajaro = new Pajaro("Pajaro",2,"verde",1);

alert("Creamos un perro!");
perro.setNombre = prompt("¿Nombre del perro?");
perro.setEdad = prompt("¿Edad?");
perro.setColor = prompt("¿Color?");

perro.setCalidadDeVida = 10;
document.write(`Mi perro se llama ${perro.name}, tiene ${perro.age} años y es de color ${perro.color}<br>`);
document.write(`La calidad de vida de ${perro.name} es de ` + perro.getCalidadDeVida + "<br>");

pajaro.saludar();