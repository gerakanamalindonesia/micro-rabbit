const stream = () => {
  const open = require("amqplib").connect(process.env.RABBIT_CONNECTION);

  const queue = "user-queue";

  // consume
  open
    .then(function (conn) {
      return conn.createChannel();
    })
    .then(function (ch) {
      return ch.assertQueue(queue).then(function (ok) {
        return ch.consume(queue, function (msg) {
          if (msg !== null) {
            console.log(msg.content.toString());
            ch.ack(msg);
          }
        });
      });
    })
    .catch(console.warn);
};

module.exports = stream;
