let redisInfra = null

async function authenticate (userID) {
  try {
    if(!userID) {
      return false;
    }
    const user = await redisInfra.getObject(`token:${userID}`);
    return user;
  } catch (error) {
    console.error(error)
    return false;
  }

}

function init({ infra = {} }) {
  redisInfra = infra;
  return { authenticate }
}

module.exports = { init }