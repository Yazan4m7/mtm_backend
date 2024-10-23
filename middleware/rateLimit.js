const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 6 * 60 * 60 * 1000, 
  max: 10, 
  keyGenerator: (req) => {
   
    return req.user ? req.user.id : req.ip;
  },
  message: 'Too many requests, please try again after 6 hours.',
  standardHeaders: true, 
  legacyHeaders: false, 
});

module.exports = limiter;
