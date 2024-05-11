# **Node.js Streams**

## **Contexto**

JavaScript é uma linguagem que não foi criada para processar muitos dados em memória de uma só vez! Se você alocar 1.5GB de memória, o Node.js irá quebrar e lançar o erro do tipo `"FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory"`.

Então, como podemos processar arquivos grandes sem consumir muita memória? Como eu faço upload de um arquivo de 4GB, por exemplo? Ou imagina você precisa gerar um grande relatório com muitos dados e formatado?

A resposta para todas essas e outras perguntas é: **Node.js Streams**.

## **O que são as Node.js Streams?**

Antes de falar sobre as Node.js Streams, vamos entender o que são Streams. Uma ***Stream*** é uma abstração que permite trabalhar de forma eficiente com um grande volume de dados, de forma que os dados são transmitidos de uma fonte para um destino em pequenos pedaços, de forma sequencial, em vez de lidar com todo o conteúdo de uma só vez.

Isso permite que você trabalhe com arquivos grandes, sockets, ou qualquer outro tipo de fluxo de dados de forma eficiente, sem consumir muita memória e melhorando a performance, pois você pode começar a processar os dados antes mesmo de ter lido todo o conteúdo.

Em Node.js, as Streams são implementadas por meio de um conjunto de classes e módulos que permitem a leitura e escrita de dados de forma eficiente.

---

**Streams** são uma forma eficiente de lidar com operações de leitura e escrita de dados em Node.js. Imagine que você está em um restaurante e pediu uma sopa. Em vez de esperar o garçom trazer a sopa inteira de uma vez, ele traz a sopa em pequenas porções, permitindo que você comece a comer imediatamente. Streams funcionam de maneira semelhante. Em vez de esperar que todos os dados sejam lidos ou escritos de uma só vez, eles permitem que você processe os dados em partes menores, chamadas **chunks**.

### Definição de Stream

Uma **stream** é uma abstração que permite o manejo eficiente de dados em movimento. Elas são uma coleção de dados que podem ser lidos ou escritos de forma sequencial, em pedaços menores, em vez de lidar com todo o conteúdo de uma só vez. Isso é particularmente útil para grandes volumes de dados, como arquivos grandes ou transmissões de dados em tempo real, onde seria impraticável ou impossível carregar tudo na memória de uma só vez.

### Importância das Streams

Streams são fundamentais para a performance e a escalabilidade de aplicativos Node.js. Elas permitem:

- **Economia de memória**: Como os dados são processados em pedaços, não é necessário carregar tudo na memória.
- **Baixa latência**: Você pode começar a processar os dados assim que a primeira parte estiver disponível, sem precisar esperar todo o conteúdo.
- **Eficiência**: Para operações de I/O intensivo, como leitura/escrita de arquivos e transferência de dados pela rede, as streams proporcionam um uso mais eficiente dos recursos do sistema.

### Diferença entre Streams e Buffers

Para entender melhor as streams, é importante diferenciá-las dos buffers:

- **Buffers**: São blocos de memória que armazenam dados temporariamente. Em Node.js, buffers são usados para manipular dados binários diretamente, o que é útil para operações de I/O.
- **Streams**: Em vez de armazenar dados inteiros na memória, streams tratam os dados em pedaços menores, permitindo que você processe partes dos dados enquanto o restante ainda está sendo lido ou escrito.

### Tipos de Streams em Node.js

Node.js oferece quatro tipos principais de streams, cada um com seu próprio propósito e funcionalidade:

1. **Readable Streams**: Usados para operações de leitura. Por exemplo, ao ler um arquivo ou receber dados de uma requisição HTTP.
2. **Writable Streams**: Usados para operações de escrita. Por exemplo, ao gravar dados em um arquivo ou enviar uma resposta HTTP.
3. **Duplex Streams**: São streams que podem ser lidos e escritos, como um socket TCP.
4. **Transform Streams**: São Duplex Streams que podem modificar ou transformar os dados enquanto eles são lidos ou escritos, como compressão ou encriptação.

### Exemplo Prático

Vamos imaginar um exemplo prático onde você precisa ler um arquivo grande e processar seu conteúdo. Com streams, você pode ler o arquivo em pedaços menores, processar cada pedaço à medida que ele é lido, e assim economizar memória e melhorar a performance do seu aplicativo.

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('grande-arquivo.txt', {
  encoding: 'utf8',
  highWaterMark: 1024 // lê o arquivo em pedaços de 1KB
});

readableStream.on('data', (chunk) => {
  console.log('Novo pedaço recebido:', chunk);
  // Processar o pedaço do arquivo aqui
});

readableStream.on('end', () => {
  console.log('Leitura do arquivo completa.');
});
```

Neste exemplo, usamos o módulo `fs` do Node.js para criar um `ReadableStream` que lê um arquivo grande em pedaços de 1KB. Cada vez que um pedaço é lido, ele é processado imediatamente, permitindo que o programa lide com arquivos grandes de forma eficiente e sem sobrecarregar a memória.

### Conclusão

Streams são uma poderosa ferramenta em Node.js, oferecendo uma maneira eficiente de lidar com dados de forma assíncrona e em tempo real. Elas são essenciais para a construção de aplicativos escaláveis e de alto desempenho, especialmente quando se trabalha com grandes volumes de dados ou operações de I/O intensivas. Ao entender e utilizar streams, você pode melhorar significativamente a eficiência e a responsividade dos seus aplicativos Node.js.

Streams são objetos que permitem ler dados de uma fonte ou escrever dados para um destino em pedaços. Eles são especialmente úteis para ler ou escrever dados de forma eficiente em arquivos, sockets ou qualquer outro tipo de fluxo de dados.

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

``` mermaid
graph LR
  A[chunk] --- B[chunk] --- C[chunk] --- D[chunk] --- E[chunk] --- F[chunk]
```

## QA
