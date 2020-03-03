jest.mock('fs');
const files = require('../lib/files');

describe('files module', () => {
  it('can load a file', () => {
    return files.loadFile('file.txt')
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy();
      })
  })
  it('can save a file', () => {
    return files.saveFile('file.txt', 'hello darkness')
      .then(result => {
        expect(result).toBeUndefined()
      })
  })

  it('raises an error if a file is invalid', () => {
    return files.alterFile(null)
    .then()
    .catch(err => {
      expect(err).toBeDefined()
    })
  })

  it('can uppercase a buffer of text', () => {
    const buffer = Buffer.from('asdfasdf'.toUpperCase());
    const newbuffer = files.convertBuffer(Buffer.from('asdfasdf'))
    expect(buffer).toEqual(newbuffer)
  })

  it('can alter a file', () => {
    return files.alterFile('file.txt')
      .then(result => expect(result).toBeUndefined())
      .catch()
  })
})