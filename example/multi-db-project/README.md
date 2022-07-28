# Multi Database Project

## PostgreSQL

```bash
docker run --name postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=heroes -p 5432:5432 -d postgres
```

```bash
docker exec -it postgres /bin/bash
```

```bash
docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer
```

## MongoDB

```bash
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo:4
```

```bash
docker run --name mongo-client -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient
```

```bash
docker exec -it mongodb mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({ user: 'x0n4d0', pwd: '12345', roles: [{role: 'readWrite', db: 'herois'}]})"
```

## Aprendizados

- Padrão de Projeto (Strategy) para trabalhar com múltiplos bancos;

## Techs

- PostgreSQL
- MongoDB
- Sequelize
