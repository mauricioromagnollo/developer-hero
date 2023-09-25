# Struct e Type

O Go trouxe o método como inspiração da Orientação a Objetos para a linguagem, apesar de não ser uma linguagem orientada a objetos.

Receiver (Receptor), ou seja, você quer aplicar essa função a qual receptor? Quem será o dono dessa função?

```go
func (r receiver) nameOfFunction() {...}
```

Por exemplo:

```go
type produto struct {
	nome     string
	preco    float64
	desconto float64
}

func (p produto) precoComDesconto() float64 {
	return p.preco * (1 - p.desconto)
}

```

# Interface

