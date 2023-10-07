# **Struct**

A linguagem Go, não é Orientada a Objetos. Os desenvolvedores do Go, dizem que o Go tem o "Go Way" de programar.

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
