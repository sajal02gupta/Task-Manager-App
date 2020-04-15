const express = require("express");
require("./db/mongoose")
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT;

app.use(express.json()); //this is for getting the data in json. Without this, you cannot request the data from body
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`app listening on port`, port);
});
