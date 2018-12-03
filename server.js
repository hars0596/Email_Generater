const express = require("express");
const userController = require("./controller").User;
const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Harshit", lastName: "Tripathi" },
    { id: 2, firstName: "Sai", lastName: "Krishna" },
    { id: 3, firstName: "Vivek", lastName: "Tiwari" }
  ];
  res.json(customers);
});
require("../email-generator/routes")(app);

// app.get("/api/user", (res, req) => {
//   const customers = [userController.list];
//   res.json(customers);
// });
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness."
  })
);

const port = 8000;

app.listen(port, () => console.log("Server started on port 5000"));
