# Tailwind

- Interface Declarativa
- Theme First API
- Marging.. Pading... é sempre pensar em multiplicar ou dividir por 4. Ex: p-4 é igual a 16px, ou seja, 4x4 = 16. Se eu quiser saber o contrário, é só dividir por 4. Exemplo, preciso de 40px de margin... 40/4 = 10, ou seja, m-10.

## tailwind.config.ts

... extender cores, fontes, etc

## Importante sobre o Tailwind

- Ele reseta o estilo padrão de TODOS os elementos do HTML. Ou seja, um <h1> e um <p> vão ter o mesmo tamanho, por exemplo. Isso é interessante pois nos faz preocupar apenas com a semântica das tags e não com o estilo que elas vão trazer.
- Por padrão, todos os estilos do tailwind são mobile first. Se você quer estilos para outras telas, você precisa especificar. Ou seja, primeiro você sempre vai declarar o estilo para mobile e depois para as outras telas. Exemplo:

```html
<img class='w-16 md:w-32 lg:w-48'>
```

Ref: https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints

### Dark Mode

https://tailwindcss.com/docs/dark-mode

Basta adicionar o prefixo dark: em qualquer classe do tailwind. Exemplo:

```html
<div class='bg-white dark:bg-gray-800'>
  <h1 class='text-black dark:text-white'>Dark Mode</h1>
</div>
```

### Valores Arbitrários

https://tailwindcss.com/docs/configuration#arbitrary-values

Nós podemos adicioanar valores arbitrários também nas classes do tailwind. Exemplo:

```html
<div class='bg-[#FAFAFA]'>
  <h1 class='w-[30px]'>Dark Mode</h1>
</div>
```

### Group

https://tailwindcss.com/docs/adding-base-styles#group-hover

Podemos usar o group para aplicar estilos em um elemento quando o elemento pai for hover. Exemplo:

```html
<div class='group'>
  <h1 class='text-black group-hover:text-white'>Dark Mode</h1>
</div>
```

