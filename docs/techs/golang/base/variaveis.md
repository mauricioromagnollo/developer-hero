# **Variables**

---

## **Const**

Declaração de uma constante em Go:

```go
const foo = "bar"
```

## **Var**

As variáveis decalaradas em Go sem atribuição, possuem um valor inferido.

```go
var foo bool

foo = false
```

Shorthand:

```go
foo := getNumber()
```

Dessa forma, será inferido o tipo da variável. Dado que estamos criando a variável e atribundo ao mesmo tempo.

## **Declarando múltiplas variáveis**

```go
var (
	foo bool
	bar string
	baz int
)
```

```go
const (
	foo = "foo"
	bar = "bar"
)
```

## **Valores Default**

Por padrão, quando você declara uma variável sem declarar o valor dela, apenas o tipo, um valor default será atribuido.

Exemplo:

```go
var foo bool
var x int

fmt.Println(foo)
// false
fmt.Println(x)
// 0
```

## **Erros no Compilador**

- Se você declarar uma variável e não utilizar, o compilador do Go irá reportar o erro.
