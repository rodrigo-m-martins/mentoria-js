/**
 * Implementar logica de identificação de numeros narcisistas em um dado intervalo
 */

/**
 * Variáveis
 */
let limite = 1000;
let narcisistas = [];

/**
 * percorrer intervalo
 */
async function main(limite) {
  /**
   * percorre todo o intervalo, começando em 0 indo até o limite informado
   */
  for (let atual = 0; atual <= limite; atual++) {
    //console.log(`Valor atual: ${atual}`);

    /**
     * Decompõe os numeros em algarismos e calcula as respectivas potencias, retornando um array
     */
    let atualAsString = JSON.stringify(atual);
    let atualAsArray = Array.from(atualAsString);

    /**
     * Calcula a potencia de cada algarismo
     */
    for (let i = 0; i < atualAsString.length; i++) {
      atualAsArray[i] = atualAsString[i] ** atualAsString.length;

      /**
       * Caso seja o ultimo algarismo do número atualmente sendo avaliado, é feito o somatório da potencia dos algarismos
       */
      if (atualAsArray.length - 1 === i) {
        let somatorioDasPotencias = 0;
        atualAsArray.forEach((element) => {
          somatorioDasPotencias += element;

          /**
           * Avalia se o numero é narcisista
           */
          if (somatorioDasPotencias === atual) {
            console.log(`Número Narcisista > ${atual}`);
          }else{
            console.log(`Não Narcisista > ${atual}`);
            
          }
        });
      }
    }
  }
}

let startTime = Date.now();
main(1000);
let endTime = Date.now();

let executionTime = endTime - startTime;

console.log(`Start Time :> `, startTime);
console.log(`End Time   :> `, endTime);

console.log(`Executado em ${Math.floor(executionTime)}ms`);
