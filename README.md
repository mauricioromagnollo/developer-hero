# **doe-backend**

> API RESTful com Nest.js + PostgreSQL para o aplicativo Doe.

## **Requirements**

- Node.js v18.x
- Docker e Docker Compose

Após instalar o Node.js e o Docker, instale as dependências do projeto e ative os hooks de commit:

```bash
npm i && npm run prepare
```

## **CLI**

### Iniciar Ambiente de Desenvolvimento com o Docker

```bash
npm run dev:docker
```

### Teste em Modo Watch

```bash
npm run test:watch
```

## **Techs**

- [Nest.js]
- [TypeORM]
- [PostgreSQL]
- [Commitlint]
- [Husky] + [Lint Staged] - Hooks para Commits
- [ESLint] + [Prettier] - Code Style / Linter
- [DotEnv] - Variáveis de Ambiente
- [Jest] + [Supertest] - Testes
- [Docker]

<!-- References -->

[husky]: https://github.com/typicode/husky
[lint staged]: https://github.com/okonet/lint-staged
[eslint]: https://eslint.org/docs/user-guide/getting-started
[prettier]: https://prettier.io/
[dotenv]: https://github.com/motdotla/dotenv
[docker]: https://www.docker.com/
[jest]: https://jestjs.io/
[supertest]: https://www.npmjs.com/package/supertest

[Commitlint]:
[PostgreSQL]:
[TypeORM]:
[Nest.js]:
