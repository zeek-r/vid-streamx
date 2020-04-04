let authService = null;

async function authenticate(req, res, next) {
  try {
    const userID = req["headers"]["x-stream-token"];
    const authenticated = await authService.authenticate(userID);

    if (authenticated) {
      return next();
    }
    return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    return res.status(500).json({ message: error.message || "Internal Server Error" });
  }
}

function init({ service = {} }) {
  authService = service;
  return {
    authenticate
  }
}
module.exports = { init };
