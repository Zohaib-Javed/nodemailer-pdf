// const PDFDocument = require('pdfkit');
const fs = require('fs');
const PDFDocument = require('./table1');
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('example.pdf'));
const data={
  heading:"Door View",
  details:{
    Floor:'F1',
    Area:"Parkade",
    DoorName:"DW1",
  }
}
// const table0 = {
//   headers: ['Word', 'Comment', 'Summary'],
//   rows: [
//     ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
//     ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
//   ]
// };

// doc.table(table0, {
//   prepareHeader: () => doc.font('Helvetica-Bold'),
//   prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
// });

const table1 = {
  headers: ['Door View'," "],
  rows: [
    ['Floor:', 'F1'],
    ['Area:', 'Parkade'],
    ['Door Name:', 'DW1']
  ]
};

doc.table(table1,{
    prepareHeader: () => doc.font('Helvetica-Bold').fillColor("blue"),
    prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
  });

doc.end();
