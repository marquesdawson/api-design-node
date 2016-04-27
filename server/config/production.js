module.exports = {
  // disbable logging for production
  logging: false,
  db: {
    url: process.env.MONGOLAB_OLIVE_URI 
  }
};
