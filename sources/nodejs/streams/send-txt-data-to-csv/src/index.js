import fs from 'fs'
import { Transform, pipeline } from 'stream'
import { promisify } from 'util'

const pipelineAsync = promisify(pipeline)

async function main() {
  const DATASOURCE_TXT_FILE = 'datasource.txt'
  const OUTPUT_CSV_FILE = 'output.csv'

  // Create a Readable Stream from the datasource txt file
  const getReadableDataSource = fs.createReadStream(DATASOURCE_TXT_FILE, { encoding: 'utf-8' })

  // Create a Transform Stream to convert the txt data to an object
  const parseToObject = new Transform({
    objectMode: true,
    transform(chunk, _, callback) {
      const lines = chunk.split('\n')

      for (const line of lines) {
        if (line.trim() !== '' || !line) {
          const [name, age, email] = line.split('|')

          this.push({
            name: name?.trim(),
            age: Number(age),
            email: email?.trim()
          })
        }
      }

      callback()
    }
  })

  // Create a Transform Stream to filter only adults from 18 to 60
  const filterOnlyAdultsFrom18To60 = new Transform({
    objectMode: true,
    transform(chunk, _, callback) {
      if (chunk.age >= 18 && chunk.age <= 60) {
        this.push(chunk)
      }

      callback()
    }
  })

  // Create a Transform Stream to parse name to uppercase and email to lowercase
  const transformNameAndEmail = new Transform({
    objectMode: true,
    transform(chunk, _, callback) {
      callback(null, {
        ...chunk,
        name: chunk.name?.toUpperCase(),
        email: chunk.email?.toLowerCase(),
      })
    }
  })

  // Create a Transform Stream to parse to csv format
  const parseToCsvFormat = new Transform({
    objectMode: true,
    transform(chunk, _, callback) {
      callback(null, `${chunk.email},${chunk.name}\n`)
    }
  })

  // Create a Writable stream to the output csv file
  const writeToCSVFile = fs.createWriteStream(OUTPUT_CSV_FILE)

  // Run the pipeline
  await pipelineAsync(
    getReadableDataSource,
    parseToObject,
    filterOnlyAdultsFrom18To60,
    transformNameAndEmail,
    parseToCsvFormat,
    writeToCSVFile
  )
}

main()
