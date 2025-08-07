// In a script file like seedOwners.js
const mongoose = require("mongoose");
const User = require("./models/user.js");
const dbUrl = "mongodb://localhost:27017/tripstay"; // adjust as needed

mongoose.connect(dbUrl).then(() => {
  console.log("DB Connected");
});

const createOwners = async () => {
  await User.deleteMany({}); // optional: clear existing users

  const user1 = new User({ username: "ankur", email: "john@example.com" });
  const user2 = new User({ username: "ankur2", email: "jane@example.com" });

  const registeredUser1 = await User.register(user1, "pass123");
  const registeredUser2 = await User.register(user2, "pass456");

  console.log("Owners created:", registeredUser1._id, registeredUser2._id);
};

createOwners().then(() => {
  mongoose.connection.close();
});
