# Array

O Array tem um tamanho definido

```go
	var meuArray [3]int

	lasElementIndex := len(meuArray) - 1

	for i, v := range meuArray {
		fmt.Printf("Índice: %d", i)
		fmt.Printf("Valor: %d", v)
	}
```


# **Slice**

O slice tem 3 partes: um ponteiro que vai apontar para o Array, um tamanho e uma capacidade.

Por baixo dos panos, o Go vai dobrar o seu slice de tamanho, quando você precisar adicionar mais posições.
