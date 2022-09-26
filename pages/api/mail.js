const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default (req, res) => {
  const body = JSON.parse(req.body)

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `

  const data = {
    to: 'myjune91@gmail.com',
    from: 'hello@softwaredev.app',
    subject: 'Message from portfolio!',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data)
  console.log(body)
  console.log(data)
  res.status(200).json({ name: 'ok' })
}
