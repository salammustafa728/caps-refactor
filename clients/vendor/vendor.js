"use strict";
require("dotenv").config();
const { faker } = require("@faker-js/faker");
const io = require("socket.io-client");
const host = process.env.HOST || "http://localhost:3000";
const hubConnection = io.connect(host);

setInterval(() => {
  let data = {
    store: faker.company.companyName(),
    orderId: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.city(),
  };
  hubConnection.emit("pickup", data);
  setTimeout(() => {
    console.log("VENDOR: Thank you for delivering", data.orderId);
  }, 2000);
}, 5000);
