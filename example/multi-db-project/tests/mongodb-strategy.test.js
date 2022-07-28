const assert = require('assert');
const { test, describe } = require('mocha');

const MongoDB = require('../src/db/strategies/mongodb/mongodb');
const HeroiSchema = require('../src/db/strategies/mongodb/schemas/heroi-schema');
const ContextStrategy = require('../src/db/strategies/base/context-strategy');

let context = {};

const MOCK_HEROI_CADASTRAR = {
  nome: 'Mulher Maravilha',
  poder: 'Laço'
}

const MOCK_HEROI_DEFAULT = {
  nome: `Homem Aranha-${Date.now()}`,
  poder: 'Super Teia'
}

const MOCK_HEROI_ATUALIZAR = {
  nome: `Patolino-${Date.now()}`,
  poder: 'Velocidade'
}

let MOCK_HEROI_ID = '';

describe('MongoDB Suíte de testes', function () {
  this.beforeAll(async () => {
    const connection = MongoDB.connect();
    context = new ContextStrategy(new MongoDB(connection, HeroiSchema));

    await context.create(MOCK_HEROI_DEFAULT);
    const result = await context.create(MOCK_HEROI_ATUALIZAR);
    MOCK_HEROI_ID = result._id;
  });

  test('should be able to connect with mongodb', async () => {
    const result = await context.isConnected();
    const expected = 'Conectado';
    assert.deepEqual(result, expected);
  });

  test('should be able to add new hero', async () => {
    const { nome, poder } = await context.create(MOCK_HEROI_CADASTRAR);
    assert.deepEqual({ nome, poder }, MOCK_HEROI_CADASTRAR);
  });

  test('should be able list one hero', async () => {
    const [{ nome, poder }] = await context.read({ nome: MOCK_HEROI_DEFAULT.nome });
    const result = { nome, poder };
    assert.deepEqual(result, MOCK_HEROI_DEFAULT);
  });

  test('should be able to update new hero', async () => {

    const result = await context.update(MOCK_HEROI_ID, {
      nome: 'Pernalonga'
    });

    assert.deepEqual(result.nModified, 1);
  });

  test('should be able to remove hero', async () => {

    const result = await context.delete(MOCK_HEROI_ID);

    assert.deepEqual(result.n, 1);
  });
});
