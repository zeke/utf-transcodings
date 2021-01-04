const iconv = require('iconv-lite')
const encodings = require('iconv-lite/encodings')

Object.keys(encodings).forEach(key => {
  try {
    const decoding = iconv.decode(Buffer.from('Róisín'), key).toString()
    console.log(decoding, `(${key})`)
  } catch {
    // do nothing
  }
})