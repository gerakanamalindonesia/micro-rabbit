const rabbitmq = require("amqplib");

exports.getUser = (req, res) => {
  const open = require("amqplib").connect(process.env.RABBIT_CONNECTION);

  var queue = "user-queue";
  var message = "Ini adalah data user yang di publish";

  //publisher
  open
    .then(function (conn) {
      return conn.createChannel();
    })
    .then(function (ch) {
      return ch.assertQueue(queue).then(function (ok) {
        return sendToQueue(queue, Buffer.from(message));
      });
    })
    .catch(console.warn);

  return res.send({
    message: "User berhasil diload",
  });
};
