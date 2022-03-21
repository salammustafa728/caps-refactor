"use strict";

const io = require("socket.io-client");

const host = process.env.HOST || "http://localhost:3000";

const hubConnection = io.connect(host);

hubConnection.on("pickup", (payload) => {
    console.log(`DRIVER: Picked up ${payload.orderId}`);
      setTimeout(() => {
          hubConnection.emit("in-transit", payload);
      }, 2000);
      setTimeout(() => {
          hubConnection.emit('delivered',payload)
          console.log(`DRIVER: delivered up ${payload.orderId}`);
      }, 2000);
  });

