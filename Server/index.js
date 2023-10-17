const server = require("./src/app.js");
require('dotenv').config();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`%s listening at ${port}`);
});
