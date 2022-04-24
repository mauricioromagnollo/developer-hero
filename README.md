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

- [Nest.js] - Node.js Framework
- [TypeORM] - Database ORM
- [PostgreSQL] - Relational Database
- [Commitlint] - Commit Message Lint
- [Husky] + [Lint Staged] - Commit Hooks
- [ESLint] + [Prettier] - Code Style / Linter
- [DotEnv] - Environments Variables
- [Jest] + [Supertest] - Tests
- [Docker] - Environment Virtualization

<!-- References -->

[nest.js]: https://nestjs.com/
[postgresql]: https://www.postgresql.org/
[typeorm]: https://typeorm.io/
[husky]: https://github.com/typicode/husky
[lint staged]: https://github.com/okonet/lint-staged
[eslint]: https://eslint.org/docs/user-guide/getting-started
[prettier]: https://prettier.io/
[dotenv]: https://github.com/motdotla/dotenv
[docker]: https://www.docker.com/
[jest]: https://jestjs.io/
[supertest]: https://www.npmjs.com/package/supertest
[commitlint]: https://github.com/conventional-changelog/commitlint
