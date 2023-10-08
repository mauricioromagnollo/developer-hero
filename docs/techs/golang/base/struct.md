# **Struct**
---

!!! info "A linguagem Go não é Orientada a Objetos! Mas a linguagem trouxe algumas inspirações de OO. Os desenvolvedores da linguagem dizem que existe o "Go Way" de programar."

---

## Custom Types

```go
package main

type Client struct {
	Name	string
	Age		int
	Active	bool
}

func main() {
	client := Client{
		Name: "John",
		Age: 27,
		Active: true
	}

	fmt.Printf("Name: %s, Age: %d, Active: %t", client.Name, client.Age, client.Active)
}
```

O "Go Way", herdou algumas coisas de orientação a objetos.

...

## Struct Composition

```go
type Person struct {
	Name string
	Age  int
}

type Client struct {
	Person
	Active bool
}
```
```go
func main() {
	client := Client{
		Active: true,
	}

	client.Name = "John"
	client.Age = 32

	// ou client.Person.Name = "John" também funciona!

	fmt.Printf("Name: %s, Age: %d, Active: %t", client.Name, client.Age, client.Active)
}
```

Client vai "herdar" os atributos e comportamentos de Person.

Outro exemplo, utilizando como uma propriedade ao invés de fazer composição:

```go
type Address struct {
	Number	int
	Street	string
}

type User struct {
	Address Address
	Active 	bool
}
```
```go
func main() {
	client := Client{
		Active: true,
	}

	client.Address.Number = 100

	fmt.Printf("Name: %s, Age: %d, Active: %t", client.Name, client.Age, client.Active)
}
```

## Struct Methods

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
