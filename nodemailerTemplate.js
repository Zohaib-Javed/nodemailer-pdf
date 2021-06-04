const NodeMailer =require('nodemailer');
const handelBars=require('handlebars');
const fs=require('fs');
const path =require('path');
const googleApis=require('googleapis');
const sendEmail=async()=>{
 
  const clientId=""; // to be added
  const clientSecret=""; //to be added
  const refreshToken=""; //to be added
  const redirectUri="https://developers.google.com/oauthplayground";
  const OAuth2Client=new googleApis.Auth.OAuth2Client(clientId,clientSecret,redirectUri);
  OAuth2Client.setCredentials({refresh_token:refreshToken})
  try {
    const accessToken=await OAuth2Client.getAccessToken();
    let transporter = NodeMailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        type:'OAuth2',
        user:"abc@gmail.com",
        refreshToken,
        clientId,
        clientSecret,
        accessToken
      },
      tls:{rejectUnauthorized:false}
    });
    var source = fs.readFileSync(path.resolve(__dirname,'./templatesHtml/opt.hbs'), "utf8");
    const template=handelBars.compile(source)

    const optData={
      code:"506436"
    }

    let info = await transporter.sendMail({
      from: "abc@gmail.com", // sender address
      to: "zohaib.javed@phaedrasolutions.com", // list of receivers
      subject: "Testing Nodemailer", // Subject line
      text: "Testing nodemailer using gmail.", // plain text body
      html:template(optData)
    },(err,data)=>{
      if(err)
        console.log(err);
      else 
        console.log("Email sent!!", data)
    });

  } catch (error) {
    console.log(error);
  }
}
sendEmail();