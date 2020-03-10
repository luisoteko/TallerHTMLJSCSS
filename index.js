const calcular = () => {
  let numeros = document.getElementsByClassName("numero");
  let suma = 0;
  let mayor;
  let menor;
  console.log(numeros.length)

  for(i=0;i<numeros.length;i++){
    let numero = parseInt(numeros[i].value);

    suma += numero;
    mayor = mayor==null?numero:(mayor<numero?numero:mayor);
    menor = menor==null?numero:(menor>numero?numero:menor);
  }
  document.getElementById("Promedio").innerText = suma / numeros.length;
  document.getElementById("Mayor").innerText = mayor;
  document.getElementById("Menor").innerText = menor;

}

const contarPalabras = () => {
  document.getElementById("Palabras").innerText = document.getElementById("textoPalabras").value.trim().split(" ").length;
}

const contarVocales = () => {
  let texto = document.getElementById("textoVocales").value;
  let a=0;
  let e=0;
  let i=0;
  let o=0;
  let u=0;
  console.log(texto)
  
  for(j=0;j<texto.length;j++){
    char = texto.charAt(j);
    char == 'a' ? a++:(
      char == 'e' ? e++:(
        char == 'i' ? i++:(
          char == 'o' ? o++:(
            char == 'u' ? u++:null))));
  }

  document.getElementById("a").innerText = a;
  document.getElementById("e").innerText = e;
  document.getElementById("i").innerText = i;
  document.getElementById("o").innerText = o;
  document.getElementById("u").innerText = u;
}


let botones = document.getElementsByClassName("botonCalculadora");
let inputCalculadora = document.getElementById("textoCalculadora");

const calcularCalculadora = () => {
  if(inputCalculadora.value.includes("+")){
    valores = inputCalculadora.value.split('+');
    inputCalculadora.value = parseInt(valores[0]) + parseInt(valores[1]);
  } else if( inputCalculadora.value.includes("-")){
    valores = inputCalculadora.value.split('-');
    inputCalculadora.value = parseInt(valores[0]) - parseInt(valores[1]);
  } else if( inputCalculadora.value.includes("x")){
    valores = inputCalculadora.value.split('x');
    inputCalculadora.value = parseInt(valores[0]) * parseInt(valores[1]);
  } else if( inputCalculadora.value.includes("/")){
    valores = inputCalculadora.value.split('/');
    inputCalculadora.value = parseInt(valores[0]) / parseInt(valores[1]);
  }
}

const validarEntradaCalculadora = e => {
  let valor = e.target.innerHTML;
  if(valor == 'c') inputCalculadora.value = ''
  else if(valor == '=') calcularCalculadora()
  else if(valor == 'x'||valor == '/'||valor == '+'||valor == '-') {
    if(inputCalculadora.value.includes('+')){
      inputCalculadora.value = inputCalculadora.value.replace('+', valor);
    } else if(inputCalculadora.value.includes('-')){
      inputCalculadora.value = inputCalculadora.value.replace('-', valor);
    } else if(inputCalculadora.value.includes('x')){
      inputCalculadora.value = inputCalculadora.value.replace('x', valor);
    } else if(inputCalculadora.value.includes('/')){
      inputCalculadora.value = inputCalculadora.value.replace('/', valor);
    }
    else{
      inputCalculadora.value += e.target.innerHTML;
    }
  }
  else inputCalculadora.value += e.target.innerHTML;
}

for(i =0; i<botones.length;i++){
  botones[i].addEventListener("click",validarEntradaCalculadora);
}

