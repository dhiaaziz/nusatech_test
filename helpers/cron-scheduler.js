const cron = require('node-cron');
const { resolve } = require('path');


module.exports = {
    initCrons: (config) => {
        Object.keys(config).forEach(key => {
            // console.log('key', key)
            if(cron.validate(config[key].frequency)) {
                cron.schedule(config[key].frequency, () => {
                    const handler = require(resolve(
                        __dirname, // this file dir (helpers forlder)
                        config[key].handler
                    ))
                    handler();
                })
                // .start();
            }
        })

    }
}
