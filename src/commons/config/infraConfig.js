require('dotenv').config();

module.exports = {
  redisHost: process.env.REDIS_HOST || "http://localhost",
  redisPort: process.env.REDIS_PORT || "6379",
  awsAccessKey: process.env.AWS_ACCESS_KEY || "",
  awsSecretKey: process.env.AWS_SECRET_KEY || "",
  awsRegion: process.env.AWS_REGION || "",
  redisRetryCount: process.env.REDIS_RETRY_COUNT || 3,
  apiPort: process.env.API_PORT || 3000
}