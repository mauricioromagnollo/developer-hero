import { faker } from '@faker-js/faker'
import fs from 'fs/promises'

async function main() {
  const NUMBER_OF_DATA = 1000000
  const DATASOURCE_TXT_FILE = 'datasource.txt'

  for (let i = 0; i < NUMBER_OF_DATA; i++) {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const age = Math.floor(Math.random() * 100)

    await fs.appendFile(DATASOURCE_TXT_FILE, `${name} | ${age} | ${email}\n`)
  }
}

main()
