# **Interface**

---

!!! info "No Go é possível declarar e implementar interfaces! Outra inspiração herdada de Orientação a Objetos."

---

## Implementing Interface

Diferente da maioria das linguagens, a implementação da interface é realizada de modo implícito, ou seja, não existe um operador chamado 'implements', por exemplo, para explicitamente deixar claro qual interface está sendo implementada."

```go
// car.go

type Car interface {
	break()
}
```

```go
// ferrari.go

type Ferrari struct {
	model string
	speed int
}

func (f Ferrari) break() {
	f.speed = 0
}
```

Como visto no exemplo acima, toda struct que tiver o método "break()", automaticamente estará implementando a interface "Car". Ou seja, Ferrari passa a ser um tipo de Car. Com isso, podemos criar métrodos e fazer algo como inversão de dependência.


```go
func Buy(c Car) {
	// ...
}

ferrari := Ferrari{}

Buy(ferrari)
```

Uma coisa importante de ressaltar, não é possível definir propriedades nas interfaces, apenas métodos.
