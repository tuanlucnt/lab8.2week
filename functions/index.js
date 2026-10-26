const { onRequest } = require("firebase-functions/v2/https");
const app = require("./app");

exports.api = onRequest(
  {
    region: "asia-southeast1",
  },
  app
);