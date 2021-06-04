const pdftohtml = require('pdftohtmljs')
 
const convert = async (file, output, preset) => {
  const converter = new pdftohtml(file, output)
 
  // If you would like to tap into progress then create
  // progress handler
  converter.progress((ret) => {
    const progress = (ret.current * 100.0) / ret.total
 
    console.log(`${progress} %`)
  })
 
  try {
    // convert() returns promise
    await converter.convert(preset || 'ipad')
  } catch (err) {
    console.error(`Psst! something went wrong: ${err}`)
  }
 
}
 
// call method
convert('html.pdf', 'sample.html')