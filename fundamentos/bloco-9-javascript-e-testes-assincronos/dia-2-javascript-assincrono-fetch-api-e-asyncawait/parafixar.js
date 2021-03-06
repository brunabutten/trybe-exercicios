/* O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
Resposta:
Um código assíncrono é um código que não "trava" a fila de execução. Ou seja, a próxima instrução não espera o fim da instrução assíncrona para iniciar, diferentemente do código síncrono, que a próxima instrução só inicia ao final da anterior.

Quando você tem que enfileirar várias callbacks , que problema surge?
Resposta:
Surge o "callback hell", que nada mais é uma sequência de callbacks uma dentro da outra, o que dificulta a leitura e escalabilidade do código.

Por que as Promises são uma forma de resolver esse problema?
Resposta:
As Promises permitem que um fluxo de ações assíncronas seja escrito de forma similar a um fluxo de ações síncronas, garantindo também formas concisas e centralizadas de capturar possíveis erros durante sua execução.

Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
Resposta:
Assíncrona, porquê não se tem controle do tempo e da integridade da resposta da API.

Dada a resposta anterior, o que é fetch e para que ele serve?
Resposta:
Fetch é uma função que faz uma requisição à API, ela tem ferramentas para tratar os dados recebidos, tanto no sucesso quanto no erro.
 */