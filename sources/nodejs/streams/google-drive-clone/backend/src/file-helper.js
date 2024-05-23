import fs from 'fs'
import prettyBytes from 'pretty-bytes'

export class FileHelper {
  static async getFilesStatus(downloadsFolder) {
    const currentFiles = await fs.promises.readdir(downloadsFolder)
    const filesStatuses = await Promise.all(
      currentFiles.map(file => fs.promises.stat(`${downloadsFolder}/${file}`))
    )

    const formattedFilesStatuses = []

    for (const fileIndex in currentFiles) {
      const { birthtime, size } = filesStatuses[fileIndex]

      formattedFilesStatuses.push({
        size: prettyBytes(size),
        file: currentFiles[fileIndex],
        lastModified: birthtime,
        owner: process.env.USER
      })
    }

    return formattedFilesStatuses
  }
}
