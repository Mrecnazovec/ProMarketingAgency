// let testline = document.querySelector(".test_online");
// let online = 0,
//   ipsConnected = {}; //список подключенных ip

// io.on("connection", async (socket) => {
//   let address;

//   if (socket.handshake.headers["x-forwarded-for"] !== undefined) {
//     address = socket.handshake.headers["x-forwarded-for"];
//   } else {
//     address = socket.handshake.headers["x-real-ip"];
//   }

//   if (!ipsConnected.hasOwnProperty(address)) {
//     ipsConnected[address] = 1;
//     online++;
//   } else {
//     ipsConnected[address] += 1;
//   }

//   socket.on("disconnect", () => {
//     ipsConnected[address] -= 1;

//     if (ipsConnected[address] <= 0) {
//       delete ipsConnected[address];
//       online--;
//     }
//   });
//   console.log(online);
//   testline.innerHTML = online;
// });
