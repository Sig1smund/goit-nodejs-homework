const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Sigismund:l10NKyvL5j5Ne6RU@db.oq1uajs.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
