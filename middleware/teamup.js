const https = require('https')

const teamupMiddleware = (req, res, next) => {
  const options = {
    hostname: 'api.teamup.com',
    path: `/${process.env.CALENDAR_ID}/events?startDate=2023-08-07&endDate=2023-08-11`,
    headers: {
        'Teamup-Token': process.env.API_KEY
    }
  }
  
  https.get(options, (res) => {
    let data=''
  
    res.on('data', (receiveDataBuffer) => {
      data += receiveDataBuffer
    })
  
    res.on('end', () => {
      let receiveDataAsJSON = JSON.parse(data)
      console.log(receiveDataAsJSON)
      req.teamupData = receiveDataAsJSON
      next()
    })
  })
    .on('error', (err) => {
      console.error(err)
      next(err)
    })
}


module.exports = teamupMiddleware