const { OpenSeaStreamClient } = require("@opensea/stream-js");
const { WebSocket } = require("ws");
const { SLUG } = require("./constant.js");

const client = new OpenSeaStreamClient({
  token: process.env.OPENSEA_API,
  connectOptions: {
    transport: WebSocket,
  },
});
client.connect();
client.onItemSold(SLUG, (event) => {
  console.log(event);
});
