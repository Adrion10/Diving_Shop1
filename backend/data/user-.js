const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: true,
  },
  {
    name: "Noel",
    email: "noel@example.com",
    password: bcrypt.hashSync('123456',10),
    password: ,
  },
  {
    name: "lace",
    email: "lace@example.com",
    password: bcrypt.hashSync('123456',10),

  },
];
