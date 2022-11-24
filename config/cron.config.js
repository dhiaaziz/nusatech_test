module.exports = {
  // handler key rootnya adalah file helpers/cron-scheduler.js
  // hello: {
  //     frequency: '* * * * * *',
  //     handler: '../controller/cronHandlers/hello'
  // },
  // coba: {
  //     frequency: '* * * * * *',
  //     handler: '../controller/cronHandlers/coba'
  // },
  sendEmailPin: {
      frequency: '*/10 * * * * *', //per 10 seconds
      handler: '../module/cronHandlers/sendEmailPin'
  },
  setPinExpired: {
      frequency: '*/10 * * * * *', //per 10 seconds
      handler: '../module/cronHandlers/setPinExpired'
  }
}