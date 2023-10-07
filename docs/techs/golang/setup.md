# **Instalação e Configuração**

---

## Configurando o Visual Studio Code

- Instale a extensão oficial da linguagem Go: [https://marketplace.visualstudio.com/items?itemName=golang.go](https://marketplace.visualstudio.com/items?itemName=golang.go);
- Após instalar a extensão, digite <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> e digite **Go:**. Selecione a opção: **Go: Install/Update Tools**.

## Verificando as Variáveis de Ambiente

```sh
go env
```

## Iniciando um Módulo e o Sistema de Packages

```sh
go mod init <SEU_PACKAGE>
```

Exemplo: `go mod init github.com/mauricioromagnollo/goproj`

O Go utiliza packages, assim como o Java.
