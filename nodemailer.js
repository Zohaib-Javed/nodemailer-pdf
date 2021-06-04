const NodeMailer =require('nodemailer');
 // let transporter = NodeMailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: testAccount.email, // generated ethereal user
  //     pass: testAccount.pass, // generated ethereal password
  //   },
  // });
const sendEmail=async()=>{
 
  let transporter = NodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "antonia.kemmer@ethereal.email", // generated ethereal user
      pass: '13gNugHa7vtqM9Appz', // generated ethereal password
    },
    // tls:{rejectUnauthorized:false}
  });
 
  
  let info = await transporter.sendMail({
    from: "antonia.kemmer@ethereal.email", // sender address
    to: "zohaib.javed@phaedrasolutions.com", // list of receivers
    subject: "Testing Nodemailer", // Subject line
    text: "Testing nodemailer using gmail.", // plain text body
  },(err,data)=>{
    if(err)
      console.log(err);
    else 
      console.log("Email sent!!", data)
  });
}
sendEmail();