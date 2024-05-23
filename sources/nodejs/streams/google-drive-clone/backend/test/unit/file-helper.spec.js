import { describe, it, expect, jest, beforeEach, afterEach } from '@jest/globals';
import fs from 'fs'

import { FileHelper } from '../../src/file-helper.js';

describe('FileHelper', () => {
  describe('#getFilesStatus', () => {
    it('should return files statuses with correct format', async () => {
      const fileStatMock = {
        dev: 16777229,
        mode: 33204,
        nlink: 1,
        uid: 501,
        gid: 20,
        rdev: 0,
        blksize: 4096,
        ino: 5767981,
        size: 78902,
        blocks: 160,
        atimeMs: 1716432379587.419,
        mtimeMs: 1716432372221.676,
        ctimeMs: 1716432378160.3945,
        birthtimeMs: 1716432372221.3655,
        atime: '2024-05-23T02:46:19.587Z',
        mtime: '2024-05-23T02:46:12.222Z',
        ctime: '2024-05-23T02:46:18.160Z',
        birthtime: '2024-05-23T02:46:12.221Z'
      }

      const mockUser = 'johndoe'
      process.env.USER = mockUser

      const filename = 'any_file.png'

      jest.spyOn(fs.promises, 'readdir')
        .mockResolvedValue([filename])

      jest.spyOn(fs.promises, 'stat')
        .mockResolvedValue(fileStatMock)

      const expectedFilesStatuses = [
        {
          size: '78.9 kB',
          file: filename,
          lastModified: '2024-05-23T02:46:12.221Z',
          owner: mockUser
        }
      ]

      const result = await FileHelper.getFilesStatus("/tmp")

      expect(fs.promises.stat).toHaveBeenCalledWith(`/tmp/${filename}`)
      expect(result).toMatchObject(expectedFilesStatuses)
    })
  })
})
