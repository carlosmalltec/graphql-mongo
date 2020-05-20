const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('connect', () => {
    console.log('REDIS READY');
});

redisClient.on('error', (e) => {
    console.log('REDIS ERROR', e);
});

module.exports = {
    getCache(key) {
        return new Promise((resolve, reject) => {
            redisClient.get(key, (err, value) => {
                if (err) {
                    console.log('error: getCache');
                    reject(err)
                } else {
                    console.log('ok: getCache');
                    resolve(value)
                }
            })
        });
    },

    setCache(key, value) {
        return new Promise((resolve, reject) => {
            redisClient.set(key, value, 'EX', 3600, (err) => {
                if (err) {
                    console.log('error: setCache');
                    reject(err)
                } else {
                    console.log('ok: setCache');
                    resolve(true)
                }
            })
        });
    }


};