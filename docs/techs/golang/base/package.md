# Package

> Escrever sobre pacotes, visibilidade...

package main

- Os arquivos com package contendo o mesmo nome, são visíveis entre si! Mesmo estando com letra minúscula! Pois eles são privados apenas dentro do contexto do pacote (package), não importa quantos arquivos sejam.

- É interessante que Structs, Métodos... que serão públicos, tenham comentários por convenção sobre eles, para que o intelisense possa explicar.

## Publishing Packages

Como publicar pacotes reutilizáveis no Github.

## Testando a Publicação e Versão

```sh
GOPROXY=proxy.golang.org go list -m github.com/mauricioromagnollo/go-packages@v0.2.0
```

## Referências

https://go.dev/doc/modules/publishing
https://go.dev/doc/modules/release-workflow
https://go.dev/doc/modules/developing

## Pacotes Famosos de Referência

https://github.com/stretchr/testify/
