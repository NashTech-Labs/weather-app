const request = require('request')

const forecast = (latitude, longitude , callback) => { 
const url = 'http://api.weatherstack.com/current?access_key=a4a57541905c4bc9e01b524ca33ec918&query=' + latitude + ',' + longitude
request({ url:url , json:true },(error,response)=> {
    if (error) {
        callback('Unable to connect to Web Services',undefined)
    } else if (response.body.error) {
        callback('Unable to find the location',undefined)
    } else {
        callback(undefined, response.body.current.weather_descriptions[0]+'. It is currently ' + response.body.current.temperature + ' degress out. But it feels like ' + response.body.current.feelslike + ' degress out.')
    }
})

 }


module.exports = forecast

