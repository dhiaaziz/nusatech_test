const config = require('../config/cron.config');
const scheduler = require('../helpers/cron-scheduler');

// console.log(scheduler)

// console.log(config)
scheduler.initCrons(config);
