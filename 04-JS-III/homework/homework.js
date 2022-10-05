// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
 var array = array;
 return array[0]; 
}
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array = array;
  return array[(array.length)-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array = array;
  for(var i=0;i<array.length;i++){
    array[i]= array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var array = array;
  var elemento = elemento;
  array[array.length]=elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var array = array;
  var elemento = elemento;
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabras = palabras;
  var conca = "";
  for(var i=0;i<palabras.length;i++){
    if (palabras.length==i+1) {
      conca = conca + palabras[i];
    } else {
      conca = conca + palabras[i]+' ';
    }
  }
  return conca;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var array = array;
  for(var i=0;i<array.length ;i++){
    if(elemento ===  array[i]){
      return true;
    }
  }
    return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numeros = numeros ;
  var numero = 0;
  for(var i=0;i<numeros.length;i++){
    numero = numero + numeros[i];
  }
  return numero;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultadosTest = resultadosTest ;
  var numero = 0;
  for(var i=0;i<resultadosTest.length;i++){
    numero = numero + resultadosTest[i];
  }
  return numero/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeros=numeros;
  var mayor=0;
  for(var i=0;i<numeros.length;i++){
    if(!(mayor>numeros[i])){
        mayor = numeros[i];
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multi=1;
  if (arguments.length==0) {
    return 0;
  } else {
    if (arguments.length==1) {
      return arguments[0]
    } else {
      for(var i=0;i<arguments.length;i++){
        multi = multi * arguments[i];
      }
      return multi;
    }
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var arreglo = arreglo;
  var cont=0;
  for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i]>18){
      cont +=1;
    }
    
  }
  return cont;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  var semana=[[1,'Domingo','Es fin de semana'],[2,'Lunes','Es dia Laboral'],[3,'Martes','Es dia Laboral'],[4,'Miercoles','Es dia Laboral'],[5,'Jueves','Es dia Laboral'],[6,'Viernes','Es dia Laboral'],[7,'Sabado','Es fin de semana']]
  var dia =semana[numeroDeDia-1]
  return dia[2]
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var n =String(n);
  var prin = n[0];
  if(prin=="9"){
    return true;
  }
  else{
    return false;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var arreglo = arreglo;
  var temp=arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if(!(arreglo[i]==temp)){
      return false;
    }
  }
  return true;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array = array;
  var meses = [];
  for(var i =0;i<array.length;i++){
    if(array[i]=='Enero' || array[i]=='Marzo' || array[i]=='Noviembre'){
      meses.push(array[i]);
    }
  } 
  if(meses.length==3){
    return meses;
  }
  else{
    return('No se encontraron los meses pedidos');
  }
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array = array;
  var mayoCien=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100) {
      mayoCien.push(array[i])
    }
  }
  return mayoCien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var numero = numero;
  var val=[];
  for (let i = 0; i < 10; i++) {
    numero +=2;
    if(numero ==i){
      return('Se interrumpió la ejecución');
    }
    else{
      val.push(numero);
    }
    
  }
  return val;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var numero = numero;
  var val=[];
  for (let i = 0; i < 10; i++) {
    
    if(!(5 ==i)){
      numero +=2;
      val.push(numero);
    }
    else{
      continue;
    }
    
  }
  return val;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
