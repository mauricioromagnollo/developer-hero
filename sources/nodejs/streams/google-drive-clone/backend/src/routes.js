import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FileHelper } from "./file-helper.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const defaultDownloadsFolder = resolve(__dirname, '../', 'downloads')

export class Routes {
  io

  constructor(logger, downloadsFolder = defaultDownloadsFolder) {
    this.logger = logger
    this.downloadsFolder = downloadsFolder
    this.fileHelper = FileHelper
  }

  setSocketInstance(io) {
    this.io = io
  }

  async defaultRoute(request, response) {
    response.end('hello world')
  }

  async options(request, response) {
    response.writeHead(204)
    response.end()
  }

  async post(request, response) {
    this.logger.info('post')
    response.end()
  }

  async get(request, response) {
    const files = await this.fileHelper.getFilesStatus(this.downloadsFolder)

    response.writeHead(200)
    response.end(JSON.stringify(files))
  }

  handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const choosen = this[request.method.toLowerCase()] || this.defaultRoute

    return choosen.apply(this, [request, response])
  }
}
