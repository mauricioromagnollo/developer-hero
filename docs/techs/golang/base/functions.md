# **Funções**

---

## Main Function

A função `main` é o ponto de entrada de qualquer aplicação em Go. Ele é obrigatória assim como em linguagens como C e Java.

```go
package main

func main() {
	// ...
}
```

## Multiple Results

As funções em Go, diferente de outras linguagens, podem retornar mais de um valor. É uma convenção esse último valor geralmente ser um `error`.

Como o Go não tem `try/catch`, é bem comum ver estruturas de código dessa forma:

```go
func sum(a, b int) (int, error) {
	sum := a + b

	if sum >= 50 {
		return 0, errors.New("Invalid Result")
	}

	return sum, nil
}
```

```go
package main

func main() {
	sum, err := sum(20, 30)
	if err != nil {
		fmt.Println("A soma foi maior do que 50!", err)
	}
}
```


## Blank Identifier

...

## Variadic Functions

A `Variadic Function` é uma forma de você receber um número indefinido de parâmetros na função.

```go
func sum(numbers ...int) int {
	result := 0

	for _, number := range numbers {
		total += number
	}

	return result
}
```

Exemplo de utilização dessa função:

```go
package main

func main() {
	total := sum(1,2,3,4,5)
	fmt.Println(total)
	// 15
}
```

A maioria das funções que utilizamos da própria linguagem, de pacotes... são Variadic Functions. Ex: Println

```go
func Println(a ...any) (n int, err error) {
	return Fprintln(os.Stdout, a...)
}
```

## Closures

Closure é basicamente ter uma função, dentro de outra função.

...
