# **Send TXT Data to CSV**

Este projeto utiliza Node.js Streams para ler, transformar e escrever dados de um arquivo .txt para um arquivo .csv.

## **Algoritmo**

- Ler os dados do arquivo .txt que está no formato `"Nome | Idade | Email"` &rarr; **Readable Stream**
- Transformar os dados em um objeto JavaScript &rarr; **Transform Stream**
- Filtrar apenas as pessoas de 18 até 60 anos &rarr; **Transform Stream**
- Transformar os nomes em uppercase e os emails em lowercase &rarr; **Transform Stream**
- Formatar os dados para o arquivo .csv no formato `"email,nome"` &rarr; **Transform Stream**
- Escrever os dados no arquivo .csv &rarr; **Writable Stream**

## **Rodando o Projeto**

1. Instale as dependências do projeto:

```bash
npm ci
```

2. Execute o script para gerar o arquivo .txt com os dados:

```bash
npm run seed
```

3. Execute o script para transformar os dados do arquivo .txt em um arquivo .csv:

```bash
npm start
```

Ao executar npm start, o script irá ler o arquivo .txt, transformar e filtrar os dados conforme especificado, e então escrever os dados resultantes em um arquivo .csv.
