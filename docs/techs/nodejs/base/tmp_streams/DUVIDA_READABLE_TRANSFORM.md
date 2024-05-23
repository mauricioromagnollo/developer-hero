# Do readable para o primeiro transform transformToObject, o transform está recebendo TODOS as linhas do .txt de uma só vez? Ou dentro do Transform passa apenas um chunk?

No pipeline de streams que você construiu, o `Transform` não recebe todas as linhas do arquivo `.txt` de uma vez, mas sim um chunk de dados de cada vez. Vamos entender isso em mais detalhes.

### Funcionamento dos Streams

1. **Readable Stream (`fs.createReadStream`)**:
   - Quando você cria um `Readable` stream com `fs.createReadStream`, ele lê o arquivo em chunks de tamanho configurável (o padrão é 64 KB).
   - Cada chunk é uma porção dos dados do arquivo, não o arquivo inteiro.

2. **Transform Stream (`transformToObject`)**:
   - O `Transform` stream processa esses chunks de dados um de cada vez.
   - No método `transform`, o parâmetro `chunk` é uma dessas porções de dados lidas pelo `Readable` stream.
   - No seu caso, cada chunk é uma string (devido à configuração `encoding: 'utf-8'`).

### O Que Acontece no Código

```javascript
const transformToObject = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    const lines = chunk.split('\n');

    for (const line of lines) {
      const isLineWithNameAndAge = line.match(/(.+?)\s(\d+)/);

      if (isLineWithNameAndAge) {
        const [, name, age] = isLineWithNameAndAge;
        this.push({ name, age: Number(age) });
      }
    }

    callback();
  }
});
```

### Passo a Passo

1. **Leitura de Chunks**:
   - O `Readable` stream (`fs.createReadStream`) lê o arquivo `db.txt` em chunks. Cada chunk é uma parte do conteúdo total do arquivo, por exemplo, 64 KB de dados.

2. **Processamento de Chunks**:
   - Cada chunk lido é passado para o `transformToObject`.
   - O `chunk` é uma string contendo uma porção das linhas do arquivo.

3. **Divisão e Transformação**:
   - O chunk é dividido em linhas usando `split('\n')`.
   - Cada linha é analisada para ver se corresponde ao formato esperado (um nome seguido por um número).
   - Para cada linha válida, um objeto é criado e empurrado para o próximo estágio do pipeline usando `this.push`.

4. **Continuação do Pipeline**:
   - O `callback` é chamado para indicar que o processamento do chunk foi concluído e que o `Transform` stream está pronto para receber o próximo chunk.

### Importância do Processamento por Chunks

Processar dados em chunks é fundamental para a eficiência de memória e performance:

- **Memória**: Evita carregar o arquivo inteiro na memória, o que é crucial para arquivos grandes.
- **Performance**: Permite começar a processar dados assim que estão disponíveis, sem esperar pelo carregamento completo do arquivo.

### Conclusão

O `transformToObject` recebe e processa os dados em chunks, não o arquivo inteiro de uma vez. Isso é gerenciado pelo mecanismo de streams do Node.js, que lê e processa os dados de forma eficiente, permitindo que grandes volumes de dados sejam manipulados sem sobrecarregar a memória.
