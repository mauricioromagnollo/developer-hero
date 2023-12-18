# Fundamentos Next.js (Versão 13+)

## Rotas e Layout

Dentro da pasta `app`, você tem alguns arquivos que são convençẽos. Toda a parte de rotamento do Next.js é feita dentro da pasta `app` e as rotas são geradas automaticamente. Por exemplo, se você tem um arquivo `page.tsx` dentro da pasta `app`, o Next.js vai gerar uma rota para esse arquivo.

Cada pasta dentro de app, vai ser uma nova rota.

`layout.tsx` é um arquivo que vai ser renderizado em todas as páginas. Por exemplo, se você tem um header que vai ser renderizado em todas as páginas, você pode colocar esse header dentro do `layout.tsx`. Sempre que quiser que algo seja compartilhado em todas as pastas da sua aplicação, você usa o arquivo `layout.tsx`. E você pode criar mais arquivos `layout.tsx` dentro de cada pasta, e o Next.js vai renderizar o `layout.tsx` da pasta mais específica.

/auth
  /sign-out
  /sign-in
  `layout.tsx`

Esse layout, vai ser compartilhado entre as duas pastas. E isso vai gerar uma rota localhost:3000/auth/sign-in e localhost:3000/auth/sign-out.


## Grupos e Rotas Dinâmicas

Digamos que eu não quero que seja gerado a rota /auth, porém eu quero organizar a pasta da forma que foi feito acima. Nesse caso, eu crio a pasta nesse formato, entre ().

/(auth)
  /sign-out
  /sign-in
  `layout.tsx`

Dessa forma, a rota vai ser localhost:3000/sign-in e localhost:3000/sign-out.

## Rotas Parametrizadas

Digamos que você quer pegar algum parâmetro da rota. Por exemplo, localhost:3000/users/1. Nesse caso, você pode criar uma pasta com o nome do parâmetro entre colchetes. Exemplo:

/product
  /[id]
    `page.tsx`

Para buscar esse parâmetro dentro da página, você pode pode fazer assim:

```tsx
interface ProductProps {
  params: {
    id: string;
  }
}

export default function Product(props: ProductProps) {
  return (
    <div>
      <h1>Product: {props.params.id}</h1>
    </div>
  )
}
```

**Receber Vários Parâmetros**

/product
  /[...data]
    `page.tsx`

```tsx
interface ProductProps {
  params: {
    data: string[];
  }
}

export default function Product({ params }: ProductProps) {
  const [ productId, size, color ] = params.data;

  return (
    <div>
      productId: {productId} <br />
      size: {size} <br />
      color: {color} <br />
    </div>
  )
}
```

A rota localhost:3000/product/1/xs/blue


## Arquitetura do Next.js

No server components, o Next.js vai renderizar o componente no servidor, e vai enviar o HTML para o browser. E no browser, o Next.js vai renderizar o componente novamente, e vai fazer o 'hydrate' do HTML que foi enviado pelo servidor.

- Todos os componentes por padrão agora são Server Components, ou seja, criados pelo Node.js do Next.js. Porém, você pode criar componentes que são renderizados pelo browser, usando o 'use client' no topo do arquivo.

## Fetch de Dados nos Components

É possível transformar o componente em assíncrono e buscar uma informação diretamente nele, mas essa informação, é apenas para mostrar inicialmente no componente e não para ser atualizada dinamicamente. Exemplo:

```tsx
export default async function Home() {
  const response = await fetch('https://api.github.com/users/mauricioromagnollo');
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
```

- O Next.js vai renderizar o componente no servidor, e vai enviar o HTML para o browser. E no browser, o Next.js vai renderizar o componente novamente, e vai fazer o 'hydrate' do HTML que foi enviado pelo servidor.

Você não deveria usar async componentes para client components!

Em componentes client, você pode usar o `useEffect` para buscar os dados ou um React Query;

Uma dica é abstrair ao máximo os client components no React. Então você consegue usar esse client component dentro de um server component.

Dentro de um client component, todos os componentes que você importar, vão ser client components também. Porém, se você importar um componente que é server component, ele vai ser renderizado no servidor. Já o contrário, em um server component, se você importar um componente que é client component, ele vai ser renderizado no browser, mas o resto será criação do server component. Isso chama Client Boundaries -> Barreiras do client e server components

A única forma de usar um server component dentro de um client component, é colocando um children no seu client component e receber esse component server.


## Loading e Streaming SSR

Na mesmo local da página que você está criando, ou seja, no mesmo nível de hierarquia, você pode criar um arquivo chamado `loading.tsx`, que vai ser responsável por realizar um loading enquanto a sua página estiver sendo montada. O Next automaticamente vai exibir o loading ao invés da página, enquanto a página estiver sendo montada.

/pagina
  `page.tsx`
  `layout.tsx`
  `loading.tsx`

```tsx
export default function Loading() {
  return (
    <div>
      <h1>Carregando...</h1>
    </div>
  )
}
```

PS: O loading também herda o `layout.tsx`. E assim como layout, o loading vai ser compartilhado com todas as subpastas. Mas diferente de layout, ele não vai encadear os loadings das pastas anteriores, ele sempre vai pegar o mais próximo da página em questão.

## Streaming SSR

A requisição fica streamando os dados. [ESTUDAR MAIS SOBRE ISSO]

## Suspense API no React

import { Sustense } from 'react';

<Suspense fallback={<p>Carregando...</p>}>
  <Component />
</Suspense>

## Variáveis de Ambiente

NEXT_PUBLIC_API_BASEURL

Toda variável que eu quero que esteja disponível tanto pro servidor do Next.js, quanto pro Client do Next.js, eu preciso colocar o prefixo NEXT_PUBLIC_ na frente do nome da variável.

## Cache e Memoization

**Memoization**

A memoization é feita automaticamente pelo React, a partir do momento que estamos utilizando server components. Se você fizer a mesma requisição, para a mesma rota, utilizando os mesmos parâmetros, durante o mesmo fluxo de renderização de uma página... essa requisição não vai ser feita duas vezes!


Memoization -> useMemo, memo, useCallback.... é o termo usado para quando não vamos repetir algum cálculo, ou função, ou algo que seja pesado, para não ficar repetindo toda vez que o componente for renderizado.




Cache ->
