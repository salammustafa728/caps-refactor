"use strict";

require("dotenv").config();
const port = process.env.PORT || 3000;
const io = require("socket.io")(port);

io.on("connection", (socket) => {
  console.log("connected on", socket.id);
  socket.on("pickup", (payload) => {
    pickup(payload);
    io.emit("pickup", payload);
  });
  socket.on("in-transit", (payload) => {
    inTransit(payload);
  });
  socket.on("delivered", (payload) => {
    delivered(payload);
    io.emit("delivered", payload);
  });
});

function delivered(payload) {
  let deliveredEvent = {
    event: "delivered",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT", deliveredEvent);
}
function inTransit(payload) {
  let inTRansitEvent = {
    event: "in-transit",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT", inTRansitEvent);
}
function pickup(payload) {
  let pickupEvent = {
    event: "pickup",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT", pickupEvent);
}
