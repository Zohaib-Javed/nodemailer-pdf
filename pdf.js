// const PDFDocument = require('pdfkit');
const fs = require('fs');
const PDFDocument = require('./table');
const doc = new PDFDocument();

// doc.pipe(fs.createWriteStream('example.pdf'));

// const table0 = {
//     headers: ['Word', 'Comment', 'Summary'],
//     rows: [
//         ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
//         ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
//     ]
// };

// doc.table(table0, {
//     prepareHeader: () => doc.font('Helvetica-Bold'),
//     prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
// });

// const table1 = {
//     headers: ['Country', 'Conversion rate', 'Trend'],
//     rows: [
//         ['Switzerland', '12%', '+1.12%'],
//         ['France', '67%', '-0.98%'],
//         ['England', '33%', '+4.44%']
//     ]
// };

// doc.moveDown().table(table1, 100, 350, { width: 300 });

// doc.end();


// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

// Embed a font, set the font size, and render some text
doc
  .fontSize(25)
  .fill("blue")
  .text('Door View', 50, 50);



// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image('./hotel_bg.jpeg', {
  fit: [250, 300],
  align: 'center',
  valign: 'center'
});

doc
  .addPage()
  .fontSize(25)
  .text('Here is some vector graphics...', 100, 100);

// Draw a triangle
doc
  .save()
  .moveTo(100, 150)
  .lineTo(200, 350)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('green');

// Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('blue')
  .restore();

// Add some text with annotations
doc
  .addPage()
  .fillColor('blue')
  .text('Here is a link!', 100, 100)
  .underline(100, 100, 160, 27, { color: '#0000FF' })
  .link(100, 100, 160, 27, 'http://google.com/');

// Finalize PDF file
doc.end();