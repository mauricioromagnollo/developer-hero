import { describe, it, expect, jest, beforeEach, afterEach } from '@jest/globals';

import { Routes } from '../../src/routes';

describe('Routes', () => {
  describe('#setSocketInstance', () => {
    it('should store io instance', () => {
      const routes = new Routes({})

      const ioMock = {
        to: (id) => ioMock,
        emit: (event, message) => { }
      }

      routes.setSocketInstance(ioMock)
      expect(routes.io).toStrictEqual(ioMock)
    })
  })

  describe('#handler', () => {
    let defaultParams = null
    let loggerMock = null

    beforeEach(() => {
      loggerMock = {
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn()
      }

      defaultParams = {
        request: {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          method: '',
          body: {}
        },
        response: {
          setHeader: jest.fn(),
          writeHead: jest.fn(),
          end: jest.fn()
        },
        values: () => Object.values(defaultParams)
      }
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should return default route when inexistent route is provided', async () => {
      const routes = new Routes(loggerMock)
      const params = {
        ...defaultParams
      }

      params.request.method = 'inexistent'

      await routes.handler(...params.values())

      expect(params.response.end).toHaveBeenCalledWith('hello world')
    })

    it('should set any request with CORS enabled', async () => {
      const routes = new Routes(loggerMock)
      const params = {
        ...defaultParams
      }

      params.request.method = 'inexistent'

      await routes.handler(...params.values())

      expect(params.response.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*')
    })

    it('should return options route when request method is OPTIONS', async () => {
      const routes = new Routes(loggerMock)
      const params = {
        ...defaultParams
      }

      params.request.method = 'OPTIONS'

      await routes.handler(...params.values())

      expect(params.response.writeHead).toHaveBeenCalledWith(204)
      expect(params.response.end).toHaveBeenCalled()
    })

    it('should return post route when request method is POST', async () => {
      const routes = new Routes(loggerMock)
      const params = {
        ...defaultParams
      }

      params.request.method = 'POST'
      jest.spyOn(routes, routes.post.name).mockResolvedValue()

      await routes.handler(...params.values())

      expect(routes.post).toHaveBeenCalled()
    })

    it('should return get route when request method is GET', async () => {
      const routes = new Routes(loggerMock)
      const params = {
        ...defaultParams
      }

      params.request.method = 'GET'
      jest.spyOn(routes, routes.get.name).mockResolvedValue()

      await routes.handler(...params.values())

      expect(routes.get).toHaveBeenCalled()
    })
  })

  describe('#get', () => {
    let defaultParams = null
    let loggerMock = null

    beforeEach(() => {
      loggerMock = {
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn()
      }

      defaultParams = {
        request: {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          method: '',
          body: {}
        },
        response: {
          setHeader: jest.fn(),
          writeHead: jest.fn(),
          end: jest.fn()
        },
        values: () => Object.values(defaultParams)
      }
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should list all downloaded files when method get was called', async () => {
      const routes = new Routes(loggerMock)

      const params = {
        ...defaultParams
      }

      const filesStatusesMock = [
        {
          size: '78.9 kB',
          file: 'file.txt',
          lastModified: '2024-05-23T02:46:12.221Z',
          owner: 'johndoe'
        }
      ]

      jest.spyOn(routes.fileHelper, 'getFilesStatus')
        .mockResolvedValue(filesStatusesMock)

      params.request.method = 'GET'

      await routes.handler(...params.values())

      expect(params.response.writeHead).toHaveBeenCalledWith(200)
      expect(params.response.end).toHaveBeenCalledWith(JSON.stringify(filesStatusesMock))
    })
  })
})
