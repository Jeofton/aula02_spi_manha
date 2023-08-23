var time = "corinthians";

// var, let e const
/**
 *  let e const possuem escopo local
 * 
 */
// let outracoisa;
//Estrutura de decisão simples
// if(flamengo == "Foi gol"){
// let algumacoisa;
//   console.log("A partida é nossa\n")
// }

/**
 * Decisões compostas
 * 
 */

// if(time == "flamengo"){
//   console.log("Aha! Uhu! O juiz é nosso.")
// }else{
//   console.log("Au!Au!Au! Palmeiras não tem mundial.")
// }

// Multiplas escolha

// if(time == "flamengo"){
//   console.log("Aha! Uhu! O juiz é nosso.")
// }else if(time == 'palmeiras'){
//   console.log("Au!Au!Au! Palmeiras não tem mundial.")
// }else{
//   console.log("Prefiro o Minas Clube.")
// }

// estrutura for

// for(let i = 10; i >= 1; i--){
//   console.log(`Valor de i na ${i}ª volta`);
// }

// estrutura while

// let i = 0;

// while(i <= 5){
//   console.log(i)
//   i++
// }


/**
 *  O trecho de código abaixo serve para capturar entradas do teclado via termina (ou seja, prompt de comando) 
 * 
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o seu nome?', (n) => {
  const nome = n;

  console.log(`Olá, ${nome}`)
})
