/*Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares
en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y,
si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo. */

function sumarPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.lenght; i++) {
    if (numeros[i] % 2 == 0) {
      suma += numeros[i];
    }
  }
  return suma;
}

/*En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido 
que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado*/

function procesarPedido(pedidos) {
  let cliente = pedidos.shift();
  pedidos.unshift("bebida");
  pedidos.push(cliente);
  return pedidos;
}


/*Crear una función que reciba un array de palabras y devuelva true si todas las palabras 
terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".
Usa el método endsWith() de string para resolverlo.*/

function acabanEnA(words) {
  for (let i = 0; i < words.length; i++) {
    if (!words[i].endsWith("a")) {
      return false;
    }
  }
  return true;
}
  

//Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto.
//Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.
//Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].
//Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.

function sortAbsoluteNumbers(numbers) {
  return numbers.sort((a, b) => Math.abs(a) - Math.abs(b));
}

/*Recibes dos parámetros: una lista de palabras words y una palabra word. 
Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número) y 
devuelve todas las palabras de words que sean más largas (length) que el número del índice.
Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar 
si existe o no.*/

function buscaPalabras(words, word) {
  let index = words.indexOf(word);  
  return words.filter(w => w.length > index);
}

/*Recibimos una matriz de cadenas de texto.
Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y 
devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.*/

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]
/*Si no encuentra la palabra debe devolver [-1, -1]. Usa el siguiente código como punto de partida:*/
function findJavaScript(matrix) {
  for (let i = 0; i < matrix.length; i++) { 
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'JavaScript') {
        return [i, j];
        }
    }
  }
  return [-1, -1];
}

/* En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. 
No hay dos libros con el mismo número de páginas.
Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array 
de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.*/

  function minAndMaxWord(words){
    let minIndex = 0;
    let maxIndex = 0;
    let minPages = words[0];
    let maxPages = words[0];
    for (let i = 0; i < words.length; i++) {
      if (words[i]> words[maxIndex]) {
        maxIndex = i;
        maxPages = words[i]
      }
      else{
        if (words[i]< words[minIndex]){
          minIndex = i;
          minPages = words[i]
        }
      }
    }
  return [minIndex, maxIndex]
  }


function createObject(name, subs) {
  let lnxs = name.length * subs;
  const objeto = {
    name: name,
    subscribers: subs,
    hash: lnxs,
    getStatus: function () {
      let oracion = `El canal de ${name} tiene ${subs} suscriptores`;
      return oracion;
    },
  };
  return objeto
}

/*Tienes una función que recibe un objeto como parámetro. 
La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] 
ya que son las dos propiedades que tienen valores booleanos.*/

function getKeysOfBooleanValues(obj) {
  let keys = Object.keys(obj);
  let booleanKeys = keys.filter(key => typeof obj[key] === 'boolean');
  return booleanKeys;
}

/*Somos un equipo de submarinistas.  Estamos explorando el fondo marino pero no sabemos qué nos vamos a encontrar porque vamos 
casi a ciegas.Vamos con un pequeño robot y funciona con un programa que recibe tres parámetros:

Un objeto con la información del fondo marino
Una cadena de texto con el nombre del lugar que queremos explorar
Una cadena de texto con el nombre del objeto que queremos encontrar
Por ejemplo. Con el objeto ocean que nos llega como primer parámetro, podemos explorar el lugar deep y
buscar el objeto treasure. 
Así que intentaríamos acceder a ocean.deep.treasure.

Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false.
Sólo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.

Vamos a necesitar asegurarnos que el robot no se rompa, que cuesta mucho dinero, en el caso que no pueda encontrar el lugar o 
el objeto que le hemos pedido. Así que vamos a usar el operador de encadenamiento opcional para evitar errores.

Pista: ¡Recuerda que en una clase anterior hemos visto cómo podemos acceder a una propiedad de un objeto usando una variable! 
Por ejemplo, si tenemos un objeto person y una variable key con el valor name, podemos acceder a la propiedad name 
del objeto person usando person[key] y sería como hacer person.name.*/

function searchInOcean(ocean, section, item) {
  return ocean?.[section]?.[item] !== undefined;
}